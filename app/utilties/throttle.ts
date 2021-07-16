export const throttle = (callback: (...[]) => void, delay: number) => {
  let timeout = false;
  return (...rest: any[]) => {
    if (!timeout) {
      timeout = true;
      callback.apply(this, rest);
      setTimeout(() => {
        timeout = false;
        callback.apply(this, rest);
      }, delay);
    }
  }
};
