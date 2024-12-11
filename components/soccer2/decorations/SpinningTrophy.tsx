import * as THREE from "three";

export default class SpinningTrophy {
  mesh: THREE.Group;

  constructor() {
    this.mesh = new THREE.Group();

    const baseGeometry = new THREE.CylinderGeometry(0.5, 0.7, 0.2, 32);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    this.mesh.add(base);

    const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
    const stemMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = 0.6;
    this.mesh.add(stem);

    const cupGeometry = new THREE.SphereGeometry(
      0.4,
      32,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.5
    );
    const cupMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    cup.position.y = 1.2;
    cup.rotation.x = Math.PI;
    this.mesh.add(cup);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 2, 2);
    this.mesh.add(light);
  }

  update() {
    this.mesh.rotation.y += 0.01;
  }
}
