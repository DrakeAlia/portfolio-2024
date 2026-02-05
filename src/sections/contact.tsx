"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setError(result.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss something? Feel free to
            reach out!
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 sm:h-11 text-base"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 sm:h-11 text-base"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full h-10 sm:h-11 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-24 sm:min-h-32 text-base resize-none"
                  />
                </div>
                
                {/* Success Message */}
                {isSuccess && (
                  <m.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-400/50 text-green-700 dark:text-green-400 rounded-md"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm sm:text-base font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                    </div>
                  </m.div>
                )}

                {/* Error Message */}
                {error && (
                  <m.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-400/50 text-red-700 dark:text-red-400 rounded-md"
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm sm:text-base font-medium">{error}</span>
                    </div>
                  </m.div>
                )}

                <Button
                  type="submit"
                  className="w-full h-11 sm:h-12 text-base touch-manipulation"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </m.div>
      </div>
    </section>
  );
}
