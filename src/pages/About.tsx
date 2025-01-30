import { Trophy, Users, Target, Lightbulb } from "lucide-react";
import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground.tsx";

export default function About() {
  const teamValues = [
    {
      icon: Trophy,
      title: "Commitment to Quality",
      description: "Dedicated to achieving the best in every endeavor",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working together to reach shared goals",
    },
    {
      icon: Target,
      title: "Driving Innovation",
      description: "Exploring creative solutions for new challenges",
    },
    {
      icon: Lightbulb,
      title: "Growing Together",
      description: "Fostering learning and sharing knowledge",
    },
  ];

  // Define documents for the menu
  const documents = [
    {
      label: "Engineering Notebook",
      url: "/momentum-site/pdfs/Engineering Notebook Momentum Robotics.pdf", // Replace with the actual URL
    },
    {
      label: "Team's Journal",
      url: "/momentum-site/pdfs/Team's jurnal Momentum Robotics.pdf", // Replace with the actual URL
    },
  ];

  // State for selected document
  const [selectedDocument, setSelectedDocument] = useState<string | null>(documents[0].url);

  return (
      <div><ParticleBackground />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 "  >

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 opacity-80" style={{zIndex: 2 }}>
          <div className="container mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are a passionate group of high school students dedicated to robotics,
              innovation, and pushing the boundaries of technology.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 opacity-100" style={{zIndex: 9}}>
          <div className="container mx-auto max-w-4xl opacity-100" style={{zIndex: 9}}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 opacity-100" style={{zIndex: 9}}>
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Our mission is to inspire and empower students through robotics education,
                fostering innovation, leadership, and problem-solving skills.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Through competitions, workshops, and community outreach, we aim to promote STEM
                education and make technology accessible to all students in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* Document Menu */}
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Learn More About Us</h2>

            {/* Menu */}
            <div className="flex justify-center mb-8">
              {documents.map((doc, index) => (
                  <button
                      key={index}
                      onClick={() => setSelectedDocument(doc.url)}
                      className={`px-4 py-2 mx-2 rounded-full transition-colors ${
                          selectedDocument === doc.url
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                  >
                    {doc.label}
                  </button>
              ))}
            </div>

            {/* PDF Viewer */}
            {selectedDocument && (
                <div className="relative">
                  <iframe
                      src={`${selectedDocument}#toolbar=0`}
                      className="w-full h-[900px]"
                      title="Document Viewer"
                      style={{
                        border: 'none',
                        overflow: 'hidden', // Hide overflow
                        opacity: 1, // Ensures full opacity (100%)
                        zIndex: 3,// Ensures full height
                      }}
                      scrolling="no"
                  ></iframe>
                </div>


            )}
          </div>
        </section>

        {/* Team History */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Journey</h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2025 - Present</h3>
                <p className="text-gray-600 dark:text-gray-300">
                 Preparing for the next First Tech Challenge season with passion.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2024</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our first year of activity as a team, a wonderful experience that will not be forgotten.
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>
      </div>
  );
}
