import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Fetch all events
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        date: 'desc'
      }
    })
    
    return NextResponse.json({
      success: true,
      data: events,
      count: events.length
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch events' 
      },
      { status: 500 }
    )
  }
}

// POST - Create a new event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    const { title, description, date, location, imageUrl, signupUrl, featured } = body
    
    if (!title || !description || !date) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Title, description, and date are required' 
        },
        { status: 400 }
      )
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location: location || null,
        imageUrl: imageUrl || null,
        signupUrl: signupUrl || null,
        featured: featured || false
      }
    })

    return NextResponse.json({
      success: true,
      data: event,
      message: 'Event created successfully'
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create event' 
      },
      { status: 500 }
    )
  }
}
