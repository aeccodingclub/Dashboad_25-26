// not yet implemented anywhere!

type CoreTeamRole = 'senior' | 'coordinator' | 'moderator'
type Role = CoreTeamRole | 'member'

interface Member {
  id: string
  name: string
  email: string
  hashPass: string
  batch: number // passing year
  roll: string
  dept: string
  role: Role
  level: number // 0-10
  exp: number // 0-100
  events: string[] // event IDs
}

type EventType = 'workshop' | 'contest' | 'discussion' | 'meetup'
type EventStatus = 'upcoming' | 'completed' | 'cancelled'

interface ClubEvent {
  id: string
  title: string
  type: EventType
  status: EventStatus
  attendees: string[] // member IDs
  maxAttendees: number
  description: string
  venue: string
  dateTime: string // ISO date string
  link?: string
}

interface SocialLink {
  id: string
  platform: string
  url: string
}

interface CoreTeam {
  id: string
  year: number // ending year
  members: string[]
  socials: SocialLink[]
}