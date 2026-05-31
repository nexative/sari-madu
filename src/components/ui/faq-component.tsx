import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQs = {
    question: string
    answer: string
}[]

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
    return (
        <Accordion type='single' collapsible className='max-w-5xl mx-auto' defaultValue='item-1'>
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className='text-lg'>{item.question}</AccordionTrigger>
                    <AccordionContent className='text-muted-foreground text-base'>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default FAQ