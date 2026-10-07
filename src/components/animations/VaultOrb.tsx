"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type VaultOrbProps = {
  className?: string;
  interactive?: boolean;
};

export function VaultOrb({ className = "", interactive = true }: VaultOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.2, 15);
    const material = new THREE.MeshPhongMaterial({
      color: 0xc9c6c5,
      shininess: 100,
      transparent: true,
      opacity: 0.75,
      wireframe: true,
    });
    const centralOrb = new THREE.Mesh(geometry, material);
    scene.add(centralOrb);

    const innerGeometry = new THREE.IcosahedronGeometry(0.6, 8);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0x00f2ff,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
    });
    const innerOrb = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerOrb);

    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0xf5e1a4,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(2, 2, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 0.6));
    const cyanLight = new THREE.PointLight(0x00f2ff, 0.4, 20);
    cyanLight.position.set(-3, 1, 2);
    scene.add(cyanLight);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMouseMove);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      centralOrb.rotation.y += 0.004;
      centralOrb.rotation.x += 0.002;
      innerOrb.rotation.y -= 0.006;
      particlesMesh.rotation.y += 0.0008;
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
