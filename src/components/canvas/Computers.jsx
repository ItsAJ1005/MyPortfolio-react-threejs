import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Text } from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';

import CanvasLoader from "../Loader"

// Fallback component when model fails to load
const ModelError = () => (
  <group>
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    <Text
      position={[0, -1.5, 0]}
      fontSize={0.2}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Failed to load 3D model
    </Text>
  </group>
);

// Function to clean up geometry and fix NaN values
const cleanGeometry = (geometry) => {
  if (!geometry.attributes.position) return;
  
  const positions = geometry.attributes.position.array;
  let hasNaN = false;
  
  // Check for NaN values in position data
  for (let i = 0; i < positions.length; i++) {
    if (isNaN(positions[i])) {
      positions[i] = 0; // Replace NaN with 0
      hasNaN = true;
    }
  }
  
  if (hasNaN) {
    console.warn('Found and fixed NaN values in geometry');
    geometry.attributes.position.needsUpdate = true;
  }
  
  // Recompute bounding volumes
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
};

const Computers = ({ isMobile }) => {
  const [error, setError] = useState(null);
  const [model, setModel] = useState(null);
  
  useEffect(() => {
    let mounted = true;
    
    const loadModel = async () => {
      try {
        const gltf = await new Promise((resolve, reject) => {
          const loader = new GLTFLoader();
          
          // Add DRACO loader for compressed models
          const dracoLoader = new DRACOLoader();
          dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
          loader.setDRACOLoader(dracoLoader);
          
          loader.load(
            '/desktop_pc/scene.gltf',
            (gltf) => {
              console.log('Model loaded successfully');
              resolve(gltf);
            },
            undefined,
            (error) => {
              console.error('Error loading GLTF:', error);
              reject(error);
            }
          );
        });
        
        if (!mounted) return;
        
        // Clean up the model
        gltf.scene.traverse((child) => {
          if (child.isMesh && child.geometry) {
            cleanGeometry(child.geometry);
            
            // Ensure materials are properly cloned
            if (Array.isArray(child.material)) {
              child.material = child.material.map(mat => mat.clone());
            } else if (child.material) {
              child.material = child.material.clone();
            }
          }
        });
        
        setModel(gltf.scene);
      } catch (err) {
        console.error('Failed to load 3D model:', err);
        if (mounted) setError(err);
      }
    };
    
    loadModel();
    return () => { mounted = false; };
  }, []);
  
  if (error) {
    console.error('Model error:', error);
    return <ModelError />;
  }
  
  if (!model) {
    return null; // Or return a loading state
  }

  return (
    <group>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[10, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={model}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

// Simple error boundary for Three.js components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ModelError />;
    }
    return this.props.children;
  }
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ 
        position: [20, 3, 5], 
        fov: 25,
        near: 0.1,
        far: 1000
      }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ErrorBoundary fallback={<ModelError />}>
          <Computers isMobile={isMobile} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1}
          />
        </ErrorBoundary>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
