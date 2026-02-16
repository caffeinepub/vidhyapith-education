import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';
import { InlineNotice } from '@/components/site/InlineNotice';
import { InquiryDebugPanel } from './InquiryDebugPanel';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    stream: '',
    message: ''
  });

  const { mutate: submitInquiry, isPending, isSuccess, isError, error } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // Compose the full message with level and stream information
    const fullMessage = `
Program Level: ${formData.level || 'Not specified'}
Stream/Area of Interest: ${formData.stream || 'Not specified'}

Message:
${formData.message}
    `.trim();

    submitInquiry({
      name: formData.name,
      email: formData.email,
      message: fullMessage
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      level: '',
      stream: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your academic journey? Send us an inquiry and our expert counselors will get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">Email Us</p>
                      <p className="text-sm text-foreground">Fill out the form and we'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">Quick Response</p>
                      <p className="text-sm text-foreground">Our team is ready to assist you with your queries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Expert guidance across all streams</li>
                  <li>✓ Personalized counseling sessions</li>
                  <li>✓ Proven admission success rate</li>
                  <li>✓ Support from Graduation to PhD</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isPending || isSuccess}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isPending || isSuccess}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="level">Program Level</Label>
                    <Select
                      value={formData.level}
                      onValueChange={(value) => setFormData({ ...formData, level: value })}
                      disabled={isPending || isSuccess}
                    >
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select program level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="graduation">Graduation (Bachelor's)</SelectItem>
                        <SelectItem value="postgraduate">Postgraduate (Master's)</SelectItem>
                        <SelectItem value="phd">PhD (Doctoral)</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stream">Stream / Area of Interest</Label>
                    <Input
                      id="stream"
                      type="text"
                      placeholder="e.g., Computer Science, MBA, etc."
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      disabled={isPending || isSuccess}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Your Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your academic goals and how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    disabled={isPending || isSuccess}
                  />
                </div>

                {isError && (
                  <InlineNotice
                    type="error"
                    message={error?.message || 'Failed to submit inquiry. Please try again.'}
                  />
                )}

                {isSuccess && (
                  <InlineNotice
                    type="success"
                    message="Thank you! Your inquiry has been submitted successfully. We'll get back to you soon."
                  />
                )}

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending || isSuccess}
                    className="flex-1 font-semibold"
                  >
                    {isPending ? (
                      'Sending...'
                    ) : isSuccess ? (
                      'Submitted!'
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  {isSuccess && (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleReset}
                    >
                      Send Another
                    </Button>
                  )}
                </div>
              </form>

              {isSuccess && <InquiryDebugPanel />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
