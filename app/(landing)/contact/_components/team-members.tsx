import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const teamMembers = [
  { name: 'Shakil Ahmad', role: 'Founder & CEO', image: '/shakil.png?height=100&width=100' },
  { name: 'Sitare', role: 'Head of Curriculum', image: '/sitare.jpg?height=100&width=100' },
  { name: 'Kumar Akash', role: 'Lead Instructor', image: '/akash.png?height=100&width=100' },
  { name: 'Anvesha Singh', role: 'Student Success Manager', image: '/anvesha.png?height=100&width=100' },
]

export function TeamMembers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member) => (
        <Card key={member.name} className="bg-[#1D1D21] border-gray-800">
          <CardHeader>
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="mb-2">{member.name}</CardTitle>
            <p className="text-gray-400">{member.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

