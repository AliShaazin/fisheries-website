"use client";

import Image from "next/image";

interface MediaDisplayProps {
  mediaUrl: string;
  mediaType?: "image" | "video" | "auto";
  alt?: string;
  className?: string;
}

const MediaDisplay = ({
  mediaUrl,
  mediaType = "auto",
  alt = "Media content",
  className = "",
}: MediaDisplayProps) => {
    
  const getMediaType = (url: string): "image" | "video" => {
    if (mediaType !== "auto") return mediaType;

    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

    const urlLower = url.toLowerCase();

    if (videoExtensions.some((ext) => urlLower.includes(ext))) {
      return "video";
    } else if (imageExtensions.some((ext) => urlLower.includes(ext))) {
      return "image";
    }

    return "image";
  };

  const detectedMediaType = getMediaType(mediaUrl);

  return (
    <div className={`px-4 ${className}`}>
      <div className="relative mx-auto max-w-full h-[300px] md:h-[763px] rounded-[24px] overflow-hidden">
        {detectedMediaType === "video" ? (
          <video
            src={mediaUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        ) : (
          <Image src={mediaUrl} alt={alt} className="object-cover" fill />
        )}
      </div>
    </div>
  );
};

export default MediaDisplay;
