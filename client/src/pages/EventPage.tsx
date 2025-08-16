import { useParams } from 'react-router';
import { type ClubEvent } from '../types/events';
import AllEvents from './AllEvents';

// Your events data
const events: ClubEvent[] = [
  {
    id: 1,
    title: "Web Dev Workshop #1",
    date: "2025-08-29T12:30:00",
    location: "S6, CS & ETE",
    description: "Learn the basics of HTML & CSS in 1 hour with tons of practice projects.",
    type: "workshop",
    link: "/events/workshops/web-dev-2025-01",
    attendees: 0,
    maxAttendees: 60,
    color: "from-purple-500 to-indigo-600",
    status: "upcoming"
  },
  {
    id: 2,
    title: "CP & DSA Solutions #1",
    date: "2025-08-30T12:00:00",
    location: "G6, CS & ETE",
    description: "Solution discussion of all CodeForces weekly contests held in August.",
    type: "results",
    link: "/events/results/cp-dsa-2025-01",
    attendees: 1,
    maxAttendees: 60,
    color: "from-emerald-500 to-teal-600",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Introductory Session",
    date: "2025-08-26T13:30:00",
    location: "G6, CS & ETE",
    description: "Introduction to Coding Club; first session for the new batch of 2025-29.",
    type: "meetup",
    link: "/events/meetups/introduction-2025",
    attendees: 176,
    maxAttendees: 200,
    color: "from-rose-500 to-pink-600",
    status: "upcoming"
  }
];

// Helper function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return {
    day: date.toLocaleDateString('en-US', { weekday: 'long' }),
    date: date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }),
    time: date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  };
};

// Helper function to get attendance percentage
const getAttendancePercentage = (attendees: number, maxAttendees: number) => {
  return Math.round((attendees / maxAttendees) * 100);
};

interface EventPageProps {
  event: ClubEvent
}

