import Experience from "@/app/components/Experience";
import { createClient } from "contentful";
import {
  detachExperienceStyles,
  fetchBySlug,
} from "@contentful/experiences-sdk-react";

//Create the Contentful client
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const space = process.env.CONTENTFUL_SPACE!;
const environment = process.env.CONTENTFUL_ENVIRONMENT!;
const experienceTypeId = process.env.CONTENTFUL_EXPERIENCE_TYPE!;

const client = createClient({
  accessToken: accessToken,
  space: space,
  environment: environment,
});

export default async function AppPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { locale = "en-US", slug } = (await params) || {};

  const experience = await fetchBySlug({
    client,
    slug,
    experienceTypeId,
    localeCode: locale,
  });

  // extract the styles from the experience
  const stylesheet = experience ? detachExperienceStyles(experience) : null;
  console.log("stylesheet ==>", stylesheet);

  // experience currently needs to be stringified manually to be passed to the component
  const experienceJSON = experience ? JSON.stringify(experience) : null;
  console.log("experienceJSON ==>", JSON.stringify(experienceJSON, null, 2));

  return (
    <main className="flex flex-col min-h-screen justify-between">
      {/* Spit out the stylesheet */}
      {stylesheet && <style>{stylesheet}</style>}

      {/* Pass the experience JSON to the component */}
      <Experience experienceJSON={experienceJSON} locale={locale} />
    </main>
  );
}
