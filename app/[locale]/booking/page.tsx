'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTranslations } from 'next-intl'
import { CalendarIcon, Clock } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import toast from 'react-hot-toast'

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
})

type BookingData = z.infer<typeof bookingSchema>

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
]

export default function BookingPage() {
  const t = useTranslations('Booking')
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        toast.success(t('successMessage'))
      } else {
        toast.error(t('errorMessage'))
      }
    } catch (error) {
      toast.error(t('errorMessage'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {t('subtitle')}
        </p>

        <div className="bg-black/50 border border-gold/20 rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder={t('namePlaceholder')}
                  {...register('name')}
                  className="bg-black/50 border-gold/20 text-white"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  {...register('email')}
                  className="bg-black/50 border-gold/20 text-white"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder={t('phonePlaceholder')}
                  {...register('phone')}
                  className="bg-black/50 border-gold/20 text-white"
                />
              </div>
              <div>
                <Select
                  onValueChange={(value) => setValue('service', value)}
                >
                  <SelectTrigger className="bg-black/50 border-gold/20 text-white">
                    <SelectValue placeholder={t('servicePlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="w-5 h-5 text-gold" />
                  <span className="text-white">Select Date</span>
                </div>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date)
                    if (date) setValue('date', date.toISOString())
                  }}
                  disabled={{ before: new Date() }}
                  className="bg-black/50 rounded-lg p-4"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="text-white">Select Time</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setSelectedTime(slot)
                        setValue('timeSlot', slot)
                      }}
                      className={`p-2 rounded border transition-colors ${
                        selectedTime === slot
                          ? 'bg-gold text-black border-gold'
                          : 'bg-black/50 border-gold/20 text-white hover:bg-gold/20'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && <p className="text-red-500 text-sm">{errors.timeSlot.message}</p>}
              </div>
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}