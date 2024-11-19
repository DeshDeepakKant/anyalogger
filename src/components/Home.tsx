import React from 'react';
import { Shield, Monitor, Lock } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Understanding Keyloggers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn about keyloggers, their types, and how to protect yourself from this common cyber threat.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="https://www.avast.com/hubfs/New_Avast_Academy/what_is_a_keylogger_academy_a1_refresh/What-is-a-keylogger-03.svg"
            alt="Keylogger Illustration"
            className="w-full h-48 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What is a Keylogger?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A keylogger is a type of surveillance software or hardware that records keystrokes made by a computer user. While they can have legitimate uses, they're often exploited for malicious purposes.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="https://www.avast.com/hubfs/New_Avast_Academy/what_is_a_keylogger_academy_a1_refresh/What-is-a-keylogger-04.svg"
            alt="Keylogger Types"
            className="w-full h-48 object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Types of Keyloggers
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Keyloggers come in two main forms: software-based and hardware-based. Each type has its own characteristics and methods of operation.
          </p>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Protection</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Learn how to protect yourself from keylogger attacks
          </p>
        </div>
        <div className="text-center">
          <Monitor className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Detection</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Discover methods to detect keyloggers on your system
          </p>
        </div>
        <div className="text-center">
          <Lock className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Prevention</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Implement preventive measures against keylogger threats
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;