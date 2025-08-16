import { format, parseISO } from "date-fns";
import { Calendar, Clock, ExternalLink, MapPin, Users, X } from "lucide-react";
import { type ClubEvent } from "../../types/events";

interface EventModalProps {
  event: ClubEvent | null
  onClose: () => void
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  if (!event) return null;

  const eventDate = parseISO(event.date);
  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md max-h-[85vh] overflow-y-auto transform transition-all duration-300 ease-out scale-100">
        <div className={`h-20 sm:h-24 bg-gradient-to-br ${event.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          <div className="absolute bottom-2 sm:bottom-3 left-4 sm:left-5 text-white">
            <h2 className="text-lg sm:text-xl font-bold mb-0.5">{event.title}</h2>
            <div className="text-xs sm:text-sm opacity-90 capitalize">{event.type}</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-gray-700">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-sm sm:text-base">{format(eventDate, "EEE, MMM d, yyyy")}</span>
            </div>
            
            <div className="flex items-center gap-2.5 text-gray-700">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-sm sm:text-base">{format(eventDate, "h:mm a")}</span>
            </div>
            
            <div className="flex items-center gap-2.5 text-gray-700">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-sm sm:text-base">{event.location}</span>
            </div>
            
            <div className="flex items-center gap-2.5 text-gray-700">
              <Users className="w-4 h-4 text-gray-500" />
              <div className="flex-1">
                <span className="font-medium text-sm sm:text-base">{event.attendees} / {event.maxAttendees} attending</span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div 
                    className={`h-1.5 bg-gradient-to-r ${event.color} rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${attendancePercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Description</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{event.description}</p>
          </div>

          <div className="space-y-2.5 pt-3 border-t border-gray-100">
            <button 
              className={`w-full bg-gradient-to-r ${event.color} text-white py-2.5 sm:py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base`}
              onClick={() => window.open(`${event.link}/register`, '_blank')}
            >
              Register Now
            </button>
            
            <div className="flex gap-2">
              <button 
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-1.5 text-sm"
                onClick={() => window.open(event.link, '_blank')}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View
              </button>
              
              <button 
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: `Check out this event by the Coding Club: ${event.title}`,
                      text: `Join us for ${event.title}! ${event.description ? event.description.substring(0, 100) + '...' : ''}`,
                      url: event.link
                    });
                  } else {
                    const shareText = `Check out this event by the Coding Club: ${event.title} - ${event.link}`;
                    navigator.clipboard.writeText(shareText);
                  }
                }}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal
