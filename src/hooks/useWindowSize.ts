import React, { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [clientWidth, setClientWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      setClientWidth(window.document.documentElement.clientWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return clientWidth;
};

export default useWindowSize;
