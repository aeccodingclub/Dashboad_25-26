import { events } from "@/lib/data"
import MonthlySchedule from "../MonthlySchedule"

const EventsSection = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return '🛠️'
      case 'results':
        return '🏆'
      case 'meetup':
        return '👥'
      default:
        return '📅'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our exciting events and connect with fellow developers
          </p>
        </div>
        
        {/* Monthly Schedule - Keep at top */}
        <MonthlySchedule />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {events
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3)
            .map((event, index) => (
            <div 
              key={event.id} 
              className="group relative bg-white dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-600/30"
            >
              {/* Gradient accent border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${event.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Type icon and status badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{getTypeIcon(event.type)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(event.status)}`}>
                  {event.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {event.title}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(event.date)}
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>

                {/* Attendees info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {event.attendees}/{event.maxAttendees}
                  </div>
                  <div className="w-16 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${event.color} rounded-full transition-all duration-300`}
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {event.description}
              </p>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800">
                Register Now →
              </button>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-block text-blue-600 dark:text-blue-400 font-semibold text-lg transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
            View All Events
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
