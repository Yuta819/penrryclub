"use client";

import React, { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const asciiArt = `
0                                   MMMa
0                                   MMMMMNaaJ JQgggg
0                                  dMMMMMMMMMMMMMMMMMMMNg
0                                  MMMMMMMMMMMMMMMMMMMMMMMMa.
0                                  MMMMMMMMMMMMMMMMMMMMMMMMMMa
0                                 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNg.
0                               jMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNgJ.
0                             lMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNJ
0                            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMB7l
0                      .gMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9
0                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0                  .dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMl
0                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMF
0                 dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMb
0                lMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0               .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
0             .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM|
0          .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMl
0         .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0        .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMB^
0       .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM^  
0     .dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMF
0  .gMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0    lTMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMF
0         TMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0            lTMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0                lTMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMF
0                     TMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
0                         TMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0                              WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
0                                 lTMMMMMMMMMMMMMMMMMMMMMMMMMB
0                                     lTMMMMMMMMMMMMMMMMMM 
0                                         lTMMMMMMMMMMMD
0                                             lTMMMMMMb
0                                                 THMMMe
0                                                      HNa_
0                                                          WNa .
0                                                             7WNg .        .dMNNg_
0        .NNg.               ..NNg                                7WMa .   .MMMMMMMN,
0        WNNNNMNgMNa    MNMNNNNNNNNh.                                .7WMN.JMMMMMMMMMY
0       .MNNNNNNMMNNNp  qMNNNNMNNNNNb                              .JgMMMMMMMMMMMMM@
0     .JNNNMNNMMdNNNNNl   qTMNNNMNNMN                           .MMMMMMMMMMMMMMMMMN&
0    d   NNMg^ JNNNNMNNJ___MNNNNNMMW3                         .MMMMMMMMMMMMMMMMMMMMMMNa
0        XNNNMMNNNNNMM^^MNNNNMNMM^                           MMMMMl lMMMMMMMMMMMMMMMMMe?TMNx
0      __dMNNNNNNMMYc    MNMNNN                            dMMM    JMMMMMMMMMM@    TMMMNg,lTMNJ
0     lM   .MNNNNp     lNNMTMNNNN                         MM       dMMMMMMMMMMl       TMMMMNJ.lTMNx
0     NMJ__NNMMTNNNNNNNNNNNNMMNNNMh  ..                  MMF      .dMMMMMMMMMM.           MMMMMMMM
0    dNNNNNNMD  4NNMNNMNNMNNNMWNNNNNMNN,                 Bd      .MMMMMMMMMMlMMMM              _lL
0    .WMNNMM    .JNNNNMNMMH^   4NNNNNNMMb                       .MMMMMMMMMMMNaY
0     .dNM    .MNNMNggJ.Ng      ?MMNNNNNNb                     lMMMMMMMMMMMMMMMm 
0    .MNg      MNNNNNNNNNNY      .WMNNNNNF                    lMMMMMMMMMMMMMMMMMMe
0     MMg.g       q777NMcl    MNMmQ .QQQ^                    MMMMMMMMMMMMMMMMMMMMMN
0       NNN      .  .NF      dNNMNNNNJ                      MMMMMMMMMMMMMMMMMMMMMMMM
0       NNNMm    _WNNNb    _jJNNNNNNNNb                    MMMMMMMMMMMMMMMMMMMMMMMMMN
0       TMNNNNNe   MNMN      qMNNMNNNNM.                 MMMMMMMMMMMMMMMMMM97MMMMMMMMp
0        qMNNNM    JNNNM       WNNMNNNN                MMMMMMMMMMHWMMMM9      TMMMMMMN
0           q      .MNNMl        qTMMM=               MMMMMMMMMMM               MMMMMM
0                                                    MMMMMMMMM@^                 WMMMMMN
0                                                    MMMMMMM5                    M uMMk
0                                                   MMMM                           MMMMMNN
`
function AsciiCharacter({ char, position, originalPosition }: { char: string; position: [number, number, number]; originalPosition: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  useFrame((state) => {
    if (!mesh.current) return
    if (isAnimating) {
      mesh.current.position.lerp(new THREE.Vector3(...originalPosition), 0.02)
      if (mesh.current.position.distanceTo(new THREE.Vector3(...originalPosition)) < 0.01) {
        setIsAnimating(false)
      }
    } else {
      mesh.current.position.x = originalPosition[0] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1
      mesh.current.position.y = originalPosition[1] + Math.cos(state.clock.elapsedTime * 2 + position[1]) * 0.1
    }
  })

  return (
    <mesh ref={mesh} position={position}>
      <Text
        fontSize={0.4}
        color={char === '0' ? 'black' : 'red'}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
      >
        {char}
      </Text>
    </mesh>
  )
}

function AsciiArtObject() {
  const characters = useMemo(() => {
    const lines = asciiArt.split('\n');
    const maxLineLength = Math.max(...lines.map(line => line.length));
    return lines.flatMap((line, y) =>
      line.split('').map((char, x) => ({
        char,
        position: [
          (x - maxLineLength / 2) * 0.3,
          -y * 0.6 + lines.length * 0.3,
          0
        ] as [number, number, number],
      }))
    ).filter(({ char }) => char.trim() !== '')
  }, [])


  const randomPositions = useMemo(() => {
    return characters.map(() => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number])
  }, [characters])

  return (
    <group>
      {characters.map(({ char, position }, index) => (
        <AsciiCharacter key={index} char={char} position={randomPositions[index]} originalPosition={position} />
      ))}
    </group>
  )
}

const YosakaiAsciiArt3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AsciiArtObject />
      </Canvas>
    </div>
  )
}

export default YosakaiAsciiArt3D

