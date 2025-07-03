// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import { useInView } from "react-intersection-observer";

import "./InfiniteScrollContainer.css"; // CSS dosyasını içe aktarın
interface InfiniteScrollContainerProps extends React.PropsWithChildren {
  onBottomReached: () => void;
  className?: string;
  layout?: "horizontal" | "vertical"; // Yeni prop
}

export default function InfiniteScrollContainer({
  children,
  onBottomReached,
  className = "",
  layout = "vertical", // Varsayılan düzen
}: InfiniteScrollContainerProps) {
  const { ref } = useInView({
    rootMargin: "151px",
    onChange(inView) {
      if (inView) {
        onBottomReached();
      }
    },
  });

  return (
    <div className={`container ${layout} ${className}`}>
      {children}
      <div ref={ref} />
    </div>
  );
}