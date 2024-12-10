"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // サーバーサイドでは初期値を `false` に設定
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);

    // 初期値を設定
    setMatches(media.matches);

    // リスナーを登録
    media.addEventListener("change", updateMatches);

    // クリーンアップ関数
    return () => media.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
}
