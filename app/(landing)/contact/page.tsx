import { Metadata } from 'next'
import { ContactInfo } from '@/app/(landing)/contact/_components/contact-info'
import { Map } from '@/app/(landing)/contact/_components/map'
import { FAQs } from '@/app/(landing)/contact/_components/faqs'
import { TeamMembers } from '@/app/(landing)/contact/_components/team-members'
import { Testimonials } from '@/app/(landing)/contact/_components/testimonials'
import '@/app/(landing)/contact/style.css'
import Logo from '@/app/dashboard/_components/logo'

export const metadata: Metadata = {
  title: "Contact Us | Learner's Lab",
  description: "Get in touch with Learner's Lab for personalized learning solutions.",
}

export default function ContactPage() {
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
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-[#1D1D21]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
              We&apos;re here to support your personalized learning journey. 
              Reach out to us using the information below or visit our office.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <ContactInfo />
              <Map />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <TeamMembers />
          </div>
        </section>

        <section className="py-12 bg-[#1D1D21]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <FAQs />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Learners Say</h2>
            <Testimonials />
          </div>
        </section>
      </main>

      <footer className="bg-[#1D1D21] py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Learner&apos;s Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

