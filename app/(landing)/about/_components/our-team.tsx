import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const teamMembers = [
  { name: 'Dr. Jane Smith', role: 'Founder & CEO', image: '/placeholder.svg?height=200&width=200', bio: 'Dr. Smith has over 20 years of experience in education and technology.' },
  { name: 'John Doe', role: 'Head of Curriculum', image: '/placeholder.svg?height=200&width=200', bio: 'John specializes in developing adaptive learning content across various subjects.' },
  { name: 'Emily Brown', role: 'Lead Instructor', image: '/placeholder.svg?height=200&width=200', bio: 'Emily is passionate about creating engaging and interactive learning experiences.' },
  { name: 'Michael Lee', role: 'Chief Technology Officer', image: '/placeholder.svg?height=200&width=200', bio: 'Michael leads our tech team in developing cutting-edge learning platforms.' },
]

export function OurTeam() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-[#17171A] border-gray-800">
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2">{member.name}</CardTitle>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}