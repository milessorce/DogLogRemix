export default function detectMobile() {
  try {
    return (window.orientation !== undefined) || (navigator.userAgent.indexOf('IEMobile') !== -1);
  } catch (e) {
    return false;
  }
}
