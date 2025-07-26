
import Header from '@/components/Header';

const MainPage = () => {
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <Header />
      </div>
    </div>
  );
};

export default MainPage;