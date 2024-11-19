import React from 'react';
import { Code, Terminal, Database } from 'lucide-react';

const Demonstration = () => {
  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Advanced Python Keylogger Project
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive demonstration of keylogger functionality and implementation
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Python (latest version)</li>
            <li>• PyCharm IDE</li>
            <li>• Essential Python modules</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Required Modules</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• pywin32</li>
            <li>• pynput</li>
            <li>• cryptography</li>
            <li>• pillow</li>
            <li>• sounddevice</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Features</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Keystroke logging</li>
            <li>• System information</li>
            <li>• Clipboard monitoring</li>
            <li>• Screenshot capture</li>
            <li>• Audio recording</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">How It Works</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Download and install the keylogger following the simple installation guide
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Keystroke Capture</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time capture of every keystroke made on the system
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Local Storage</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Secure storage of captured keystrokes in a local hidden file
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Data Transmission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automatic transmission of captured data to specified email address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demonstration;