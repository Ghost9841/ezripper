import { useEffect, useState } from "react";
import { downloadAudio, ffmpeg } from "../services/mp3_services";
import { fetchFile } from "@ffmpeg/util";
import { Download, UploadCloud } from "lucide-react";

const ToMP3Comp = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState('');
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);

  // Initialize FFmpeg
  useEffect(() => {
    const loadFFmpeg = async () => {
      if (!ffmpeg.loaded) {
        ffmpeg.on('log', ({ message }) => {
          setProgress(message);
        });

        ffmpeg.on('progress', ({ progress: prog }) => {
          setProgress(`Converting... ${Math.round(prog * 100)}%`);
        });

        try {
          await ffmpeg.load();
          setFfmpegLoaded(true);
          setProgress('FFmpeg loaded successfully!');
        } catch (error) {
          setProgress('Failed to load FFmpeg');
          console.error('FFmpeg load error:', error);
        }
      }
    };
    loadFFmpeg();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudioUrl(null);
    setProgress('');
    if (e.target.files?.[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const getFileExtension = (filename: string) => {
    return filename.split('.').pop()?.toLowerCase() || '';
  };

  const convertToMp3 = async () => {
    if (!videoFile || !ffmpegLoaded) return;

    setConverting(true);
    setProgress('Starting conversion...');

    try {
      const fileExtension = getFileExtension(videoFile.name);
      const inputFileName = `input.${fileExtension}`;
      const outputFileName = 'output.mp3';

      setProgress('Writing file to FFmpeg...');
      await ffmpeg.writeFile(inputFileName, await fetchFile(videoFile));

      setProgress('Converting to MP3...');
      await ffmpeg.exec([
        '-i', inputFileName,
        '-vn', // No video
        '-ar', '44100', // Sample rate
        '-ac', '2', // Stereo
        '-b:a', '192k', // Bitrate
        outputFileName
      ]);

      setProgress('Reading converted file...');
      const data = await ffmpeg.readFile(outputFileName);
      const blob = new Blob([data], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);

      setAudioUrl(url);
      setProgress('Conversion completed!');

    } catch (error) {
      setProgress('Conversion failed: ' + (error as Error).message);
      console.error('Conversion error:', error);
    } finally {
      setConverting(false);
    }
  };

  return (
    <div>
        {/* Converter Content */}
        <div className="p-6">
          <div className="max-w-md mx-auto text-center">
            {!ffmpegLoaded && (
              <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg">
                Loading FFmpeg... This may take a moment.
              </div>
            )}

            <label className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
              <UploadCloud className="w-5 h-5" />
              Upload Video File
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                hidden
              />
            </label>

            <div className="mt-4 text-sm text-gray-600">
              Supports: MP4, WebM, AVI, MOV, MKV, and more
            </div>

            {videoFile && (
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">{videoFile.name}</p>
                <p className="text-sm text-gray-600">
                  Size: {(videoFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            <button
              disabled={!videoFile || converting || !ffmpegLoaded}
              onClick={convertToMp3}
              className="mt-4 w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {converting ? 'Converting...' : 'Convert to MP3'}
            </button>

            {progress && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">{progress}</p>
              </div>
            )}

            {audioUrl && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-medium text-green-800 mb-3">Conversion Complete!</h3>
                <audio controls src={audioUrl} className="w-full mb-3" />
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadAudio(audioUrl, videoFile?.name.replace(/\.[^/.]+$/, "") || "converted")}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default ToMP3Comp
