import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, service, date, timeSlot } = body

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        service,
        date: new Date(date),
        timeSlot,
      },
    })

    // Send confirmation email to client
    await sendEmail({
      to: email,
      subject: 'Your Booking Confirmation - Rachid Dev',
      html: `
        <h1>Booking Confirmed</h1>
        <p>Thank you ${name} for booking a consultation with Rachid Dev.</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${timeSlot}</p>
        <p>We will contact you shortly to confirm.</p>
      `,
    })

    return NextResponse.json({ success: true, bookingId: booking.id })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}