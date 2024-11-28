// app/hooks/useLocomotiveScroll.js

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = () => {
  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== 'undefined') {
      const scrollContainer = document.querySelector('[data-scroll-container]');

      if (scrollContainer) {
        // Initialize LocomotiveScroll
        const scroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        // Cleanup function
        return () => {
          if (scroll) scroll.destroy();
        };
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once
};

export default useLocomotiveScroll;
