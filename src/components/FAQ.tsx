
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What can I expect from a meet and greet with Kevin Costner?",
      answer: "Kevin is known for his genuine, down-to-earth personality. Expect warm conversation, great stories from his career in Hollywood and on Yellowstone, and authentic interaction. He's particularly passionate about discussing his family, his work as a director, and his music with Kevin Costner & Modern West."
    },
    {
      question: "Are photos allowed during the event?",
      answer: "Yes! Professional photos are included in all experience packages. Personal cameras and phones are welcome during designated photo opportunities. We also provide high-quality digital copies of all professional photos taken during your experience."
    },
    {
      question: "What should I wear to the event?",
      answer: "Smart casual attire is recommended. Many guests choose to wear western-inspired clothing as a nod to Kevin's Yellowstone character, but it's not required. The most important thing is that you feel comfortable and confident."
    },
    {
      question: "Can I bring items for Kevin to sign?",
      answer: "Absolutely! Kevin is happy to sign personal items, movie posters, books, or memorabilia. We recommend bringing no more than 2-3 items to ensure everyone gets adequate time. All experience packages also include signed memorabilia."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer full refunds up to 30 days before the event. Between 30-14 days, a 50% refund is available. Unfortunately, no refunds are possible within 14 days of the event date, but tickets can be transferred to another person."
    },
    {
      question: "How far in advance are events announced?",
      answer: "We typically announce events 60-90 days in advance. Registered members receive exclusive early notification 48 hours before public announcement, giving you the best chance to secure your preferred experience level."
    },
    {
      question: "Are the events family-friendly?",
      answer: "Yes! Kevin loves meeting fans of all ages and often shares family-appropriate stories. Children under 12 receive a 50% discount when accompanied by a paying adult. Kevin particularly enjoys meeting young fans and discussing his children's movies like 'The Guardian.'"
    },
    {
      question: "What topics does Kevin like to discuss?",
      answer: "Kevin is very open about his career, from early films to Yellowstone. He loves discussing his directorial work, especially 'Dances with Wolves,' his music career, fatherhood, and his passion for baseball and the outdoors. He's also happy to share behind-the-scenes stories from his most famous films."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-amber-950 to-stone-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-xl text-stone-300">
            Everything you need to know about meeting Kevin Costner
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-stone-800/50 border border-stone-700 rounded-lg px-6 data-[state=open]:border-amber-600"
            >
              <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-stone-400 mb-4">Still have questions?</p>
          <p className="text-stone-300">
            Contact us at{" "}
            <a href="mailto:info@kevincostnerevents.com" className="text-amber-400 hover:text-amber-300 transition-colors">
              info@kevincostnerevents.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
