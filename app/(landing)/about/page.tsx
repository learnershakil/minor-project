import { Metadata } from 'next'
import { OurMission } from '@/app/(landing)/about/_components/our-mission'
import { OurHistory } from '@/app/(landing)/about/_components/our-history'
import { OurTeam } from '@/app/(landing)/about/_components/our-team'
import { OurValues } from '@/app/(landing)/about/_components/our-values'
import { Achievements } from '@/app/(landing)/about/_components/achievements'
import Logo from '@/app/dashboard/_components/logo'

export const metadata: Metadata = {
  title: "About Us | Learner's Lab",
  description: "Learn about Learner's Lab, our mission, history, and the team behind our personalized learning solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#17171A] text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <a href="/" className='h-auto'>
              <Logo />
            </a>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-blue-400">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-[#1D1D21]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Learner&apos;s Lab</h1>
            <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
              Discover the story behind Learner&apos;s Lab, our mission, and the passionate team 
              dedicated to revolutionizing personalized learning experiences.
            </p>
          </div>
        </section>

        <OurMission />

        <OurHistory />

        <OurTeam />

        <OurValues />

        <Achievements />
      </main>

      <footer className="bg-[#1D1D21] py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Learner&apos;s Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

