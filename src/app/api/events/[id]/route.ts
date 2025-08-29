import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Params } from 'next/dist/server/request/params'

// GET - Fetch single event by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }>}
) {
  try {
    const { id } = await params
    if (!id) return
    
    if (Array.isArray(id)) {
      return NextResponse.json({ status: 400 })
    }
    
    const event = await prisma.event.findUnique({
      where: {
        id
      }
    })

    if (!event) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Event not found' 
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: event
    })
    
  } catch (error) {
    console.error('Error fetching event:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch event' 
      },
      { status: 500 }
    )
  }
}

// PUT - Update event by ID
export async function PUT(
  request: NextRequest,
  { params }: {params: Params}
) {
  try {
    const { id } = params
    if (!id) return
    
    if (Array.isArray(id)) {
      return NextResponse.json({ status: 400 })
    }

    const body = await request.json()
    const { title, description, date, location, imageUrl, registrationUrl, featured } = body

    // Check if event exists
    const existingEvent = await prisma.event.findUnique({
      where: { id }
    })

    if (!existingEvent) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Event not found' 
        },
        { status: 404 }
      )
    }

    // Update event
    const updatedEvent = await prisma.event.update({
      where: {
        id
      },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(date && { date: new Date(date) }),
        ...(location !== undefined && { location }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(registrationUrl !== undefined && { registrationUrl }),
        ...(featured !== undefined && { featured })
      }
    })

    return NextResponse.json({
      success: true,
      data: updatedEvent,
      message: 'Event updated successfully'
    })
    
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update event' 
      },
      { status: 500 }
    )
  }
}

// DELETE - Delete event by ID
export async function DELETE(
  { params }: {params: Params}
) {
  try {
    const { id } = params
    if (!id) return
    
    if (Array.isArray(id)) {
      return NextResponse.json({ status: 400 })
    }

    // Check if event exists
    const existingEvent = await prisma.event.findUnique({
      where: { id }
    })

    if (!existingEvent) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Event not found' 
        },
        { status: 404 }
      )
    }

    // Delete event
    await prisma.event.delete({
      where: {
        id
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Event deleted successfully'
    })
    
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to delete event' 
      },
      { status: 500 }
    )
  }
}
