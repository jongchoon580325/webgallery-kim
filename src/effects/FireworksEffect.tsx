import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

interface FireworksEffectProps {
  children: React.ReactNode;
  particleCount?: number;    // 한 번의 불꽃놀이에서 생성되는 파티클 개수
  particleColors?: string[]; // 파티클 색상 배열
  duration?: number;         // 불꽃놀이 지속 시간 (밀리초 단위, 기본값: 1000ms = 1초)
  particleSize?: number;     // 파티클 크기
  spread?: number;          // 파티클이 퍼지는 범위
  triggerOnHover?: boolean; // 마우스 오버시 실행 여부
  triggerOnClick?: boolean; // 클릭시 실행 여부
  disabled?: boolean;       // 비활성화 여부
  className?: string;
  style?: React.CSSProperties;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
}

export interface FireworksEffectRef {
  triggerFireworks: (x?: number, y?: number) => void;
}

const FireworksEffect = forwardRef<FireworksEffectRef, FireworksEffectProps>(({
  children,
  particleCount = 30,
  particleColors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'],
  duration = 1000,
  particleSize = 5,
  spread = 60,
  triggerOnHover = true,
  triggerOnClick = false,
  disabled = false,
  className = '',
  style = {}
}, ref) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const createParticles = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 2 + Math.random() * 2;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      
      newParticles.push({
        id: `particle-${Date.now()}-${i}`,
        x,
        y,
        vx: Math.cos(angle) * velocity * (0.5 + Math.random()),
        vy: Math.sin(angle) * velocity * (0.5 + Math.random()),
        size: particleSize * (0.5 + Math.random()),
        color,
        life: 1.0,
      });
    }
    
    setParticles(newParticles);
    setIsActive(true);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setParticles([]);
      setIsActive(false);
    }, duration);
  };

  useEffect(() => {
    if (!isActive || particles.length === 0) return;
    
    let animationFrameId: number;
    const startTime = Date.now();
    
    const updateParticles = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed >= duration) {
        setParticles([]);
        setIsActive(false);
        return;
      }
      
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.05,
          life: p.life - (1 / (duration / 16)),
        })).filter(p => p.life > 0)
      );
      
      animationFrameId = requestAnimationFrame(updateParticles);
    };
    
    animationFrameId = requestAnimationFrame(updateParticles);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, particles, duration]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !triggerOnHover) return;
    
    const rect = containerRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createParticles(x, y);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !triggerOnClick) return;
    
    const rect = containerRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createParticles(x, y);
  };

  const triggerFireworks = (x?: number, y?: number) => {
    if (disabled || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    createParticles(
      x !== undefined ? x : rect.width / 2,
      y !== undefined ? y : rect.height / 2
    );
  };

  useImperativeHandle(ref, () => ({
    triggerFireworks
  }));

  return (
    <div
      ref={containerRef}
      className={`fireworks-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      onMouseOver={handleMouseOver}
      onClick={handleClick}
    >
      {children}
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: particle.color,
            opacity: particle.life,
            pointerEvents: 'none',
            transform: `scale(${particle.life})`,
            transition: 'transform 0.1s linear',
          }}
        />
      ))}
    </div>
  );
});

FireworksEffect.displayName = 'FireworksEffect';

export default FireworksEffect; 