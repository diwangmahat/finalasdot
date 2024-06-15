import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './RecordStyles.css';

const Record = () => {
  const [isVisible, setIsVisible] = useState(false);
  const recordRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '0px', // no margin
      threshold: 0.5 // half of the target is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // disconnect once visible
      }
    }, options);

    if (recordRef.current) {
      observer.observe(recordRef.current);
    }

    return () => observer.disconnect(); // cleanup observer on unmount
  }, []);

  const clientsSpring = useSpring({
    number: isVisible ? 50 : 0,
    from: { number: 0 },
    config: { duration: 2000 }
  });

  const teamMembersSpring = useSpring({
    number: isVisible ? 10 : 0,
    from: { number: 0 },
    config: { duration: 2000 }
  });

  const experienceYearsSpring = useSpring({
    number: isVisible ? 5 : 0,
    from: { number: 0 },
    config: { duration: 2000 }
  });

  const completedProjectsSpring = useSpring({
    number: isVisible ? 70 : 0,
    from: { number: 0 },
    config: { duration: 2000 }
  });

  return (
    <div ref={recordRef} className='record-container'>
      <div className='record'>
        <animated.h1>
          {clientsSpring.number.to(n => `${n.toFixed(0)}+`)}
        </animated.h1>
        <p>Satisfied Clients</p>
      </div>
      <div className='record'>
        <animated.h1>
          {teamMembersSpring.number.to(n => `${n.toFixed(0)}+`)}
        </animated.h1>
        <p>Experienced Team Members</p>
      </div>
      <div className='record'>
        <animated.h1>
          {experienceYearsSpring.number.to(n => `${n.toFixed(0)}+`)}
        </animated.h1>
        <p>Years of Experience</p>
      </div>
      <div className='record'>
        <animated.h1>
          {completedProjectsSpring.number.to(n => `${n.toFixed(0)}+`)}
        </animated.h1>
        <p>Completed Projects</p>
      </div>
    </div>
  );
};

export default Record;
