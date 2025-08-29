'use client'

import { useState } from "react";
import { format, startOfMonth, getDay, parseISO, isSameDay, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, Eye, Target } from "lucide-react";
import HoverInfo from "@/components/monthly-shcedule/HoverInfo";
import EventModal from "@/components/monthly-shcedule/EventModal";
import { type ClubEvent } from "@/lib/types";
import { events } from "@/lib/data";
import Link from "next/link";

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
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Main Container */}
      <div className="relative bg-white/20 dark:bg-gray-900/30 backdrop-blur-xl border border-white/30 dark:border-gray-600/40 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90 dark:from-gray-800/90 dark:via-purple-800/90 dark:to-gray-800/90 backdrop-blur-sm p-4 sm:p-6 text-white relative overflow-hidden border-b border-white/10 dark:border-gray-600/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-indigo-600/30 dark:from-purple-400/20 dark:via-transparent dark:to-indigo-400/20"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrevMonth}
                className="p-2 sm:p-2.5 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/10 dark:border-gray-600/20 hover:border-white/30 dark:hover:border-gray-400/30"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <Link
                href="/events"
                className="p-2 sm:p-2.5 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 group backdrop-blur-sm border border-white/10 dark:border-gray-600/20 hover:border-white/30 dark:hover:border-gray-400/30"
                title="View all events"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200 dark:text-purple-300 group-hover:text-white transition-colors duration-200" />
              </Link>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1 text-white">
                {format(currentDate, "MMMM yyyy")}
              </h2>
              <p className="text-purple-200 dark:text-purple-300 text-xs sm:text-sm">Event Calendar</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackToCurrent}
                className={`p-2 sm:p-2.5 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 group backdrop-blur-sm border border-white/10 dark:border-gray-600/20 hover:border-white/30 dark:hover:border-gray-400/30 ${
                  isCurrentMonth ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                title="Back to current month"
                disabled={isCurrentMonth}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200 dark:text-purple-300 group-hover:text-white transition-colors duration-200" />
              </button>
              
              <button 
                onClick={handleNextMonth}
                className="p-2 sm:p-2.5 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/10 dark:border-gray-600/20 hover:border-white/30 dark:hover:border-gray-400/30"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-3 sm:p-5 lg:p-6 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md">
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div key={day} className="text-center font-bold text-gray-600 dark:text-gray-300 py-2 text-xs sm:text-sm uppercase tracking-wider">
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
                    h-10 sm:h-12 lg:h-14 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md lg:hover:shadow-lg backdrop-blur-md border
                    ${eventForDay 
                      ? `bg-gradient-to-br ${eventForDay.color} text-white hover:shadow-xl lg:hover:shadow-2xl hover:scale-105 relative overflow-hidden border-white/30 dark:border-gray-500/40 hover:backdrop-blur-lg` 
                      : `bg-white/30 dark:bg-gray-800/20 hover:bg-white/60 dark:hover:bg-gray-700/40 border-white/40 dark:border-gray-500/30 ${
                          isCurrentDay 
                            ? 'border-purple-400/70 dark:border-purple-400/70 bg-purple-100/40 dark:bg-purple-800/30 shadow-lg shadow-purple-300/40 dark:shadow-purple-700/40' 
                            : 'hover:border-gray-200/60 dark:hover:border-gray-400/50'
                        }`
                    }
                  `}
                  onMouseEnter={() => eventForDay && setHoveredEvent(eventForDay)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => eventForDay && setSelectedEvent(eventForDay)}
                >
                  {eventForDay && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 dark:from-white/10 dark:to-black/30"></div>
                  )}
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-1">
                    <span className={`text-sm sm:text-base lg:text-lg font-bold ${
                      eventForDay 
                        ? 'text-white' 
                        : isCurrentDay 
                          ? 'text-purple-700 dark:text-purple-300' 
                          : 'text-gray-700 dark:text-gray-200'
                    }`}>
                      {format(currentDay, "d")}
                    </span>
                    
                    {eventForDay && (
                      <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 right-0.5">
                        <div className="bg-white/40 dark:bg-white/50 backdrop-blur-sm rounded-full h-0.5 sm:h-1 w-full"></div>
                      </div>
                    )}
                    
                    {isCurrentDay && !eventForDay && (
                      <div className="absolute bottom-1 w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full shadow-lg"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/40 dark:border-gray-500/40 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded shadow-sm"></div>
              <span className="font-medium">Workshop</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/40 dark:border-gray-500/40 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded shadow-sm"></div>
              <span className="font-medium">Meetup</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/40 dark:border-gray-500/40 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded shadow-sm"></div>
              <span className="font-medium">Results</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/40 dark:border-gray-500/40 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded shadow-sm"></div>
              <span className="font-medium">Showcase</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/40 dark:border-gray-500/40 shadow-lg">
              <div className="w-3 h-3 border-2 border-purple-500 dark:border-purple-400 bg-purple-200/60 dark:bg-purple-700/40 rounded shadow-sm"></div>
              <span className="font-medium">Today</span>
            </div>
          </div>
        </div>
      </div>

      <HoverInfo event={hoveredEvent} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default MonthlySchedule;
