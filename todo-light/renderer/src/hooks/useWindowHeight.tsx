import { useState, useEffect } from "react";

export const useWindowHeight = () => {
  // windowの高さを管理するステート
  const [windowHeight, setWindowHeight] = useState<number>(400);

  /**
   * ウィンドウサイズを変更するたびにwindowHeightを更新
   * @returns ウィンドウの高さ
   */
  useEffect(() => {
    const getWindwHeight = () => {
      const windowDimensions = window.outerHeight;
      return windowDimensions;
    };

    const changeWindowHeight = () => {
      setWindowHeight(getWindwHeight());
    };

    window.addEventListener("resize", changeWindowHeight);
  }, [windowHeight]);

  return windowHeight;
};
