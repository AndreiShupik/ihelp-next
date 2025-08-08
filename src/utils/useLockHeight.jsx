import { useEffect } from "react";

export function useLockHeight() {
  useEffect(() => {
    let minHeight = window.innerHeight;

    function checkHeight() {
      minHeight = Math.min(minHeight, window.innerHeight);
    }

    // Track for a short time (e.g., 500ms–1s) to catch any UI adjustments
    const resizeListener = () => checkHeight();
    window.addEventListener("resize", resizeListener);

    // Also run immediately
    checkHeight();

    // After short delay, lock the smallest found height
    const timer = setTimeout(() => {
      document.documentElement.style.setProperty("--vh", `${minHeight}px`);
      window.removeEventListener("resize", resizeListener);
    }, 100); // adjust if needed

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
}
