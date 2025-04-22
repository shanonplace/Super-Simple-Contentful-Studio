import React from "react";

interface WistiaProps {
  videoId: string;
}

export const Wistia: React.FC<WistiaProps> = ({ videoId }) => {
  return (
    <>
      <script src="https://fast.wistia.net/player.js" async></script>
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${videoId}?web_component=true&seo=true`}
        title="Video"
        allow="autoplay; fullscreen"
        frameBorder="0"
        scrolling="no"
        name="wistia_embed"
      ></iframe>
    </>
  );
};
