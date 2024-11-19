import React from 'react';
import { AlertCircle, Calendar, Globe2, DollarSign } from 'lucide-react';

const NotableCrimes = () => {
  const cyberCrimes = [
    {
      title: "Yahoo Data Breach",
      year: "2013-2016",
      description: "Over 3 billion user accounts were compromised in two major breaches. The data included names, email addresses, and passwords, making it one of the largest data breaches in history.",
      impact: "3 billion accounts affected"
    },
    {
      title: "WannaCry Ransomware Attack",
      year: "May 2017",
      description: "This global ransomware attack infected approximately 230,000 computers across 150 countries within hours, targeting critical systems including the UK's National Health Service (NHS).",
      impact: "230,000 computers affected"
    },
    {
      title: "Sony Pictures Hack",
      year: "2014",
      description: "North Korean hackers infiltrated Sony Pictures' network, stealing confidential data including unreleased films and sensitive employee information.",
      impact: "Massive data theft and business disruption"
    },
    {
      title: "Colonial Pipeline Ransomware Attack",
      year: "May 2021",
      description: "The DarkSide ransomware group targeted the Colonial Pipeline, leading to fuel supply disruptions in the U.S. The company paid a ransom of approximately $4.4 million.",
      impact: "$4.4 million ransom paid"
    },
    {
      title: "Equifax Data Breach",
      year: "2017",
      description: "Personal information of about 147 million people was exposed due to a vulnerability in Equifax's software, raising concerns about identity theft and financial security.",
      impact: "147 million people affected"
    },
    {
      title: "Clop Ransomware Attacks",
      year: "2023",
      description: "The Clop ransomware group exploited vulnerabilities in file transfer services to compromise over 130 organizations, demonstrating the evolving tactics of cybercriminals.",
      impact: "130+ organizations compromised"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Notable Cyber Crimes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Examining major cybersecurity incidents and their impact on global security
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {cyberCrimes.map((crime, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {crime.title}
                  </h2>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{crime.year}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {crime.description}
                </p>
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <Globe2 className="h-4 w-4 mr-2" />
                  <span className="font-medium">{crime.impact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <div className="flex items-center mb-4">
          <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Global Impact</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          These incidents highlight the growing sophistication of cyber attacks and their significant impact on businesses, governments, and individuals worldwide. They emphasize the critical importance of robust cybersecurity measures and continuous vigilance.
        </p>
      </div>
    </div>
  );
};

export default NotableCrimes;