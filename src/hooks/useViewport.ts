import { useEffect, useState } from "react";

type Viewport = {
  width: number;
  height: number;
};
const useViewport = (): Viewport => {
  const [viewport, setViewport] = useState<Viewport>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const setWidthCallback = (): void =>
        setViewport({
          width: window.innerWidth,
          height: window.innerHeight,
        });

      window.addEventListener("resize", setWidthCallback);
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      return () => window.removeEventListener("resize", setWidthCallback);
    }
  }, []);

  return viewport;
};

export default useViewport;
