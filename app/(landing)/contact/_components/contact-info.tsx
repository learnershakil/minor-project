import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactInfo() {
  return (
    <Card className="bg-[#17171A] border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 mt-1 text-blue-400" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:info@learnerslab.com" className="hover:text-blue-400 transition-colors">
              info@learnerslab.com
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 mt-1 text-blue-400" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <a href="tel:+919709358602" className="hover:text-blue-400 transition-colors">
              +91 97093 58602
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 mt-1 text-blue-400" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>Lovely Professional University, Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 mt-1 text-blue-400" />
          <div>
            <h3 className="font-semibold">Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

