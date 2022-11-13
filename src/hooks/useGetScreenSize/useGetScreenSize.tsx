import { useLayoutEffect, useState } from "react";

const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    function updateSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { screenSize };
};

export { useGetScreenSize };
