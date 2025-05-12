import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";
import { rnd } from "https://js.sabae.cc/rnd.js";

export class InputDice extends HTMLElement {
  constructor(roll = rnd(6) + 1) {
    super();
    
    this.style.display = "inline-block";

    const rect = this.getBoundingClientRect();
    const cw = rect.width || 300;
    const ch = rect.height || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, cw / ch, 0.1, 1000);
    camera.position.z = 1.6;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(cw, ch);
    this.appendChild(renderer.domElement);

    const img = new Image();
    img.src = "./nums.png"; // 1〜6が横に並んだ画像
    const texture = new THREE.Texture(img);
    texture.needsUpdate = true;

    // 画像が横6分割されてると仮定し、各面に対応したUVマッピング
    const materials = [];
    const dicemap = [0, 5, 1, 4, 2, 3];
    for (let i = 0; i < 6; i++) {
      const map = texture.clone();
      const mat = new THREE.MeshBasicMaterial({ map });
      mat.map.repeat.set(1 / 6, 1);
      mat.map.offset.set(dicemap[i] / 6, 0);
      mat.map.wrapS = mat.map.wrapT = THREE.ClampToEdgeWrapping;
      mat.map.needsUpdate = true;
      materials.push(mat);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    this.cube = cube;
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    
    this.roll(roll);
  }
  roll(roll = rnd(6) + 1) {
    if (this.flg) return;
    this.flg = true;

    // set texture
    const dicemap = [0, 5, 1, 4, 2, 3];
    const off = dicemap.findIndex(i => i == roll - 1) + 2;
    for (let i = 0; i < 6; i++) {
      const mat = this.cube.material[i];
      mat.map.offset.set(dicemap[(i + off) % 6] / 6, 0);
      mat.map.needsUpdate = true;
    }

    // animation
    const dt = 2000; // 2sec
    const rnds = [];
    for (let i = 0; i < 4; i++) {
      rnds[i] = 3 + rnd(4);
    }
    const stopt = performance.now() + dt;

    const animate = () => {
      const t0 = stopt - performance.now();
      const t = t0 < 0 ? 0 : t0;
      this.cube.rotation.x = Math.pow(t / 1000, rnds[0]) * rnds[1];
      this.cube.rotation.y = Math.pow(t / 1000, rnds[2]) * rnds[3];
      this.renderer.render(this.scene, this.camera);
      if (t > 0) {
        requestAnimationFrame(animate);
        return;
      }
      this.flg = false;
      
      this.value = roll;
      this.dispatchEvent(new InputEvent("input", {
        bubbles: true,
        composed: true,
        data: this.value,
        //inputType: e.inputType
      }));
    }
    animate();
  }
}

customElements.define("input-dice", InputDice);
