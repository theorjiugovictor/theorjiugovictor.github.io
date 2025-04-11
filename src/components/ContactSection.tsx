import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/email';
import {
	Mail,
	MapPin,
	Calendar,
	Send,
	Github,
	Linkedin,
	Twitter,
} from 'lucide-react';

const ContactSection: React.FC = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (emailConfig.publicKey) {
			emailjs.init(emailConfig.publicKey);
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.target as HTMLFormElement;

		try {
			// Verify configuration
			if (
				!emailConfig.serviceId ||
				!emailConfig.templateId ||
				!emailConfig.publicKey
			) {
				throw new Error('EmailJS configuration is missing');
			}

			const result = await emailjs.sendForm(
				emailConfig.serviceId,
				emailConfig.templateId,
				form,
				emailConfig.publicKey
			);

			console.log('EmailJS Response:', result);

			toast({
				title: 'Message sent',
				description: "Thank you for your message. I'll get back to you soon!",
			});

			form.reset();
		} catch (error) {
			console.error('Detailed error:', error);
			toast({
				title: 'Error Sending Message',
				description:
					error instanceof Error
						? error.message
						: 'Failed to send message. Please try again later.',
				variant: 'destructive',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="contact"
			className="py-20 bg-gray-50 dark:bg-cloud-dark-blue/30"
		>
			<div className="container mx-auto">
				<h2 className="section-title text-center">Get In Touch</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-bold mb-6 text-cloud-azure">
							Let's Discuss Your Project
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-8">
							I'm always interested in discussing new cloud architecture and
							DevOps challenges. Whether you're looking for a consultant for
							your next infrastructure project, or want to discuss potential
							employment opportunities, I'd love to hear from you.
						</p>

						<div className="space-y-6">
							<div className="flex items-start">
								<Mail className="w-5 h-5 text-cloud-bright-blue mt-1 mr-3" />
								<div>
									<h4 className="font-semibold">Email</h4>
									<p className="text-gray-600 dark:text-gray-300">
										orjiugo.victor@gmail.com
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<MapPin className="w-5 h-5 text-cloud-bright-blue mt-1 mr-3" />
								<div>
									<h4 className="font-semibold">Location</h4>
									<p className="text-gray-600 dark:text-gray-300">
										Stockholm, Sweden (Remote Available)
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<Calendar className="w-5 h-5 text-cloud-bright-blue mt-1 mr-3" />
								<div>
									<h4 className="font-semibold">Availability</h4>
									<p className="text-gray-600 dark:text-gray-300">
										Available for projects starting Q2 2025
									</p>
								</div>
							</div>
						</div>

						<div className="mt-8">
							<h4 className="font-semibold mb-4">Connect</h4>
							<div className="flex space-x-4">
								<a
									href="https://github.com/theorjiugovictor"
									className="w-10 h-10 rounded-full bg-cloud-dark-blue text-white flex items-center justify-center hover:bg-cloud-azure transition-colors"
								>
									<Github className="w-5 h-5" />
								</a>
								<a
									href="https://www.linkedin.com/in/theorjiugovictor/"
									className="w-10 h-10 rounded-full bg-cloud-dark-blue text-white flex items-center justify-center hover:bg-cloud-azure transition-colors"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href="https://x.com/orjiugo_victor"
									className="w-10 h-10 rounded-full bg-cloud-dark-blue text-white flex items-center justify-center hover:bg-cloud-azure transition-colors"
								>
									<Twitter className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>

					<div>
						<Card className="cloud-card">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-6">Send a Message</h3>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid grid-cols-1 gap-4">
										<div className="space-y-2">
											<label htmlFor="name" className="text-sm font-medium">
												Name
											</label>
											<Input
												id="name"
												name="from_name"
												placeholder="Your name"
												required
											/>
										</div>

										<div className="space-y-2">
											<label htmlFor="email" className="text-sm font-medium">
												Email
											</label>
											<Input
												id="email"
												name="from_email"
												type="email"
												placeholder="Your email"
												required
											/>
										</div>

										<div className="space-y-2">
											<label htmlFor="subject" className="text-sm font-medium">
												Subject
											</label>
											<Input
												id="subject"
												name="subject"
												placeholder="What's this about?"
												required
											/>
										</div>

										<div className="space-y-2">
											<label htmlFor="message" className="text-sm font-medium">
												Message
											</label>
											<Textarea
												id="message"
												name="message"
												placeholder="Your message"
												rows={5}
												required
											/>
										</div>

										<Button
											type="submit"
											className="w-full bg-cloud-bright-blue hover:bg-cloud-azure flex items-center justify-center gap-2"
											disabled={isSubmitting}
										>
											{isSubmitting ? 'Sending...' : 'Send Message'}
											<Send className="w-4 h-4" />
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
