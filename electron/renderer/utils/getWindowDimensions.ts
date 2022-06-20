import { useEffect, useState } from "react";

interface dimensions {
  width: number;
  height: number;
}

/**
 * ウィンドウサイズを変更するたびに横幅と高さを取得して返す
 * @return width: ウィンドウの横幅, height: ウィンドウの高さ
 */
export const getWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState<dimensions>(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return windowDimensions;
};
