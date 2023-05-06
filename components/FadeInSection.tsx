import { useRef, ReactNode, useState, useEffect } from "react";
import styles from "@/styles/About.module.css";

interface FadeInSectionInterface {
  children: ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionInterface) => {
  const domRef = useRef();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:

        if (domRef.current !== undefined) {
          observer.unobserve(domRef.current);
        }
      }
    });

    if (domRef.current !== undefined) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef as unknown as React.RefObject<HTMLDivElement>}
      className={`${styles.block} fade-in-section ${isVisible ? " is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
