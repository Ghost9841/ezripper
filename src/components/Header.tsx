import  { useState } from 'react';
import { ChevronDown, Plus, Film, Music, Image, Sliders } from 'lucide-react';
import logo from "@/assets/ez_ripper_logo.jpeg";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  function redirectToComingSoon () {
    navigate('/coming-soon');
  }

  const menuItems = [
    {
      name: 'Video Tools',
      icon: <Film size={18} />,
      dropdown: [
        { name: 'MP4 to GIF', action: () => redirectToComingSoon()  },
        { name: 'Video to MP3', action:  () => navigate('/video-tools/video-to-mp3')},
        { name: 'Video Compressor', action:() => redirectToComingSoon()  },
        { name: 'Video Trimmer', action: () => redirectToComingSoon()  },
      ]
    },
    {
      name: 'Audio Tools',
      icon: <Music size={18} />,
      dropdown: [
        { name: 'MP3 Cutter', act: () => redirectToComingSoon()  },
        { name: 'Audio Converter', action:  () => redirectToComingSoon()  },
        { name: 'Volume Booster', action: () => redirectToComingSoon()  },
        { name: 'Audio Joiner', action: () => redirectToComingSoon()  },
      ]
    },
    {
      name: 'Image Tools',
      icon: <Image size={18} />,
      dropdown: [
        { name: 'Image Resizer', action:  () => redirectToComingSoon()  },
        { name: 'Image Cropper', action: () => redirectToComingSoon()  },
        { name: 'Image Converter', action:  () => redirectToComingSoon()  },
        { name: 'Image Compressor', action:  () => redirectToComingSoon()  },
      ]
    },
    {
      name: 'Edit',
      icon: <Sliders size={18} />,
      dropdown: [
        { name: 'Rotate', action: () => redirectToComingSoon()  },
        { name: 'Crop', action: () => redirectToComingSoon()  },
        { name: 'Resize', action: () => redirectToComingSoon()  },
        { name: 'Effects', action: () => redirectToComingSoon()  },
      ]
    },
    {
      name: 'More Tools',
      icon: <Plus size={18} />,
      dropdown: [
        { name: 'Watermark Adder', action:  () => redirectToComingSoon()  },
        { name: 'Subtitle Adder', action:  () => redirectToComingSoon()  },
        { name: 'Video Merger', action:  () => redirectToComingSoon()  },
        { name: 'Quality Optimizer', action:() => redirectToComingSoon()  },
      ]
    }
  ];

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Ez Ripper" className="w-16 h-16 rounded-full" />
            <h1 className="text-xl font-bold">Ez Ripper</h1>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-[#78c3e3]/20 transition-colors"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl z-10 border border-[#d1cfd2]">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          if (subItem.action) {
                            subItem.action();
                          }
                          setActiveDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-[#4c2278]/10 hover:text-[#4c2278] transition-colors"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-[#78c3e3]/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;