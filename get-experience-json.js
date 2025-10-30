require("dotenv").config();
const { createClient } = require("contentful");
const { fetchBySlug } = require("@contentful/experiences-sdk-react");
const fs = require("fs");

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const space = process.env.CONTENTFUL_SPACE;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const experienceTypeId = process.env.CONTENTFUL_EXPERIENCE_TYPE;
const slug = process.env.CONTENTFUL_EXPERIENCE_SLUG;
const localeCode = process.env.CONTENTFUL_LOCALE_CODE || "en-US";

if (!accessToken || !space || !environment || !experienceTypeId || !slug) {
  console.error("Missing required environment variables.");
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
      fs.writeFileSync("experience.json", experienceJSON);
      console.log("Experience JSON saved to experience.json");
    } else {
      console.log("No experience found for the given slug.");
    }
  } catch (err) {
    console.error("Error fetching experience:", err);
    process.exit(1);
  }
})();
