import React from 'react';
import logo from '/landin-page/images/nlogo.png';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="relative pb-56 h-0">
      {videoUrl ? (
        <iframe
          className="absolute top-0 left-0 rounded-lg w-full h-full"
          src={`${videoUrl}?modestbranding=1&rel=0&autohide=1&controls=0`}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            const logoPreview = document.getElementById('logo-preview');
            if (logoPreview) {
              logoPreview.style.display = 'block';
              logoPreview.classList.add('animate-fade-in');
            }
          }}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Select a video to play</p>
        </div>
      )}
      <div
        id="logo-preview"
        className="absolute top-10 left-3/4"
        style={{ display: 'none' }}
      >
        <img src={logo} alt="Custom Logo" className="h-14 logoimg" />
      </div>
    </div>
  );
};

export default VideoPlayer;
