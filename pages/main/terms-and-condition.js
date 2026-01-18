// pages/terms.js
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaFileContract,
  FaUserLock,
  FaCopyright,
  FaExclamationTriangle,
  FaBalanceScale,
  FaGavel,
  FaHandshake,
  FaQuestionCircle,
  FaEnvelope
} from 'react-icons/fa';
import Head from 'next/head';
import { useState } from 'react';
import SimpleLayout from '@/components/SimpleLayout';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>Terms & Conditions - CodeSkipper.in | Coding Education Platform</title>
        <meta
          name="description"
          content="Read CodeSkipper.in's Terms and Conditions. Learn about user rights, responsibilities, content usage, privacy, and platform guidelines for our coding education community."
        />
        <meta name="keywords" content="terms and conditions, user agreement, privacy policy, coding platform rules, educational terms" />
        <link rel="canonical" href="https://codeskipper.in/main/terms-and-condition" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions - CodeSkipper.in",
            "description": "Terms and Conditions for CodeSkipper.in coding education platform",
            "publisher": {
              "@type": "Organization",
              "name": "CodeSkipper.in"
            }
          })}
        </script>
      </Head>
      <SimpleLayout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-sm border-b"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FaFileContract className="text-3xl text-blue-600" />
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800">Terms & Conditions</h1>
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              
              </div>
            </div>
          </motion.header>

          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Navigation */}
              <motion.nav
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:w-1/4"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaBalanceScale className="mr-2 text-blue-600" />
                    Quick Navigation
                  </h2>
                  <ul className="space-y-2">
                    {navigationItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === item.id
                              ? 'bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-600'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                            }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Important Notice */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                  >
                    <div className="flex items-start">
                      <FaExclamationTriangle className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-yellow-800">Important Notice</h3>
                        <p className="text-yellow-700 text-sm mt-1">
                          By using our platform, you agree to these terms. Please read them carefully.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.nav>

              {/* Main Content */}
              <motion.main
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:w-3/4"
              >
                {/* Introduction */}
                <Section id="introduction" title="1. Introduction & Acceptance">
                  <p>
                    Welcome to <strong>CodeSkipper.in</strong> - your premier destination for comprehensive coding education and career development. These Terms and Conditions govern your use of our platform, services, and community features.
                  </p>
                  <p>
                    By accessing or using our website, mobile applications, services, or any content provided through CodeSkipper.in, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of our services immediately.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> We regularly update our Terms to reflect changes in our services and legal requirements. Continued use after changes constitutes acceptance of modified terms.
                    </p>
                  </div>
                </Section>

                {/* Definitions */}
                <Section id="definitions" title="2. Definitions & Interpretation">
                  <p>For the purpose of these Terms and Conditions:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
                    <li><strong>"Platform"</strong> refers to CodeSkipper.in website, mobile applications, and all associated services</li>
                    <li><strong>"User"</strong> means any individual or entity accessing or using our Platform</li>
                    <li><strong>"Content"</strong> includes all educational materials, code, text, images, videos, and resources available on the Platform</li>
                    <li><strong>"Services"</strong> encompass all features including learning resources, tools, community features, and career services</li>
                    <li><strong>"Premium Services"</strong> refers to paid features, courses, and certifications</li>
                  </ul>
                </Section>

                {/* User Accounts */}
                <Section id="accounts" title="3. User Accounts & Registration">
                  <div className="flex items-start mb-4">
                    <FaUserLock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Account Creation Requirements</h4>
                    </div>
                  </div>
                  <p>To access certain features, you must create an account by providing accurate and complete information. You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
                    <li>Provide true, accurate, and current information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                    <li>Notify us immediately of any security breach or unauthorized use</li>
                    <li>Be at least 13 years of age (or the minimum legal age in your jurisdiction)</li>
                  </ul>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-red-800 mb-2">Prohibited Activities</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                      <li>Creating multiple accounts for abusive purposes</li>
                      <li>Impersonating any person or entity</li>
                      <li>Using others' accounts without authorization</li>
                      <li>Automated account creation or usage</li>
                    </ul>
                  </div>
                </Section>

                {/* Intellectual Property */}
                <Section id="intellectual-property" title="4. Intellectual Property Rights">
                  <div className="flex items-start mb-4">
                    <FaCopyright className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Content Ownership & Usage</h4>
                    </div>
                  </div>

                  <h5 className="font-semibold text-gray-800 mt-4">4.1 Platform Content</h5>
                  <p>All content on CodeSkipper.in, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Educational materials, tutorials, and courses</li>
                    <li>Code examples, projects, and solutions</li>
                    <li>MCQ questions and interview preparation content</li>
                    <li>Design elements, logos, and branding</li>
                    <li>Software and platform code</li>
                  </ul>
                  <p className="mt-3">is protected by copyright, trademark, and other intellectual property laws.</p>

                  <h5 className="font-semibold text-gray-800 mt-6">4.2 User-Generated Content</h5>
                  <p>By submitting content to our platform, you grant CodeSkipper.in a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content for educational purposes.</p>

                  <h5 className="font-semibold text-gray-800 mt-6">4.3 Permitted Usage</h5>
                  <p>You may access and use our content for personal, non-commercial educational purposes. Commercial use requires written permission.</p>
                </Section>

                {/* User Conduct */}
                <Section id="user-conduct" title="5. User Conduct & Responsibilities">
                  <p>As a user of CodeSkipper.in, you agree to use our platform responsibly and ethically:</p>

                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-3"> Permitted Activities</h5>
                      <ul className="list-disc list-inside space-y-2 text-green-700 text-sm">
                        <li>Learning and skill development</li>
                        <li>Participating in community discussions</li>
                        <li>Sharing educational resources</li>
                        <li>Collaborating on projects</li>
                        <li>Providing constructive feedback</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-3"> Prohibited Activities</h5>
                      <ul className="list-disc list-inside space-y-2 text-red-700 text-sm">
                        <li>Plagiarism or copyright infringement</li>
                        <li>Spamming or unauthorized advertising</li>
                        <li>Harassment or abusive behavior</li>
                        <li>Cheating in assessments or exams</li>
                        <li>Reverse engineering or hacking attempts</li>
                      </ul>
                    </div>
                  </div>
                </Section>

                {/* Services Description */}
                <Section id="services" title="6. Platform Services Description">
                  <p>CodeSkipper.in provides comprehensive coding education services including:</p>

                  <div className="mt-4 space-y-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-lg border border-gray-200"
                      >
                        <h5 className="font-semibold text-gray-800">{service.title}</h5>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </Section>

                {/* Premium Services */}
                <Section id="premium-services" title="7. Premium Services & Payments">
                  <h5 className="font-semibold text-gray-800">7.1 Subscription Plans</h5>
                  <p>We offer various premium subscription plans with different features and pricing. All payments are processed through secure payment gateways.</p>

                  <h5 className="font-semibold text-gray-800 mt-6">7.2 Refund Policy</h5>
                  <p>Refunds for premium services are handled on a case-by-case basis. Generally:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Digital products and courses are non-refundable once accessed</li>
                    <li>Subscription cancellations take effect at the end of billing cycle</li>
                    <li>Technical issues are resolved promptly rather than refunded</li>
                  </ul>

                  <h5 className="font-semibold text-gray-800 mt-6">7.3 Price Changes</h5>
                  <p>We reserve the right to modify pricing with 30 days notice. Existing subscriptions continue at current rate until renewal.</p>
                </Section>

                {/* Privacy & Data */}
                <Section id="privacy" title="8. Privacy & Data Protection">
                  <div className="flex items-start mb-4">
                    <FaShieldAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Your Privacy Matters</h4>
                    </div>
                  </div>

                  <p>We are committed to protecting your privacy. Our data collection and usage practices are detailed in our comprehensive Privacy Policy, which is incorporated into these Terms by reference.</p>

                  <h5 className="font-semibold text-gray-800 mt-6">8.1 Data Collection</h5>
                  <p>We collect information necessary to provide and improve our services, including:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Account information and learning progress</li>
                    <li>Usage data and platform interactions</li>
                    <li>Technical information and device data</li>
                    <li>Payment information (for premium services)</li>
                  </ul>

                  <h5 className="font-semibold text-gray-800 mt-6">8.2 Data Usage</h5>
                  <p>Your data helps us:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Personalize your learning experience</li>
                    <li>Improve our platform and services</li>
                    <li>Provide customer support</li>
                    <li>Send important updates and notifications</li>
                  </ul>
                </Section>

                {/* Third Party Content */}
                <Section id="third-party" title="9. Third-Party Content & Links">
                  <p>Our platform may include content from third parties or links to external websites. We:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Are not responsible for third-party content accuracy</li>
                    <li>Do not endorse external websites or services</li>
                    <li>Are not liable for any damages from third-party content</li>
                    <li>Recommend reviewing third-party terms and policies</li>
                  </ul>
                </Section>

                {/* Limitations */}
                <Section id="limitations" title="10. Limitations of Liability">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Important Legal Notice</h4>
                        <p className="text-yellow-700">
                          CodeSkipper.in provides educational content for learning purposes. While we strive for accuracy,
                          we cannot guarantee employment outcomes or specific results. Your success depends on multiple factors
                          including your effort, market conditions, and individual capabilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">To the maximum extent permitted by law, CodeSkipper.in shall not be liable for:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of data, profits, or business opportunities</li>
                    <li>Educational or employment outcomes</li>
                    <li>Third-party actions or content</li>
                    <li>Technical issues beyond our reasonable control</li>
                  </ul>
                </Section>

                {/* Termination */}
                <Section id="termination" title="11. Account Termination">
                  <p>We reserve the right to suspend or terminate accounts for:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Violation of these Terms and Conditions</li>
                    <li>Illegal or fraudulent activities</li>
                    <li>Abusive behavior towards other users</li>
                    <li>Attempts to compromise platform security</li>
                    <li>Non-payment for premium services</li>
                  </ul>
                  <p className="mt-4">You may terminate your account at any time through account settings.</p>
                </Section>

                {/* Governing Law */}
                <Section id="governing-law" title="12. Governing Law & Dispute Resolution">
                  <div className="flex items-start mb-4">
                    <FaGavel className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Legal Framework</h4>
                    </div>
                  </div>

                  <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India.</p>

                  <h5 className="font-semibold text-gray-800 mt-6">12.1 Dispute Resolution Process</h5>
                  <p>In case of disputes, we encourage:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Direct communication with our support team</li>
                    <li>Mediation before legal proceedings</li>
                    <li>Good faith negotiations to resolve issues</li>
                  </ul>
                </Section>

                {/* Changes to Terms */}
                <Section id="changes" title="13. Changes to Terms">
                  <p>We may update these Terms from time to time to reflect:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Changes in our services and features</li>
                    <li>Legal and regulatory requirements</li>
                    <li>User feedback and community needs</li>
                    <li>Technological advancements</li>
                  </ul>
                  <p className="mt-4">
                    We will notify users of significant changes via email or platform notifications.
                    Continued use after changes constitutes acceptance of modified terms.
                  </p>
                </Section>

                {/* Contact Information */}
                <Section id="contact" title="14. Contact Information">
                  <div className="flex items-start mb-4">
                    <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Get in Touch</h4>
                    </div>
                  </div>

                  <p>For questions about these Terms and Conditions, please contact us:</p>

                  <div className="bg-blue-50 p-6 rounded-lg mt-4">
                    <div className="space-y-3">
                      <div>
                        <strong>Email:</strong> kartik.thedeveloper@gmail.com
                      </div>
                      <div>
                        <strong>Website:</strong> https://codeskipper.in
                      </div>
                      <div>
                        <strong>Response Time:</strong> Within 2-3 business days
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> For technical support, please use our support system.
                      Legal inquiries should be directed to the email above.
                    </p>
                  </div>
                </Section>

                {/* Final Acknowledgement */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center mt-8"
                >
                  <FaHandshake className="text-4xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Thank You for Choosing CodeSkipper.in</h3>
                  <p className="text-blue-100">
                    We're committed to providing the best coding education platform while maintaining
                    transparency and trust with our community. Happy learning!
                  </p>
                </motion.div>
              </motion.main>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

// Section Component
const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6
        }
      }
    }}
    className="bg-white rounded-xl shadow-lg p-8 mb-8 scroll-mt-8"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      {title}
    </h2>
    <div className="prose prose-lg max-w-none text-gray-700">
      {children}
    </div>
  </motion.section>
);

