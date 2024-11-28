import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Lightbulb, Rocket } from 'lucide-react'

const values = [
  { icon: BookOpen, title: 'Lifelong Learning', description: 'We believe in fostering a love for learning that lasts a lifetime.' },
  { icon: Users, title: 'Inclusivity', description: 'We strive to make quality education accessible to learners from all backgrounds.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously seek new ways to improve and enhance the learning experience.' },
  { icon: Rocket, title: 'Empowerment', description: 'We aim to equip our learners with the skills and confidence to achieve their goals.' },
]

export function OurValues() {
  return (
    <section className="py-12 bg-[#1D1D21]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-[#17171A] border-gray-800">
              <CardHeader>
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold text-center">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

