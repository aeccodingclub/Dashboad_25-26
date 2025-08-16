import { format, parseISO } from "date-fns";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { type ClubEvent } from "../../types/events";

interface MousePosition {
  x: number;
  y: number;
}

interface HoverInfoProps {
  event: ClubEvent | null
}

const HoverInfo = ({ event }: HoverInfoProps) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!event) return null;

  const eventDate = parseISO(event.date);
  
  return (
    <div 
      className="fixed z-50 pointer-events-none transition-all duration-200 ease-out hidden lg:block"
      style={{
        left: mousePosition.x + 15,
        top: mousePosition.y - 10,
        transform: 'translate(0, -100%)'
      }}
    >
      <div className="bg-black/90 backdrop-blur-md text-white p-3 rounded-lg shadow-2xl border border-white/10 max-w-xs">
        <div className="space-y-1.5">
          <div className="font-bold text-xs text-gray-300">
            {format(eventDate, "EEE, MMM d")}
          </div>
          <div className="font-semibold text-sm text-white">
            {event.title}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-300">
            <Clock className="w-3 h-3" />
            {format(eventDate, "h:mm a")}
          </div>
          <div className="text-xs text-gray-400 border-t border-white/10 pt-1.5">
            Click for details
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverInfo
