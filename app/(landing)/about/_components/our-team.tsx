import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const teamMembers = [
  { name: 'Shakil Ahmad', role: 'Founder & CEO', image: '/shakil.png?height=100&width=100', bio: 'Shakil has over 20 years of experience in education and technology.' },
  { name: 'Sitare', role: 'Head of Curriculum', image: '/sitare.jpg?height=100&width=100', bio: 'Sitare specializes in developing adaptive learning content across various subjects.' },
  { name: 'Kumar Akash', role: 'Lead Instructor', image: '/akash.png?height=100&width=100', bio: 'Akash is passionate about creating engaging and interactive learning experiences.' },
  { name: 'Anvesha Singh', role: 'Chief Technology Officer', image: '/anvesha.png?height=100&width=100', bio: 'Anvesha leads our tech team in developing cutting-edge learning platforms.' },
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