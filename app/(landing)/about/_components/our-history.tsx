import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OurHistory() {
  const milestones = [
    { year: "JUL-2024", event: "Learner's Lab founded by Shakil Ahmad" },
    { year: "AUG-2024", event: "Launched our first adaptive learning platform" },
    { year: "SEPT-2024", event: "Expanded services to include corporate training solutions" },
    { year: "OCT-2019", event: "Introduced AI-powered personalized learning paths" },
    { year: "NOV-2022", event: "Reached 1 million active learners worldwide" }
  ]

  return (
    <section className="py-12 bg-[#1D1D21]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="bg-[#17171A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{milestone.year}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{milestone.event}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