// Navigation Items
const navigationItems = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'accounts', title: '3. User Accounts' },
  { id: 'intellectual-property', title: '4. Intellectual Property' },
  { id: 'user-conduct', title: '5. User Conduct' },
  { id: 'services', title: '6. Services' },
  { id: 'premium-services', title: '7. Premium Services' },
  { id: 'privacy', title: '8. Privacy & Data' },
  { id: 'third-party', title: '9. Third-Party' },
  { id: 'limitations', title: '10. Limitations' },
  { id: 'termination', title: '11. Termination' },
  { id: 'governing-law', title: '12. Governing Law' },
  { id: 'changes', title: '13. Changes to Terms' },
  { id: 'contact', title: '14. Contact' }
];

// Services Data
const services = [
  {
    title: "Core Learning Resources",
    description: "Interview questions, MCQ practice, detailed notes, learning roadmaps, and project ideas"
  },
  {
    title: "Career Development",
    description: "Job role explanations, salary insights, resume templates, and career guidance"
  },
  {
    title: "Educational Tools",
    description: "Code editor, unit converters, typing tests, dictionary, and JSON formatter"
  },
  {
    title: "Community Features",
    description: "Leaderboards, project showcase, exams, certifications, and mentorship"
  },
  {
    title: "Free Learning Materials",
    description: "PDF notes, ebooks, cheat sheets, and downloadable resources"
  },
  {
    title: "Placement Preparation",
    description: "Aptitude training, technical interview prep, HR round guidance, and company-specific prep"
  }
];