// Individual event type components
const WorkshopEvent = ({ event }: EventPageProps) => {
  const dateInfo = formatDate(event.date);
  const attendancePercentage = getAttendancePercentage(event.attendees, event.maxAttendees);
  
  return (
    <div className="space-y-8">
      {/* Event Header */}
      <div className={`rounded-2xl bg-gradient-to-r ${event.color} p-8 text-white`}>
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-wrap gap-6 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <span>{dateInfo.day}, {dateInfo.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⏰</span>
            <span>{dateInfo.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Workshop Details */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">About This Workshop</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>HTML fundamentals and semantic markup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>CSS styling and layout techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Hands-on practice with real projects</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">What to Bring</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">💻 Laptop</span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">📝 Notebook</span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">☕ Enthusiasm</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Registration</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Registered</span>
                  <span>{event.attendees}/{event.maxAttendees}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${event.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${attendancePercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{attendancePercentage}% full</p>
              </div>
              
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  event.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Prerequisites</h3>
            <p className="text-gray-600 text-sm">No prior experience required! This workshop is perfect for beginners.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultsEvent = ({ event }: EventPageProps) => {
  const dateInfo = formatDate(event.date);
  
  return (
    <div className="space-y-8">
      {/* Event Header */}
      <div className={`rounded-2xl bg-gradient-to-r ${event.color} p-8 text-white`}>
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-wrap gap-6 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <span>{dateInfo.day}, {dateInfo.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⏰</span>
            <span>{dateInfo.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Session Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Problems Discussed</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">Problem A: Array Manipulation</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Easy</span>
                </div>
                <p className="text-sm text-gray-600">Basic array operations and complexity analysis.</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">Problem B: Dynamic Programming</h4>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Medium</span>
                </div>
                <p className="text-sm text-gray-600">Optimized solutions using memoization techniques.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">Problem C: Graph Theory</h4>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Hard</span>
                </div>
                <p className="text-sm text-gray-600">Advanced graph algorithms and shortest path solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contest Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Participants</span>
                <span className="font-medium">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Problems</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Score</span>
                <span className="font-medium">73%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">📄 Editorial Solutions</a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">💻 Code Repository</a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">📊 Contest Analysis</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetupEvent = ({ event }: EventPageProps) => {
  const dateInfo = formatDate(event.date);
  const attendancePercentage = getAttendancePercentage(event.attendees, event.maxAttendees);
  
  return (
    <div className="space-y-8">
      {/* Event Header */}
      <div className={`rounded-2xl bg-gradient-to-r ${event.color} p-8 text-white`}>
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-wrap gap-6 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <span>{dateInfo.day}, {dateInfo.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⏰</span>
            <span>{dateInfo.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Meetup Content */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Welcome to Coding Club!</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Session Agenda</h3>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-600 font-semibold">1:30 PM</div>
                <div>
                  <h4 className="font-medium text-gray-900">Welcome & Introductions</h4>
                  <p className="text-sm text-gray-600">Get to know the club and fellow members</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 font-semibold">2:00 PM</div>
                <div>
                  <h4 className="font-medium text-gray-900">Club Overview</h4>
                  <p className="text-sm text-gray-600">Learn about our activities, events, and opportunities</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-semibold">2:30 PM</div>
                <div>
                  <h4 className="font-medium text-gray-900">Q&A Session</h4>
                  <p className="text-sm text-gray-600">Ask questions and interact with senior members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Attendance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Registered</span>
                  <span>{event.attendees}/{event.maxAttendees}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${event.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${attendancePercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{attendancePercentage}% capacity</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">What to Expect</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">🎯</span>
                <span>Learn about coding opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">🤝</span>
                <span>Network with like-minded peers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">📚</span>
                <span>Discover learning resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">🚀</span>
                <span>Join our community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

type EventTypeKey = "workshops" | "results" | "meetups" | "contests" | "discussions";
type EventTypeValue = "workshop" | "results" | "meetup" | "contest" | "discussion";

const eventTypeMap: Record<EventTypeKey, EventTypeValue> = {
  workshops: "workshop",
  results: "results",
  meetups: "meetup",
  contests: "contest",
  discussions: "discussion",
};

const validTypes: EventTypeKey[] = ["workshops", "contests", "discussions", "results", "meetups"];

const EventPage = () => {
  const { type, slug } = useParams<{ type: EventTypeKey; slug: string }>();

  if (!type || !slug) {
    return <AllEvents />;
  }

  // Validate event type using the defined validTypes array
  if (!validTypes.includes(type)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Invalid Event Type</h1>
          <p className="text-gray-600 mb-2">Event type "{type}" is not recognized.</p>
          <p className="text-sm text-gray-500">Valid types: {validTypes.join(', ')}</p>
        </div>
      </div>
    );
  }

  // Find the event using the defined eventTypeMap
  const event = events.find(e => {
    return e.type === eventTypeMap[type] && e.link === `/events/${type}/${slug}`;
  });
  
  // Check if event exists
  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600">The {type.slice(0, -1)} "{slug}" could not be found.</p>
        </div>
      </div>
    );
  }
  
  // Render appropriate component based on type
  const renderEventComponent = () => {
    switch (event.type) {
      case 'workshop':
        return <WorkshopEvent event={event} />;
      case 'results':
        return <ResultsEvent event={event} />;
      case 'meetup':
        return <MeetupEvent event={event} />;
      default:
        return <div className="text-center py-20">Event type not yet implemented</div>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900">Home</a>
            <span>→</span>
            <a href="/events" className="hover:text-gray-900">Events</a>
            <span>→</span>
            <span className="capitalize">{type}</span>
            <span>→</span>
            <span className="text-gray-900 font-medium">{event.title}</span>
          </div>
        </div>
      </div>
      
      {/* Event Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {renderEventComponent()}
        
        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <button className={`px-8 py-3 bg-gradient-to-r ${event.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}>
            {event.type === 'results' ? 'View Solutions' : 'Register Now'}
          </button>
          <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-200">
            Share Event
          </button>
          <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-200">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
