"use client";

import { ExperienceRoot } from "@contentful/experiences-sdk-react";
import React from "react";
import "@/app/studio-config";

interface ExperienceProps {
  experienceJSON: string | null;
  locale: string;
}

const Experience: React.FC<ExperienceProps> = ({ experienceJSON, locale }) => {
  console.log("here");
  // Only render ExperienceRoot if both props are valid
  if (!experienceJSON || !locale) return null;

  return (
    <React.Suspense fallback={<div>Loading experience...</div>}>
      <ExperienceRoot experience={experienceJSON} locale={locale} />
    </React.Suspense>
  );
};

export default Experience;
