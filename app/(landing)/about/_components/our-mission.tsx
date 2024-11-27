import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OurMission() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-[#1D1D21] border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6">
              At Learner&apos;s Lab, our mission is to empower learners of all ages and backgrounds 
              by providing personalized, adaptive, and engaging educational experiences. We believe 
              that every individual has unique potential, and our goal is to unlock that potential 
              through innovative learning solutions.
            </p>
            <p className="text-lg">
              We strive to bridge the gap between traditional education and the rapidly evolving 
              needs of the 21st century, ensuring that our learners are well-equipped to face the 
              challenges of tomorrow.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

