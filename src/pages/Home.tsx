import ImageCarousel from '../components/ImageCarousel';
import { LinearGradient } from 'react-text-gradients'
import { Trophy, Notebook as Robot, Users, Brain } from 'lucide-react';

const carouselImages = [
  {
    url: '/images/competitions/competition-1.png',
    title: 'Competition Ready',
    description: "Our team preparing for one of biggest challenge we've encountered "
  },
  {
    url: '/images/projects/robots.jpg',
    title: 'Innovation at Work',
    description: 'Building tomorrow\'s technology today'
  },
  {
    url: '/images/team/team-1.jpg',
    title: 'Team Collaboration',
    description: 'Working together to achieve greatness'
  }
];

const features = [
  {
    icon: Trophy,
    title: 'Experienced Team',
    description: 'Strong history in robotics and technology initiatives'
  },
  {
    icon: Robot,
    title: 'Funded By Velocity#21087',
    description: 'Our team is funded with the help offered by Velocity from Colegiul Naţional "Gheorghe Munteanu-Murgoci", Brăila'
  },
  {
    icon: Users,
    title: 'Unified Vision',
    description: 'Collaborating with passion to achieve shared goals'
  },
  {
    icon: Brain,
    title: 'STEM Excellence',
    description: 'Promoting science, technology, engineering, and mathematics'
  }
];

export default function Home() {
  return (

    <div className="min-h-screen">


      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel images={carouselImages} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-7xl font-bold mb-4 animate-fade-in">

              <LinearGradient gradient={['to top', '#0077b6 , #ade8f4']}>Momentum Robotics</LinearGradient>
              <p><LinearGradient gradient={['to top', '#03045e , #0077b6']}>#21088</LinearGradient></p>
            </h1>
            <p className="text-xl animate-fade-in-delay">
              <p className="font-black ">per aspera ad astra </p>
              <p>"through hardships to the stars"</p>

            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Momentum Robotics, FTC Romania, #21088, RO-211
            <p className={"font-semibold"}>Colegiul National "Nicolae Iorga" Braila</p>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
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
      <span className="m-10"></span>
      <section className="py-16 px-4  bg-gray-950">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6  ml-14 mr-14">
          <h3 className="text-3xl mb-4 text-gray-900 dark:text-white text-center font-extrabold"><span className="text-black">First</span> <span className="text-orange-600"> Tech Challenge </span> </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The First Tech Challenge (FTC) is a robotics competition for young people, where student teams design, build, and program robots. The goal is to teach students about science, technology, engineering, and mathematics (STEM), while also fostering teamwork and problem-solving skills. The robots are required to complete specific tasks in a new game each year.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6  ml-14 mr-14 mt-1">
          <h3 className="text-3xl mb-4 text-gray-900 dark:text-white text-center font-extrabold"><LinearGradient gradient={['to top','#003249 ,#007ea7,#80ced7, #ccdbdc']} >Who We Are ? </LinearGradient> </h3>
        <p className="text-gray-600 dark:text-gray-300">
          The Momentum team is a project launched by the well-known and nationally qualified team Velocity, within the "Nicolae Iorga" National College. The Momentum team is the college's way of leaving its mark within this community and fostering a creative generation, equipped with both technical knowledge and social skills.</p>
    </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
            Connect With Us
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Follow us on social media to stay updated with our latest achievements, events, and behind-the-scenes moments. Join our growing community of robotics enthusiasts!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Instagram Feed */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">Latest from Instagram</h3>
              </div>
              <div className="h-[400px] overflow-hidden">
                <iframe
                    src="https://2c75c2150ec84903a8908254d39f0e14.elf.site"
                    width="100%"
                    height="100%"
                    style={{border: "none", overflow: "auto"}}
                ></iframe>
              </div>
            </div>

            {/* Facebook Feed */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">Facebook Updates</h3>
              </div>
              <div className="h-[400px]" style={{border: "none", overflow: "hidden", alignContent: "center"}}>
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61565332126966&tabs&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="400" height="400" style={{border:"none",overflow:"hidden", paddingTop:"100px"}}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}