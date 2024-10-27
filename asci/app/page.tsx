'use client';
import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline/next';

const ASLLandingPage: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <section className="min-h-screen flex flex-col items-center justify-start pt-8 p-4 relative">
        
        {/* Hero Text */}
        <div className="text-center mb-4 z-10">
          <h1 className="text-7xl font-bold text-white mb-4">
            ESLR 
          </h1>
          <p className="text-2xl text-purple-200 max-w-2xl mx-auto">
            Making American Sign Language more accessible to everyone. 
          </p>
        </div>

        {/* Spline 3D Model */}
        <div className="w-full max-w-5xl h-[500px] mb-8 relative z-0">
          <Spline
            scene="https://prod.spline.design/cRk3icxeUpZ7BtvS/scene.splinecode"
            className="w-full h-full rounded-xl"
          />
        </div>

        {/* Audio Element */}
        <audio ref={audioRef} src="/elevenlabs.mp3" loop />

        {/* Buttons Container */}
        <div className="flex gap-8 z-10">
          {/* Play Audio Button */}
          <button
            onClick={playAudio}
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            Intro for ESLR 
          </button>

          {/* External Link Button */}
          <button
            onClick={() => window.open('https://www.reddit.com/r/coolguides/comments/f2w32n/the_language_of_pikachu_shoutout_to_all_the/', '_blank')}
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            Chrome extension for ESLR
          </button>
        </div>
      </section>
    </div>
  );
};

export default ASLLandingPage;