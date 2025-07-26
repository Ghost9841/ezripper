import  { useState } from 'react';
import { ChevronDown, Plus, Film, Music, Image, Sliders } from 'lucide-react';
import logo from "@/assets/ez_ripper_logo.jpeg";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      name: 'Video Tools',
      icon: <Film size={18} />,
      dropdown: [
        { name: 'MP4 to GIF', action: () => console.log('MP4 to GIF') },
        { name: 'Video to MP3', action: () => console.log('Video to MP3') },
        { name: 'Video Compressor', action: () => console.log('Compress Video') },
        { name: 'Video Trimmer', action: () => console.log('Trim Video') },
      ]
    },
    {
      name: 'Audio Tools',
      icon: <Music size={18} />,
      dropdown: [
        { name: 'MP3 Cutter', action: () => console.log('Cut MP3') },
        { name: 'Audio Converter', action: () => console.log('Convert Audio') },
        { name: 'Volume Booster', action: () => console.log('Boost Volume') },
        { name: 'Audio Joiner', action: () => console.log('Join Audio') },
      ]
    },
    {
      name: 'Image Tools',
      icon: <Image size={18} />,
      dropdown: [
        { name: 'Image Resizer', action: () => console.log('Resize Image') },
        { name: 'Image Cropper', action: () => console.log('Crop Image') },
        { name: 'Image Converter', action: () => console.log('Convert Image') },
        { name: 'Image Compressor', action: () => console.log('Compress Image') },
      ]
    },
    {
      name: 'Edit',
      icon: <Sliders size={18} />,
      dropdown: [
        { name: 'Rotate', action: () => console.log('Rotate') },
        { name: 'Crop', action: () => console.log('Crop') },
        { name: 'Resize', action: () => console.log('Resize') },
        { name: 'Effects', action: () => console.log('Add Effects') },
      ]
    },
    {
      name: 'More Tools',
      icon: <Plus size={18} />,
      dropdown: [
        { name: 'Watermark Adder', action: () => console.log('Add Watermark') },
        { name: 'Subtitle Adder', action: () => console.log('Add Subtitles') },
        { name: 'Video Merger', action: () => console.log('Merge Videos') },
        { name: 'Quality Optimizer', action: () => console.log('Optimize Quality') },
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
                          subItem.action();
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