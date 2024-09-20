import { useState, useEffect, useRef } from "react";

const Achievements = () => {
  const [inView, setInView] = useState(false);
  const [localOrders, setLocalOrders] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [providers, setProviders] = useState(0);
  const achievementRef = useRef(null);

  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(achievementRef.current);
        }
      },
      { threshold: 0.5 }
    );
    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }
    return () => {
      if (achievementRef.current) {
        observer.unobserve(achievementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animateValue(0, 90, 2000, setLocalOrders);
      animateValue(0, 90, 2000, setDeliveryTime);
      animateValue(0, 140, 2000, setProviders);
    }
  }, [inView]);

  return (
    <div ref={achievementRef} className="bg-[#FAF6EF] py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-gray-900">{localOrders}%</h3>
          <p className="mt-2 text-lg text-gray-700">
            of all orders are produced locally
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-900">{deliveryTime}%</h3>
          <p className="mt-2 text-lg text-gray-700">
            of orders arrive within 5 days of ordering
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-900">{providers}+</h3>
          <p className="mt-2 text-lg text-gray-700">
            print providers across 32 countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
