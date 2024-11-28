import { Card, CardContent } from '@/components/ui/card'

export function Map() {
  return (
    <Card className="bg-[#17171A] border-gray-800">
      <CardContent className="p-0">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.357065835925!2d75.7028793154685!3d31.25541598145416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5ba4d4b4b4b5%3A0x4b4b4b4b4b4b4b4b!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1629814250853!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}