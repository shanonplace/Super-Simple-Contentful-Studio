import "dotenv/config";
import { createClient } from "contentful";
import { fetchBySlug } from "@contentful/experiences-sdk-react";
import { writeFileSync } from "fs";

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const space = process.env.CONTENTFUL_SPACE;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const experienceTypeId = process.env.CONTENTFUL_EXPERIENCE_TYPE;
const localeCode = process.env.CONTENTFUL_LOCALE_CODE || "en-US";

const slug = process.argv[2];

if (!accessToken || !space || !environment || !experienceTypeId || !slug) {
  console.error(
    chalk.red("Missing required environment variables or slug argument.")
  );
  console.log(chalk.yellow("Usage: node get-experience-json.mjs <slug>"));
  process.exit(1);
}

const client = createClient({
  accessToken,
  space,
  environment,
});

(async () => {
  try {
    const experience = await fetchBySlug({
      client,
      slug,
      experienceTypeId,
      localeCode,
    });
    const experienceJSON = experience
      ? JSON.stringify(experience, null, 2)
      : null;
    if (experienceJSON) {
      writeFileSync("experience.json", experienceJSON);
      console.log(chalk.green("Experience JSON saved to experience.json"));
    } else {
      console.log("No experience found for the given slug.");
      console.log(chalk.yellow("No experience found for the given slug."));
    }
  } catch (err) {
    console.error(chalk.red("Error fetching experience:"), err);
    process.exit(1);
  }
})();
