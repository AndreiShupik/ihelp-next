export function isIOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /iPad|iPhone|iPod/.test(userAgent) || (userAgent.includes("Macintosh") && "ontouchend" in document);
}
