import { Zap, Clock,  } from 'lucide-react';
import { PrankButton } from './NotifyAlert';

const ComingSoon = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white flex flex-col">
     

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-xl shadow-lg p-8 md:p-12 border border-[#d1cfd2]">
          <div className="bg-[#4c2278]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="text-[#4c2278]" size={36} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#4c2278] mb-4">
            Coming Soon!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring you this amazing feature. Stay tuned for updates!
          </p>
          
          <div className="flex items-center justify-center text-[#9a939a] mb-8">
            <Clock className="mr-2" />
            <span>Launching Soon</span>
          </div>
          
          {/* Email Notification Form */}
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-[#4c2278] mb-3">
              Get notified when we launch
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-[#d1cfd2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#78c3e3]"
              />
              <PrankButton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;