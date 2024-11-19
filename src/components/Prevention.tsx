import React from 'react';
import { Shield, Key, Lock, RefreshCcw, Fingerprint, Globe, KeyRound, Wifi, Activity, Keyboard } from 'lucide-react';

const Prevention = () => {
  const preventionMethods = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Two-Factor Authentication (2FA)",
      description: "Adds an extra layer of security with a second form of ID, like a mobile PIN, to block unauthorized access even if passwords are captured."
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Regular Software Updates",
      description: "Keeps your system secure by patching vulnerabilities that keyloggers might exploit."
    },
    {
      icon: <Key className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Key Encryption Software",
      description: "Encrypts keystrokes, making it difficult for keyloggers to capture sensitive data accurately."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Avoid Insecure Downloads",
      description: "Only download software from trusted sources to avoid malware-laden apps."
    },
    {
      icon: <Fingerprint className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Anti-Malware & Antivirus",
      description: "Use reputable software for regular scans to detect and remove keyloggers."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Firewall Protection",
      description: "Monitors network traffic for suspicious activity, alerting you if a keylogger tries to send data externally."
    },
    {
      icon: <KeyRound className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Password Managers",
      description: "Automatically fills in passwords, reducing manual typing and preventing keystroke capture."
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Monitor Network Activity",
      description: "Regularly check for unusual outgoing connections, which could signal a keylogger."
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Regular Password Changes",
      description: "Frequent updates to passwords minimize risks from stolen credentials."
    },
    {
      icon: <Keyboard className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Virtual Keyboards",
      description: "Use on-screen keyboards for sensitive information entry to bypass some keyloggers."
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Keylogger Prevention Techniques
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Protect yourself from keylogger threats with these essential security measures
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {preventionMethods.map((method, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              {method.icon}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                {method.title}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {method.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Additional Security Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Keep your operating system and applications up to date</li>
          <li>Use strong, unique passwords for each account</li>
          <li>Be cautious when downloading software from the internet</li>
          <li>Regularly backup your important data</li>
          <li>Consider using a hardware security key for critical accounts</li>
        </ul>
      </div>
    </div>
  );
};

export default Prevention;