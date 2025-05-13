import { useEffect, useRef } from "react";

export default function useOutsideClick(callback, bubbleDown = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && e.target.contains(ref.current)) {
          callback();
        }
      }

      document.addEventListener("click", handleClick, bubbleDown);
      return () =>
        document.removeEventListener("click", handleClick, bubbleDown);
    },
    [callback, bubbleDown]
  );
  return ref;
}
