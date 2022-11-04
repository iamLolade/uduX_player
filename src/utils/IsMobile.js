import { useState, useEffect } from "react";


const IsMobile = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  return isMobile;
}

export default IsMobile;