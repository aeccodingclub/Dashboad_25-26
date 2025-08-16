import type { ClubEvent } from "../types/events";

export const events: ClubEvent[] = [
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
