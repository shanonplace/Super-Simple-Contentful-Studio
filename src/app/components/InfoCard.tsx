/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "InfoCard.css"; // Import your CSS file for styles

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  image,
  linkUrl,
}) => {
  return (
    <div className="info-card">
      <Image
        src={`${image.startsWith("https") ? image : `https://${image}`}?w=384`}
        alt="Info Card Image"
        width={384}
        height={216}
        className="info-card-image rounded w-full object-cover"
        style={{ height: "auto", objectFit: "cover" }}
      />
      <div className="info-card-content p-2.5">
        <h3 className="text-xl text-black mb-2">{title}</h3>
        <p className="text-base text-gray-700 mb-3">{description}</p>
        <Link
          href={linkUrl}
          className="info-card-link inline-block bg-red-800 text-white no-underline font-bold py-2 px-3 rounded transition duration-300 hover:bg-red-700"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
