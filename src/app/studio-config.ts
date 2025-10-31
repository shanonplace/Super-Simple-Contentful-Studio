import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";

// Uncomment the following code to import custom components
import { Button } from "./components/Button";
import { InfoCard } from "./components/InfoCard";
import { Wistia } from "./components/Wistia";
import MarkdownContent from "./components/MarkdownContent";

defineComponents([]);

console.log(
  `Registering Defined components: ${Button.name}, ${InfoCard.name}, ${Wistia.name}`
);
// Uncomment the following code to define custom components
defineComponents([
  {
    component: Button,
    definition: {
      id: "button",
      name: "My Custom Button",
      category: "Custom Components",
      variables: {
        text: {
          displayName: "Text",
          type: "Text",
          defaultValue: "Click me",
        },
      },
    },
  },
  {
    component: InfoCard,
    definition: {
      id: "info-card",
      name: "Info Card",
      category: "Custom Components",
      variables: {
        title: {
          displayName: "Title",
          type: "Text",
          defaultValue: "Shanon Rocks",
        },
        description: {
          displayName: "Description",
          type: "Text",
          defaultValue: "Default description",
        },
        image: {
          displayName: "Background Image",
          type: "Media",
          defaultValue:
            "https://images.ctfassets.net/z9lgl0yt90y7/24V3RUrw0JaqTqA8FBcp2F/e93aa6b8e94614db75689fb6892c7ac2/Ohio_First_Lady_Logo.webp",
        },
        linkUrl: {
          displayName: "Link URL",
          type: "Text",
          defaultValue: "https://firstlady.ohio.gov/",
        },
      },
    },
  },
  {
    component: Wistia,
    definition: {
      id: "wistia",
      name: "Wistia Video",
      category: "Custom Components",
      variables: {
        videoId: {
          displayName: "Video ID",
          type: "Text",
          defaultValue: "nuhuqj4dg0",
        },
      },
    },
  },
  {
    component: MarkdownContent,
    definition: {
      id: "markdown-content",
      name: "Markdown Content",
      category: "Custom Components",
      variables: {
        markdownText: {
          displayName: "Markdown Text",
          type: "Text",
          defaultValue: "# Hello World!\nThis is **markdown**.",
        },
      },
    },
  },
]);

// defineBreakpoints([]);

// Uncomment the following code to define custom breakpoints
defineBreakpoints([
  {
    id: "XS",
    query: "*",
    displayName: "XS (Mobile)",
    displayIcon: "mobile",
    previewSize: "375px",
  },
  {
    id: "S",
    query: ">768px",
    displayName: "S (Tablet)",
    displayIcon: "tablet",
    previewSize: "768px",
  },
  {
    id: "M",
    query: ">992px",
    displayName: "M (Small Desktop)",
    displayIcon: "desktop",
    previewSize: "992px",
  },
  {
    id: "L",
    query: ">1200px",
    displayName: "L (Desktop)",
    displayIcon: "desktop",
    previewSize: "1200px",
  },
  {
    id: "XL",
    query: ">1366px",
    displayName: "XL (Large iPad)",
    displayIcon: "tablet",
    previewSize: "1366px",
  },
  {
    id: "XXL",
    query: ">1600px",
    displayName: "XXL (Large Desktop)",
    displayIcon: "desktop",
    previewSize: "1600px",
  },
]);

//defineDesignTokens([]);

// Uncomment the following code to define custom design tokens
defineDesignTokens({
  spacing: { XS: "4px", S: "16px", M: "32px", L: "64px", XL: "128px" },
  sizing: { XS: "16px", S: "100px", M: "300px", L: "600px", XL: "1024px" },
  color: {
    Slate: "#94a3b8",
    Azure: "azure",
    Orange: "#fdba74",
    Blue: "#0000ff",
  },
  textColor: { Dark: "#1a1a1a", Light: "#efefef", Slate: "#94a3b8" },
});
