import HowItWorks from "./HowITWorks";
const LandingPage = () => {

  return (
    <div className="">
      {/* Hero Section */}
      <section className="md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4c2278] mb-6">
            Create, Edit & Convert Media Files in Seconds
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Free online tools for GIF creation, video conversion, and image editing. No watermarks, no registration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/video-tools/video-to-mp3"
              className="bg-[#4c2278] hover:bg-[#5d2d8f] text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Start Creating
            </a>
            <a
              href="/coming-soon"
              className="border-2 border-[#4c2278] text-[#4c2278] hover:bg-[#4c2278]/10 font-bold py-3 px-8 rounded-lg transition"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>


   <HowItWorks/>

      {/* CTA Section */}
      <section className="p-16 bg-gradient-to-r from-[#4c2278] to-[#63cff5] text-white">
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