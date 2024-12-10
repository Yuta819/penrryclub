"use client";

interface CyberFrameProps {
  children: React.ReactNode;
  className?: string;
  alwaysVisible?: boolean;
}

export default function CyberFrame({
  children,
  className = "",
  alwaysVisible = false,
}: CyberFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* メインコンテンツ */}
      <div className="relative z-10">{children}</div>

      {/* 斜めのグリッドパターン */}
      <div
        className={`absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_calc(50%-1px),#1a365d_calc(50%),transparent_calc(50%+1px))] bg-[length:20px_20px] transition-opacity duration-300 ${
          alwaysVisible ? "opacity-10" : "opacity-0 group-hover:opacity-10"
        }`}
      ></div>
    </div>
  );
}
