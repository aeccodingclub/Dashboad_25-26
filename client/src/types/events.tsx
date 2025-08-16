export interface ClubEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'workshop' | 'meetup' | 'showcase' | 'results';
  link: string;
  attendees: number;
  maxAttendees: number;
  color: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}
