import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Model'
import { 
  EnvelopeIcon, 
  UserIcon, 
  BuildingOfficeIcon,
  PhoneIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccessModal(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contactform" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {' '}Started?
            </span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Contact our team to learn how ADmyBRAND AI can transform your marketing strategy. 
            We'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 bg-white dark:bg-black">
            <form onSubmit={handleSubmit} className="space-y-6 text-black dark:text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className="bg-white dark:bg-black"
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  icon={<UserIcon className="w-5 h-5" />}
                  placeholder="John Doe"
                />
                <Input className="bg-white dark:bg-black"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  icon={<EnvelopeIcon className="w-5 h-5" />}
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className="bg-white dark:bg-black"
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                  icon={<BuildingOfficeIcon className="w-5 h-5" />}
                  placeholder="Your Company"
                />
                <Input className="bg-white dark:bg-black"
                  label="Phone Number (Optional)"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={<PhoneIcon className="w-5 h-5" />}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-black"
                  placeholder="Tell us about your marketing goals and how we can help..."
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-2">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Success Modal */}
        <Modal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          title="Message Sent Successfully!"
        >
          <div className="text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-gray-600 mb-6">
              Thank you for your interest in ADmyBRAND AI! Our team will review your message 
              and get back to you within 24 hours.
            </p>
            <Button onClick={() => setShowSuccessModal(false)}>
              Close
            </Button>
          </div>
        </Modal>
      </div>
    </section>
  )
}