import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const achievements = [
  { metric: '1M+', description: 'Active Learners' },
  { metric: '50+', description: 'Countries Reached' },
  { metric: '95%', description: 'Learner Satisfaction' },
  { metric: '500+', description: 'Courses Offered' },
]

export function Achievements() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-[#17171A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-400 text-center">{achievement.metric}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

