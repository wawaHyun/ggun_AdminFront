
const throttleOnRendering = (callback: (...args: any[]) => void, wait: number) => {
  let isThrottled = false;

  return (...args: any[]) => {
      if (!isThrottled) {
          callback(...args);
          isThrottled = true;
          setTimeout(() => {
              isThrottled = false;
          }, wait);
      }
  };
};

export default throttleOnRendering