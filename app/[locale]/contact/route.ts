import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    // Save lead to database
    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        message,
        source: 'contact-form',
      },
    })

    // Send email notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Lead</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}