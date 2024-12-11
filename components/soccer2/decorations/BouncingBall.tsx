import * as THREE from "three";

export default class BouncingBall {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  gravity: number;

  constructor() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 3, 0);

    this.velocity = new THREE.Vector3(0.05, 0, 0);
    this.gravity = -0.098;
  }

  update() {
    this.velocity.y += this.gravity;
    this.mesh.position.add(this.velocity);

    if (this.mesh.position.y <= 0.5) {
      this.mesh.position.y = 0.5;
      this.velocity.y *= -0.8;
    }

    if (Math.abs(this.mesh.position.x) > 3) {
      this.velocity.x *= -1;
    }

    this.mesh.rotation.x += 0.05;
    this.mesh.rotation.z += 0.05;
  }
}
