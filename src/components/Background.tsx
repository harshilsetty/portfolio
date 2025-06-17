import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate random positions for particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10
  }));

  // Generate animated lines
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    length: Math.random() * 100 + 50,
    angle: Math.random() * 360,
    duration: Math.random() * 15 + 10
  }));

  // Calculate grid distortion based on mouse position
  const calculateGridDistortion = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mousePosition.x - centerX) / centerX;
    const moveY = (mousePosition.y - centerY) / centerY;
    
    return {
      skewX: moveY * 5,
      skewY: moveX * 5,
      scale: 1 + Math.abs(moveX * moveY) * 0.1,
    };
  };

  const gridDistortion = calculateGridDistortion();

  // Generate circuit nodes - reduced number and size
  const circuitNodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    pulseDuration: Math.random() * 4 + 3,
    delay: Math.random() * 5
  }));

  // Generate matrix rain characters - reduced number and opacity
  const matrixRain = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -20,
    speed: Math.random() * 2 + 1,
    characters: Array.from({ length: 8 }, () => 
      String.fromCharCode(Math.random() * 93 + 33)
    ).join(''),
    delay: Math.random() * 5
  }));

  // Generate scanning lines/data streams
  const scanningLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startY: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Mesh gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(199, 166, 225, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(199, 166, 225, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)
          `,
          opacity: 0.3,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(199, 166, 225, 0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Circuit nodes */}
      {circuitNodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          className="absolute rounded-full bg-[#00FFFF]"
          style={{
            width: node.size,
            height: node.size,
            left: `${node.x}%`,
            top: `${node.y}%`,
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: node.pulseDuration,
            repeat: Infinity,
            delay: node.delay,
          }}
        />
      ))}

      {/* Animated lines */}
      {lines.map((line) => (
        <motion.div
          key={`line-${line.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${line.startX}%`,
            top: `${line.startY}%`,
            width: `${line.length}px`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(199, 166, 225, 0.1), transparent)',
            transform: `rotate(${line.angle}deg)`,
            transformOrigin: 'left center',
          }}
          animate={{
            opacity: [0, 0.2, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'rgba(199, 166, 225, 0.1)',
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Matrix rain effect */}
      {matrixRain.map((rain) => (
        <motion.div
          key={`rain-${rain.id}`}
          className="absolute text-[#00FFFF] text-sm font-mono"
          style={{
            left: `${rain.x}%`,
            top: `${rain.y}%`,
            opacity: 0.08,
          }}
          animate={{
            y: ['-20%', '120%'],
          }}
          transition={{
            duration: rain.speed * 12,
            repeat: Infinity,
            delay: rain.delay,
            ease: "linear",
          }}
        >
          {rain.characters}
        </motion.div>
      ))}

      {/* Interactive Grid */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          skewX: gridDistortion.skewX,
          skewY: gridDistortion.skewY,
          scale: gridDistortion.scale,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(199, 166, 225, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(199, 166, 225, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.2,
          }}
        />
      </motion.div>

      {/* Tech grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(199, 166, 225, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199, 166, 225, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.2,
        }}
      />

      {/* Scanning lines/Data streams */}
      {scanningLines.map((line) => (
        <motion.div
          key={`scan-line-${line.id}`}
          className="absolute w-full h-px bg-[#00FFFF]"
          style={{
            top: `${line.startY}%`,
            opacity: 0.05,
          }}
          initial={{ x: '-100%' }}
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            delay: line.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Background; 