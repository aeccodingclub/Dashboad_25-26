import { Link } from 'react-router';
import { events } from '../data/club-events';

const AllEvents = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      workshop: 'Workshop',
      results: 'Results',
      meetup: 'Meetup',
      contest: 'Contest',
      discussion: 'Discussion'
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Events</h1>
          <p className="text-gray-600 mt-2">Discover upcoming workshops, contests, and club activities</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Link 
              key={event.id}
              to={event.link}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className={`h-2 bg-gradient-to-r ${event.color} rounded-t-lg`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {getTypeLabel(event.type)}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="font-medium">📅 {formatDate(event.date)}</span>
                    <span className="ml-2">⏰ {formatTime(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span>📍 {event.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span>👥 {event.attendees}/{event.maxAttendees} registered</span>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`bg-gradient-to-r ${event.color} h-1.5 rounded-full`}
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents
