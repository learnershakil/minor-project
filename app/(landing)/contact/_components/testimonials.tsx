import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah J.',
    content: 'Learner\'s Lab transformed my approach to studying. The personalized curriculum helped me excel in my courses and boosted my confidence.',
  },
  {
    name: 'Mark T.',
    content: 'As a working professional, I appreciated the flexibility Learner\'s Lab offered. I could learn at my own pace and still achieve my goals.',
  },
  {
    name: 'Aisha M.',
    content: 'The instructors at Learner\'s Lab are exceptional. They truly care about each student\'s progress and go above and beyond to ensure understanding.',
  },
]

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-[#1D1D21] border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">&ldquo;{testimonial.content}&rdquo;</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

