import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './main/MainPage';
import Footer from './components/Footer';

// Video Tools
// import Mp4ToGif from './pages/video-tools/Mp4ToGif';
// import VideoToMp3 from './pages/video-tools/VideoToMp3';
// import VideoCompressor from './pages/video-tools/VideoCompressor';
// import VideoTrimmer from './pages/video-tools/VideoTrimmer';

// // Audio Tools
// import Mp3Cutter from './pages/audio-tools/Mp3Cutter';
// import AudioConverter from './pages/audio-tools/AudioConverter';
// import VolumeBooster from './pages/audio-tools/VolumeBooster';
// import AudioJoiner from './pages/audio-tools/AudioJoiner';

// // Image Tools
// import ImageResizer from './pages/image-tools/ImageResizer';
// import ImageCropper from './pages/image-tools/ImageCropper';
// import ImageConverter from './pages/image-tools/ImageConverter';
// import ImageCompressor from './pages/image-tools/ImageCompressor';

// // Edit Tools
// import RotateTool from './pages/edit-tools/RotateTool';
// import CropTool from './pages/edit-tools/CropTool';
// import ResizeTool from './pages/edit-tools/ResizeTool';
// import EffectsTool from './pages/edit-tools/EffectsTool';

// // More Tools
// import WatermarkAdder from './pages/more-tools/WatermarkAdder';
// import SubtitleAdder from './pages/more-tools/SubtitleAdder';
// import VideoMerger from './pages/more-tools/VideoMerger';
// import QualityOptimizer from './pages/more-tools/QualityOptimizer';

// import Footer from './components/Footer';
// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 ">
          <Routes>
            {/* Home */}
            <Route path="/" element={<MainPage />} />
            
            Video Tools
            {/* <Route path="/video-tools/mp4-to-gif" element={<Mp4ToGif />} /> */}
            {/* <Route path="/video-tools/video-to-mp3" element={<VideoToMp3 />} /> */}
            {/* <Route path="/video-tools/video-compressor" element={<VideoCompressor />} /> */}
            {/* <Route path="/video-tools/video-trimmer" element={<VideoTrimmer />} /> */}
            
            {/* Audio Tools */}
            {/* <Route path="/audio-tools/mp3-cutter" element={<Mp3Cutter />} /> */}
            {/* <Route path="/audio-tools/audio-converter" element={<AudioConverter />} /> */}
            {/* <Route path="/audio-tools/volume-booster" element={<VolumeBooster />} /> */}
            {/* <Route path="/audio-tools/audio-joiner" element={<AudioJoiner />} /> */}
            
            {/* Image Tools */}
            {/* <Route path="/image-tools/image-resizer" element={<ImageResizer />} /> */}
            {/* <Route path="/image-tools/image-cropper" element={<ImageCropper />} /> */}
            {/* <Route path="/image-tools/image-converter" element={<ImageConverter />} /> */}
            {/* <Route path="/image-tools/image-compressor" element={<ImageCompressor />} /> */}
            
            {/* Edit Tools */}
            {/* <Route path="/edit-tools/rotate" element={<RotateTool />} /> */}
            {/* <Route path="/edit-tools/crop" element={<CropTool />} /> */}
            {/* <Route path="/edit-tools/resize" element={<ResizeTool />} /> */}
            {/* <Route path="/edit-tools/effects" element={<EffectsTool />} /> */}
            
            {/* More Tools */}
            {/* <Route path="/more-tools/watermark-adder" element={<WatermarkAdder />} /> */}
            {/* <Route path="/more-tools/subtitle-adder" element={<SubtitleAdder />} /> */}
            {/* <Route path="/more-tools/video-merger" element={<VideoMerger />} /> */}
            {/* <Route path="/more-tools/quality-optimizer" element={<QualityOptimizer />} /> */}
            
            {/* 404 Not Found */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        
        {/* <Footer /> */}
        <Footer/>
      </div>
    </Router>
  );
};

export default App;