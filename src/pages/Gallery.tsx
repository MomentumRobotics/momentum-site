import { useState, useEffect } from 'react';
import ParticleBackground from "../components/ParticleBackground.tsx";

// Define the type for an image object
type Image = {
  url: string;
  category: string;
};

const galleryImages = [
  {
    "url" : "/momentum-site/images/competitions/competition (1).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (10).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (11).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (12).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (2).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (3).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (4).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (5).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (6).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (7).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (8).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/competitions/competition (9).jpg",
    "category": "competitions"
  },
  {
    "url" : "/momentum-site/images/projects/projects (1).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (10).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (11).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (12).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (13).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (14).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (15).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (16).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (17).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (18).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (19).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (2).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (20).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (21).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (22).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (23).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (24).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (25).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (26).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (27).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (28).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (29).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (3).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (30).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (31).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (32).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (33).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (34).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (35).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (36).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (37).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (38).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (39).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (4).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (40).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (41).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (42).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (43).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (44).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (45).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (46).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (47).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (48).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (49).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (5).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (50).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (51).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (52).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (53).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (54).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (55).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (56).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (57).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (58).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (59).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (6).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (60).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (61).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (62).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (63).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (64).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (65).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (66).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (67).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (68).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (69).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (7).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (70).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (71).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (72).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (73).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (74).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (75).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (76).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (8).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/projects/projects (9).jpg",
    "category": "projects"
  },
  {
    "url" : "/momentum-site/images/team/team (1).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (10).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (11).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (12).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (13).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (14).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (15).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (16).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (17).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (18).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (19).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (2).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (20).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (21).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (22).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (23).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (24).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (25).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (26).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (27).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (28).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (29).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (3).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (30).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (31).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (32).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (33).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (34).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (35).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (36).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (37).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (38).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (39).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (4).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (40).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (41).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (42).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (43).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (44).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (45).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (46).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (47).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (48).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (49).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (5).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (50).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (51).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (52).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (53).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (54).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (55).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (56).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (57).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (58).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (59).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (6).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (60).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (7).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (8).jpg",
    "category": "team"
  },
  {
    "url" : "/momentum-site/images/team/team (9).jpg",
    "category": "team"
  }
];

const categories = ['All', 'Competitions', 'Team', 'Projects'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<Image[]>([]);

  // Filter images based on selected category
  useEffect(() => {
    console.log(`Filtering for category: ${selectedCategory}`);
    if (selectedCategory.toLowerCase() === 'all') {
      setImages(galleryImages); // Show all images if 'All' is selected
    } else {
      const filteredImages = galleryImages.filter(img =>
          img.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      console.log(`Filtered images: ${JSON.stringify(filteredImages)}`);
      setImages(filteredImages); // Filter images by category
    }
  }, [selectedCategory]);

  // Change the category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
      <div><ParticleBackground/>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="pt-16 pb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Gallery</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Explore our journey through photos, from competition victories to behind-the-scenes moments
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-8 px-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryChange(category)} // Handle category change
                    className={`px-4 py-2 rounded-full transition-colors ${
                        selectedCategory.toLowerCase() === category.toLowerCase()
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                  {category}
                </button>
            ))}
          </div>

          {/* Gallery Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {images.length > 0 ? (
                images.map((img) => (
                    <div
                        key={img.url}
                        className="relative cursor-pointer"
                        onClick={() => setSelectedImage(img.url)}
                    >
                      <img src={img.url} alt="Gallery" className="w-full h-full object-cover rounded-lg"/>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">No images available for this category.</p>
            )}
          </div>

          {/* Modal for image preview */}
          {selectedImage && (
              <div
                  className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
                  onClick={() => setSelectedImage(null)}
              >
                <img
                    src={selectedImage}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain"
                />
              </div>
          )}
        </div>
      </div>
        );
        }