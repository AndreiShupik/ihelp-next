import { useState, useEffect } from "react";

/**
 * Reusable hook to track if the screen width is below a breakpoint.
 * @param {number} breakpoint - The max screen width for "mobile".
 * @returns {boolean} - True if the screen is mobile-sized.
 */
export default function useIsMobile(breakpoint = 992) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
