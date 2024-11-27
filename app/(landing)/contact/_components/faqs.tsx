import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion'
  
  const faqs = [
    {
      question: 'What makes Learner\'s Lab unique?',
      answer: 'Learner\'s Lab offers personalized learning experiences tailored to each student\'s needs, interests, and learning style. Our adaptive technology and expert instructors ensure that every learner receives the support they need to succeed.'
    },
    {
      question: 'How do I get started with Learner\'s Lab?',
      answer: 'Getting started is easy! Simply reach out to us via email or phone, and one of our education consultants will guide you through the process, including an initial assessment to customize your learning plan.'
    },
    {
      question: 'What subjects do you offer?',
      answer: 'We offer a wide range of subjects including mathematics, sciences, languages, humanities, and more. Our curriculum is constantly expanding to meet the diverse needs of our learners.'
    },
    {
      question: 'Is Learner\'s Lab suitable for all age groups?',
      answer: 'Yes, we cater to learners of all ages, from elementary school students to adult learners. Our personalized approach ensures that the content and teaching methods are appropriate for each age group and skill level.'
    },
  ]
  
  export function FAQs() {
    return (
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  
  