const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4c2278] mb-6">
            Create, Edit & Convert Media Files in Seconds
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Free online tools for GIF creation, video conversion, and image editing. No watermarks, no registration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#gif-maker" 
              className="bg-[#4c2278] hover:bg-[#5d2d8f] text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Start Creating
            </a>
            <a 
              href="#tools" 
              className="border-2 border-[#4c2278] text-[#4c2278] hover:bg-[#4c2278]/10 font-bold py-3 px-8 rounded-lg transition"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c2278] mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#4c2278] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload</h3>
              <p className="text-gray-600">Drag & drop your file or browse from your device</p>
            </div>
            <div className="text-center">
              <div className="bg-[#4c2278] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Edit</h3>
              <p className="text-gray-600">Use our tools to customize your media</p>
            </div>
            <div className="text-center">
              <div className="bg-[#4c2278] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Download</h3>
              <p className="text-gray-600">Save your file in the desired format</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4c2278] to-[#63cff5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Amazing Media?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who edit their videos, GIFs, and images with Ez Ripper every day.
          </p>
          <a 
            href="#gif-maker" 
            className="inline-block bg-white text-[#4c2278] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>

     
    </div>
  );
};

export default LandingPage;