

import {Mail, Phone, MapPin, Clock} from 'lucide-react';
import ParticleBackground from "../components/ParticleBackground.tsx";

const features = [
  {
    icon: "/momentum-site/sponsors/sponsors-1.png", // Assuming trophy.png is in the public/images/icons folder
    title: 'Photodereve',
    description: 'Firmă de prestări servicii de fotografie si videografie.'
  },
  {
    icon: "/momentum-site/sponsors/sponsors-2.png", // Assuming robot.png is in the public/images/icons folder
    title: 'Euro Building',
    description: 'Este o firmă cu capital integral privat, fondată în anul 2002, având o bogată experiență în execuția lucrărilor de construcții civile și industriale, precum și a instalațiilor aferente.'
  },
  {
    icon: "/momentum-site/sponsors/sponsors-3.jpg", // Assuming users.png is in the public/images/icons folder
    title: 'Avimi Serv',
    description: 'Încă din 2013, activăm în domeniul transporturilor rutiere pentru mărfurile vrac, în special agregate de carieră și balastieră, cereale, plante tehnice sau sare industrială pentru deszăpezire.'
  },
  {
    icon: "/momentum-site/sponsors//sponsors-4.png", // Assuming brain.png is in the public/images/icons folder
    title: 'CONSAMAR HIDROIZOLATII SRL',
    description: ''
  }
];


export default function Contact() {
  return (
      <div><ParticleBackground/>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <title>Contact • Momentum</title>

          {/* Header */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">

              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">

                Connect With Us
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join our community and be part of the next generation of innovators!
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
                <div className="container mx-auto text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Join Our Team!</h1>
                  <p className="text-xl max-w-3xl mx-auto mb-8 text-black dark:text-white">
                    Are you excited about robotics, innovation, and the chance to make a real-world impact? We’re always
                    eager to welcome new, driven students into our team! Whether you’re just starting out or have some
                    experience, there's always a place for you here.
                  </p>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                      Apply to Join Our Team
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        If you're ready to take the next step and join a team that is passionate about robotics and
                        technology, click the button below to apply!
                      </p>
                      <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSch2zoPwY-KewFihQuqwfqiU3aL96U1KPZcS9QGJzInGIuXsQ/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center w-full md:w-auto"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    As a member of our team, you'll:
                  </h2>

                  <ul className="list-none space-y-6 text-left max-w-2xl mx-auto mb-8">
                    <li className="text-xl text-gray-600 dark:text-gray-300">
                      <strong>Work with cutting-edge robotics technology:</strong> Gain hands-on experience with
                      state-of-the-art tools and systems that will prepare you for the future of tech.
                    </li>
                    <li className="text-xl text-gray-600 dark:text-gray-300">
                      <strong>Compete in regional and national competitions:</strong> Take your skills to the next level
                      by participating in exciting challenges where you can showcase your talents and creativity.
                    </li>
                    <li className="text-xl text-gray-600 dark:text-gray-300">
                      <strong>Learn from experienced mentors:</strong> Our dedicated mentors are here to guide you,
                      whether you're solving complex problems or tackling new projects, they'll help you grow every step
                      of the way.
                    </li>
                    <li className="text-xl text-gray-600 dark:text-gray-300">
                      <strong>Develop valuable STEM and teamwork skills:</strong> Not only will you enhance your
                      technical
                      knowledge, but you'll also build leadership, collaboration, and communication skills that will be
                      valuable in any future career.
                    </li>
                    <li className="text-xl text-gray-600 dark:text-gray-300">
                      <strong>Make friends who share your passions:</strong> Join a community of like-minded students
                      who
                      share your enthusiasm for robotics and innovation, making lifelong friendships along the way.
                    </li>
                  </ul>

                  <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
                    No prior experience is required – the only thing you need is a curiosity to learn, a passion for
                    technology, and the drive to succeed. We believe in providing a supportive, collaborative
                    environment
                    where everyone can thrive, no matter their starting point.
                  </p>

                  <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
                    Take the first step towards an exciting journey with us. We can’t wait to see what you bring to the
                    team!
                  </p>

                  {/* Join Us Section */}

                </div>
              </div>


              {/* Contact Information */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Find Us
                  </h2>
                  <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
                    <div className="relative" style={{paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.890183792636!2d27.972251802902363!3d45.26881423308292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b729ea32fe89c9%3A0xc7cf095e5bc02de9!2sLiceul%20Teoretic%20%22Nicolae%20Iorga%22!5e1!3m2!1sro!2sro!4v1737680269679!5m2!1sro!2sro"
                          width="100%"
                          height="450"
                          style={{border: '0'}}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                      />

                    </div>

                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1"/>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Tech Street<br/>
                          Strada Radu S. Campiniu 4-6, Brăila 810003, România
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1"/>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">momentumrobotics25@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1"/>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+40 748 583 856 Jercan Bianca, Lidera
                          Momentum</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1"/>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Meeting Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 2:00 PM - 6:00 PM<br/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="py-16 px-4 bg-white dark:bg-gray-900">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                  The people that believed in us:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                      <div
                          key={index}
                          className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
                      >
                        <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
          {/* Features Section */}

        </div>
      </div>
        );
        }