import { useState, useEffect, useCallback, useRef } from 'react';
import { BayBenPhase } from './bay-ben.constants';
import { bayBenAudio } from './bay-ben-audio';

export interface FlyingBall {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  isLanded: boolean;
}

export const useBayBenAnimation = () => {
  const [currentPhase, setCurrentPhase] = useState<BayBenPhase>('shaping');
  const [ballsCount, setBallsCount] = useState<number>(1);
  const [round, setRound] = useState<number>(1);
  const [processionAngle, setProcessionAngle] = useState<number>(30);
  const [tossedBalls, setTossedBalls] = useState<FlyingBall[]>([]);
  const [tossedCount, setTossedCount] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      bayBenAudio.setMuted(next);
      return next;
    });
  }, []);

  // Action: Roll another rice ball
  const handleRollBall = useCallback(() => {
    bayBenAudio.playRiceShaping();
    setBallsCount((prev) => {
      const next = prev < 7 ? prev + 1 : 7;
      if (next === 7) bayBenAudio.playTempleGong();
      return next;
    });
  }, []);

  // Action: Step forward in circumambulation
  const handleAdvanceProcession = useCallback(() => {
    bayBenAudio.playProcessionChime();
    setProcessionAngle((prev) => {
      const next = (prev + 45) % 360;
      if (next < prev) {
        setRound((r) => (r < 3 ? r + 1 : 1));
        bayBenAudio.playTempleGong();
      }
      return next;
    });
  }, []);

  // Action: Toss to specific coordinate or default target
  const handleTossRiceToPoint = useCallback((tx = 695, ty = 405) => {
    bayBenAudio.playMeritToss();
    const id = Date.now();
    const newBall: FlyingBall = {
      id,
      startX: 395,
      startY: 395,
      targetX: tx,
      targetY: ty,
      progress: 0,
      isLanded: false,
    };

    setTossedBalls((prev) => [...prev, newBall]);
    setTossedCount((prev) => (prev < 7 ? prev + 1 : 7));
  }, []);

  // Default toss handler
  const handleTossRice = useCallback(() => {
    const targets = [
      { x: 195, y: 405 },
      { x: 695, y: 405 },
      { x: 250, y: 390 },
      { x: 650, y: 390 },
      { x: 450, y: 435 },
    ];
    const tgt = targets[tossedCount % targets.length]!;
    handleTossRiceToPoint(tgt.x, tgt.y);
  }, [tossedCount, handleTossRiceToPoint]);

  // Tick active flying balls animation
  useEffect(() => {
    if (tossedBalls.length === 0) return;
    const interval = setInterval(() => {
      setTossedBalls((prev) =>
        prev
          .map((b) => ({ ...b, progress: b.progress + 0.08 }))
          .filter((b) => b.progress <= 1.05),
      );
    }, 32);
    return () => clearInterval(interval);
  }, [tossedBalls.length]);

  // Unified Primary Action button
  const handlePerformAction = useCallback(() => {
    if (currentPhase === 'shaping') {
      if (ballsCount < 7) {
        handleRollBall();
      } else {
        setCurrentPhase('procession');
        bayBenAudio.playTempleGong();
      }
    } else if (currentPhase === 'procession') {
      if (round === 3 && processionAngle >= 300) {
        setCurrentPhase('tossing');
        bayBenAudio.playTempleGong();
      } else {
        handleAdvanceProcession();
      }
    } else if (currentPhase === 'tossing') {
      handleTossRice();
    }
  }, [currentPhase, ballsCount, round, processionAngle, handleRollBall, handleAdvanceProcession, handleTossRice]);

  // Auto-play ritual loop
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentPhase((curr) => {
        if (curr === 'shaping') {
          setBallsCount((b) => {
            if (b < 7) {
              bayBenAudio.playRiceShaping();
              return b + 1;
            }
            bayBenAudio.playTempleGong();
            return 7;
          });
          return 'procession';
        } else if (curr === 'procession') {
          setProcessionAngle((deg) => (deg + 60) % 360);
          setRound((r) => (r < 3 ? r + 1 : 1));
          bayBenAudio.playProcessionChime();
          return 'tossing';
        } else {
          handleTossRice();
          return 'shaping';
        }
      });
    }, 2800);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, handleTossRice]);

  // Reset ritual
  const handleReset = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentPhase('shaping');
    setBallsCount(1);
    setRound(1);
    setProcessionAngle(30);
    setTossedBalls([]);
    setTossedCount(0);
    bayBenAudio.playTempleGong();
  }, []);

  return {
    currentPhase,
    setCurrentPhase,
    ballsCount,
    round,
    processionAngle,
    tossedBalls,
    tossedCount,
    isAutoPlaying,
    setIsAutoPlaying,
    isMuted,
    handleToggleMute,
    handlePerformAction,
    handleRollBall,
    handleAdvanceProcession,
    handleTossRice,
    handleTossRiceToPoint,
    handleReset,
  };
};
