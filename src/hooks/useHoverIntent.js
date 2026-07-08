import { useRef } from "react";

export default function useHoverIntent(delay = 180) {
  const timeout = useRef();

  const run = (callback) => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      callback();
    }, delay);
  };

  const cancel = () => {
    clearTimeout(timeout.current);
  };

  return {
    run,
    cancel,
  };
}