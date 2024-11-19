import React from 'react';
import { Shield, Smartphone, Terminal } from 'lucide-react';

const Detection = () => {
  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Keylogger Detection Techniques
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn how to identify keyloggers on different platforms
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Ubuntu Detection</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Monitor System Processes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use System Monitor to identify suspicious processes running in the background
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Check Startup Applications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Review auto-starting programs for potential keyloggers
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Antivirus Scans</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Run ClamAV or Chkrootkit to detect potential keyloggers
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Terminal Commands</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use terminal commands like ps aux to check for hidden processes
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Android Detection</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">App Permissions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor apps with suspicious permission requests
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Battery Usage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check for background apps consuming excessive battery
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Antivirus Protection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use trusted antivirus apps for regular system scans
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">System Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep Android OS updated and regularly review app permissions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Regularly monitor system performance for unexpected changes</li>
          <li>Keep all security software up to date</li>
          <li>Use reliable antivirus solutions with real-time protection</li>
          <li>Be cautious of apps requesting unnecessary permissions</li>
        </ul>
      </div>
    </div>
  );
};

export default Detection;