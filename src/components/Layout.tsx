import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Moon, Sun, Github, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm bg-white dark:bg-gray-900 shadow-md">
          <nav className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/momentum-site/logo.png" className=" w-12 h-12" />
                <span className="text-xl font-bold text-gray-800 dark:text-white">Momentum Robotics</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400
                    ${location.pathname === link.path
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-300'}`}
                    >
                      {link.label}
                    </Link>
                ))}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isDarkMode ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                      <Moon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                <img src="/momentum-site/FTC%20logo.png" className="w-16 "/>
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                ) : (
                    <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden pt-4 pb-3">
                  {navLinks.map((link) => (
                      <Link
                          key={link.path}
                          to={link.path}
                          className={`block py-2 px-4 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400
                    ${location.pathname === link.path
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-300'}`}
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                  ))}
                  <button
                      onClick={toggleTheme}
                      className="w-full text-left py-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300"
                  >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
            )}
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                            to={link.path}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {link.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Contact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Email: momentumrobotics25@gmail.com<br />
                  Phone: +40 748 583 856 Jercan Bianca, Lidera Momentum<br />
                  Address: Strada Radu S. Campiniu 4-6, Brăila 810003, România
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                      href="https://www.instagram.com/momentum.robotics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                      href="https://www.facebook.com/profile.php?id=61565332126966"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                      href="https://github.com/MomentumRobotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
              <p>© {new Date().getFullYear()} Momentum Robotics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}
