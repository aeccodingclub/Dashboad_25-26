import { useState } from "react";
import { Link } from "react-router";
import { format, startOfMonth, getDay, parseISO, isSameDay, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, Eye, Target } from "lucide-react";
import HoverInfo from "./monthly-schedule/HoverInfo";
import EventModal from "./monthly-schedule/EventModal";
import { type ClubEvent } from "../types/events";
import { events } from "../data/club-events";

const MonthlySchedule = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [hoveredEvent, setHoveredEvent] = useState<ClubEvent | null>(null);
  
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const monthStart = startOfMonth(currentDate);
  const firstDayOffset = getDay(monthStart);

  const handlePrevMonth = (): void => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
      setIsAnimating(false);
    }, 150);
  };

  const handleNextMonth = (): void => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
      setIsAnimating(false);
    }, 150);
  };

  const handleBackToCurrent = (): void => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentDate(new Date());
      setIsAnimating(false);
    }, 150);
  };

  const isCurrentMonth = currentDate.getMonth() === new Date().getMonth() && 
                       currentDate.getFullYear() === new Date().getFullYear();
                       
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20"></div>
        <div className="relative flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevMonth}
              className="p-2 sm:p-2.5 hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <Link
              to="/events"
              className="p-2 sm:p-2.5 hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 group"
              title="View all events"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200 group-hover:text-white transition-colors duration-200" />
            </Link>
          </div>
          
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm">Event Calendar</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleBackToCurrent}
              className={`p-2 sm:p-2.5 hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 group ${
                isCurrentMonth ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Back to current month"
              disabled={isCurrentMonth}
            >
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200 group-hover:text-white transition-colors duration-200" />
            </button>
            
            <button 
              onClick={handleNextMonth}
              className="p-2 sm:p-2.5 hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-3 sm:p-5 lg:p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="text-center font-bold text-gray-600 py-2 text-xs sm:text-sm uppercase tracking-wider">
              {day.slice(0, 3)}
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3 transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          {Array.from({ length: 42 }).map((_, index) => {
            const dayOffset = index - firstDayOffset;
            const currentDay = new Date(monthStart.getFullYear(), monthStart.getMonth(), dayOffset + 1);
            const isInCurrentMonth = currentDay.getMonth() === currentDate.getMonth();
            const eventForDay = events.find(e => isSameDay(parseISO(e.date), currentDay));
            const isCurrentDay = isToday(currentDay);
            
            // Empty cell for days outside the month range
            if (!isInCurrentMonth) {
              return <div key={`empty-${index}`} className="h-10 sm:h-12 lg:h-14" />;
            }
            
            return (
              <div
                key={currentDay.toISOString()}
                className={`
                  h-10 sm:h-12 lg:h-14 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md lg:hover:shadow-lg
                  ${eventForDay 
                    ? `bg-gradient-to-br ${eventForDay.color} text-white hover:shadow-xl lg:hover:shadow-2xl hover:scale-105 relative overflow-hidden` 
                    : `bg-white hover:bg-gray-100 border border-gray-200 ${isCurrentDay ? 'border-purple-300 bg-purple-50' : ''} hover:border-gray-300`
                  }
                `}
                onMouseEnter={() => eventForDay && setHoveredEvent(eventForDay)}
                onMouseLeave={() => setHoveredEvent(null)}
                onClick={() => eventForDay && setSelectedEvent(eventForDay)}
              >
                {eventForDay && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
                )}
                
                <div className="relative h-full flex flex-col items-center justify-center p-1">
                  <span className={`text-sm sm:text-base lg:text-lg font-bold ${eventForDay ? 'text-white' : isCurrentDay ? 'text-purple-600' : 'text-gray-700'}`}>
                    {format(currentDay, "d")}
                  </span>
                  
                  {eventForDay && (
                    <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 right-0.5">
                      <div className="bg-white/30 backdrop-blur-sm rounded-full h-0.5 sm:h-1 w-full"></div>
                    </div>
                  )}
                  
                  {isCurrentDay && !eventForDay && (
                    <div className="absolute bottom-1 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded"></div>
            <span>Workshop</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
            <span>Meetup</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded"></div>
            <span>Results</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
            <span>Showcase</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <div className="w-3 h-3 border-2 border-purple-300 bg-purple-50 rounded"></div>
            <span>Today</span>
          </div>
        </div>
      </div>

      <HoverInfo event={hoveredEvent} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default MonthlySchedule;
