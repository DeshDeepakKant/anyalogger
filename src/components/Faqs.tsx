import React from 'react';
import { HelpCircle } from 'lucide-react';

const Faqs = () => {
  const faqs = [
    {
      question: "How is the keylogger started and stopped?",
      answer: "The keylogger starts when the program runs, initiating key capture and timed email reports. It stops if the process is terminated or when specific key sequences (like the Escape key) are programmed to end it."
    },
    {
      question: "Is it legal to use a keylogger?",
      answer: "Keyloggers can be legally used on devices you own or have explicit permission to monitor, such as for employee monitoring with consent. Unauthorized use, however, is illegal and unethical."
    },
    {
      question: "Can antivirus software detect this keylogger?",
      answer: "Many antiviruses can detect keyloggers. It's recommended to avoid malicious use and run keyloggers transparently in ethical settings."
    },
    {
      question: "How secure is the email communication for logs?",
      answer: "The code uses TLS (Transport Layer Security) encryption over SMTP to secure the transmission of keystroke logs to the admin's email."
    },
    {
      question: "What happens if the internet connection is lost?",
      answer: "The keylogger will keep capturing keystrokes but may fail to send email reports until the connection is restored."
    },
    {
      question: "How customizable is the logging interval?",
      answer: "The interval is set during initialization and can be adjusted to control how often logs are sent, balancing real-time monitoring with network usage."
    },
    {
      question: "Does the keylogger capture other input types?",
      answer: "This keylogger only captures keyboard strokes. To monitor other actions like mouse clicks, additional code would be required."
    },
    {
      question: "Can the keylogger bypass secure applications?",
      answer: "The keylogger captures all keystrokes, but encrypted data remains unreadable without encryption keys, so it can't bypass encryption on secure applications."
    },
    {
      question: "Is there a way to pause the keylogger temporarily?",
      answer: "Currently, it runs continuously until stopped. A pause feature could be added by modifying the program, allowing for more controlled usage."
    },
    {
      question: "How can I prevent unauthorized use of this keylogger?",
      answer: "You can restrict access to the program's source code and executable files, and monitor access to the admin email account receiving logs."
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Common questions about keylogger functionality and usage
        </p>
      </section>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Important Note</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This information is provided for educational purposes only. Always ensure you have proper authorization and comply with relevant laws and regulations when using monitoring software.
        </p>
      </div>
    </div>
  );
};

export default Faqs;