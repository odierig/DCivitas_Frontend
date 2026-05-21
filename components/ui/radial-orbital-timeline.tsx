"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  icon: React.ElementType;
  relatedIds: number[];
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[parseInt(key)] = false;
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center orb */}
          <div className="absolute w-16 h-16 rounded-full flex items-center justify-center z-10"
            style={{ background: "linear-gradient(135deg, #6660A1, #2E3974, #9E86CD)" }}>
            <div className="absolute w-20 h-20 rounded-full border animate-ping opacity-40"
              style={{ borderColor: "rgba(158,134,205,0.5)" }} />
            <div className="absolute w-24 h-24 rounded-full border animate-ping opacity-25"
              style={{ borderColor: "rgba(158,134,205,0.3)", animationDelay: "0.5s" }} />
            <div className="w-8 h-8 rounded-full"
              style={{ backgroundColor: "rgba(233,234,244,0.9)" }} />
          </div>

          {/* Orbit ring */}
          <div className="absolute rounded-full"
            style={{
              width: "380px", height: "380px",
              border: "1px solid rgba(158,134,205,0.2)",
            }} />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const showAbove = position.y > 50;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Glow ring */}
                {isPulsing && (
                  <div className="absolute rounded-full animate-pulse"
                    style={{
                      width: "56px", height: "56px",
                      left: "-8px", top: "-8px",
                      background: "radial-gradient(circle, rgba(158,134,205,0.3) 0%, transparent 70%)",
                    }} />
                )}

                {/* Node button */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                  style={{
                    backgroundColor: isExpanded
                      ? "var(--purple-light)"
                      : isRelated
                      ? "rgba(158,134,205,0.4)"
                      : "rgba(46,57,116,0.8)",
                    borderColor: isExpanded
                      ? "var(--purple-light)"
                      : isRelated
                      ? "rgba(158,134,205,0.8)"
                      : "rgba(158,134,205,0.4)",
                    transform: isExpanded ? "scale(1.5)" : "scale(1)",
                    color: "var(--paper)",
                  }}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className="absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300"
                  style={{
                    color: isExpanded ? "var(--paper)" : "rgba(233,234,244,0.65)",
                    transform: isExpanded ? "scale(1.1) translateX(-50%)" : "translateX(-50%)",
                    left: "50%",
                  }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card
                    className="absolute left-1/2 -translate-x-1/2 w-64 overflow-visible shadow-2xl"
                    style={{
                      backgroundColor: "rgba(24,30,72,0.95)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(158,134,205,0.3)",
                      ...(showAbove ? { bottom: "5.5rem" } : { top: "5rem" }),
                    }}
                  >
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-px h-3"
                      style={{
                        backgroundColor: "rgba(158,134,205,0.5)",
                        ...(showAbove ? { bottom: "-12px", top: "auto" } : { top: "-12px" }),
                      }}
                    />
                    <CardHeader className="pb-2">
                      <p
                        className="text-xs uppercase tracking-wider mb-1"
                        style={{ color: "var(--purple-light)" }}
                      >
                        {item.subtitle}
                      </p>
                      <CardTitle
                        className="text-sm"
                        style={{ color: "var(--paper)", fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif", fontWeight: 400 }}
                      >
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs" style={{ color: "rgba(233,234,244,0.8)", lineHeight: 1.65 }}>
                      <p>{item.content}</p>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3" style={{ borderTop: "1px solid rgba(158,134,205,0.2)" }}>
                          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(233,234,244,0.5)" }}>
                            Also see
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-6 px-2 py-0 text-xs rounded-none transition-all"
                                  style={{
                                    borderColor: "rgba(158,134,205,0.3)",
                                    backgroundColor: "transparent",
                                    color: "rgba(233,234,244,0.75)",
                                  }}
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
