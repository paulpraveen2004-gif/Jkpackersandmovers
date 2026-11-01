"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/config";

const VIDEOS = [
  { id: "v1", src: "/videos/video-01.mp4", title: "Household Packing Work", tag: "Packing" },
  { id: "v2", src: "/videos/video-02.mp4", title: "Safe Furniture Wrapping", tag: "Protection" },
  { id: "v3", src: "/videos/video-03.mp4", title: "Careful Goods Loading", tag: "Loading" },
  { id: "v4", src: "/videos/video-04.mp4", title: "Electronic Appliance Packing", tag: "Appliance" },
  { id: "v5", src: "/videos/video-05.mp4", title: "Vehicle Transport Prep", tag: "Transit" },
  { id: "v6", src: "/videos/video-06.mp4", title: "Box Packing & Labeling", tag: "Packing" },
  { id: "v7", src: "/videos/video-07.mp4", title: "Apartment Shifting Handling", tag: "Shifting" },
  { id: "v8", src: "/videos/video-08.mp4", title: "Heavy Furniture Movement", tag: "Handling" },
  { id: "v9", src: "/videos/video-09.mp4", title: "Protective Bubble Wrap Work", tag: "Packing" },
  { id: "v10", src: "/videos/video-10.mp4", title: "Unloading & Setup Support", tag: "Unloading" },
  { id: "v11", src: "/videos/video-11.mp4", title: "Household Item Organization", tag: "Shifting" },
  { id: "v12", src: "/videos/video-12.mp4", title: "Door-to-Door Delivery Work", tag: "Transit" },
  { id: "v13", src: "/videos/video-13.mp4", title: "Mattress & Cot Wrapping", tag: "Protection" },
  { id: "v14", src: "/videos/video-14.mp4", title: "Complete Shifting Handover", tag: "Delivery" },
];

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Ensure video loads and plays cleanly muted
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.muted = true;
        modalVideoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="dark-section text-white py-20 md:py-24">
        <div className="container-xl text-center">
          <span className="section-tag">Real Work in Action</span>
          <h1 className="section-title-white mt-2">Work Gallery &amp; Shifting Videos</h1>
          <span className="orange-line mx-auto" />
          <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Watch real on-ground shifting, packing, and loading videos carried out by the JK Packers &amp; Movers team.
          </p>
        </div>
      </section>

      {/* ── Video Gallery Section ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VIDEOS.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onOpen={() => setSelectedVideo({ src: video.src, title: video.title })}
              />
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="mt-16 text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Want the Same Quality Service?</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Share your shifting details and get an instant quotation tailored to your household or office items.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact#quote" className="btn-primary text-sm px-6 py-3">
                Get a Free Quote
              </Link>
              <a
                href={`https://wa.me/${BUSINESS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-6 py-3"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Native & Responsive Video Modal ── */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Top Bar with Title and Close Button */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-50 pointer-events-none">
            <div className="pointer-events-auto bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <p className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {selectedVideo.title}
              </p>
              <p className="text-[10px] sm:text-xs text-orange-400">JK Packers &amp; Movers</p>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-orange-500 text-white flex items-center justify-center transition-all shadow-lg focus:outline-none"
            >
              <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Video Player Box */}
          <div
            className="relative w-full max-w-lg sm:max-w-2xl max-h-[82vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              key={selectedVideo.src}
              src={selectedVideo.src}
              controls
              muted
              playsInline
              className="w-auto h-auto max-w-full max-h-[75vh] rounded-2xl shadow-2xl bg-black border border-white/15"
            />
          </div>
        </div>
      )}
    </>
  );
}

function VideoCard({
  video,
  onOpen,
}: {
  video: { id: string; src: string; title: string; tag: string };
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Browser autoplay restrictions
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card-hover hover:border-orange-200 transition-all duration-300 flex flex-col cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] sm:aspect-[4/5] bg-black overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />

        {/* Hover play state indicator */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-300 pointer-events-none ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <PlayIcon className="w-5 h-5 translate-x-0.5" />
          </div>
        </div>

        {/* Tag badge top-left */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
            {video.tag}
          </span>
        </div>

        {/* Watch Full Button top-right */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-black/60 group-hover:bg-orange-500 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-md">
            <FullscreenIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
          <span className="text-[11px] text-gray-200 flex items-center gap-1 font-medium">
            <EyeIcon className="w-3.5 h-3.5 text-orange-400" />
            Hover to preview
          </span>
          <span className="text-[11px] text-orange-400 font-semibold flex items-center gap-1">
            Click to watch
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-4 flex items-center justify-between gap-3 bg-white border-t border-gray-100 mt-auto">
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 text-sm truncate group-hover:text-orange-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">JK Packers &amp; Movers Team</p>
        </div>
        <span className="flex-shrink-0 text-xs font-semibold text-orange-600 group-hover:text-white group-hover:bg-orange-500 bg-orange-50 px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1">
          <span>Play</span>
          <PlayIcon className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function FullscreenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
