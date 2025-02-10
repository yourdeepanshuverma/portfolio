import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function ObserverProvider({ children }) {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
}
