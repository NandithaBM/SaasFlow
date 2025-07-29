import React from 'react'
import { motion } from 'framer-motion'
import { Accordion, AccordionItem } from '../ui/Accordion'

const faqs = [
  {
    question: 'How does ADmyBRAND AI understand my brand voice?',
    answer: 'Our AI analyzes your existing content, brand guidelines, and marketing materials to learn your unique voice and tone. You can also provide specific instructions and examples to fine-tune the AI\'s understanding of your brand personality.'
  },
  {
    question: 'Can I integrate ADmyBRAND AI with my existing marketing tools?',
    answer: 'Yes! We offer integrations with over 50 popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Mailchimp, Salesforce, and many more. Our API also allows for custom integrations.'
  },
  {
    question: 'What kind of content can the AI generate?',
    answer: 'Our AI can create various types of marketing content including ad copy, social media posts, email campaigns, blog articles, product descriptions, landing page copy, and more. All content is optimized for your specific audience and goals.'
  },
  {
    question: 'How accurate are the analytics and insights?',
    answer: 'Our analytics engine processes data from multiple sources in real-time, providing accuracy rates of 95%+ for performance predictions. We use advanced machine learning models trained on billions of marketing data points.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore all capabilities and see how ADmyBRAND AI can transform your marketing efforts.'
  },
  {
    question: 'What level of support do you provide?',
    answer: 'We provide comprehensive support including 24/7 chat support, detailed documentation, video tutorials, and webinar training sessions. Enterprise customers get dedicated account managers and priority support.'
  },
  {
    question: 'How secure is my data?',
    answer: 'We take data security seriously with enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is never shared with third parties and you maintain full ownership.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data.'
  }
]

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 overrideTopZero bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p className="leading-relaxed">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of ADmyBRAND AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                onClick={() => {
                  // contact form logic
                  if (typeof window !== "undefined") {
                    const contactSection = document.getElementById("contactform");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}