import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";

// Uncomment the following code to import custom components
import { Button } from "./components/Button";
import { InfoCard } from "./components/InfoCard";
import { Wistia } from "./components/Wistia";

//defineComponents([]);

// Uncomment the following code to define custom components
// defineComponents([
//   {
//     component: Button,
//     definition: {
//       id: "button",
//       name: "My Custom Button",
//       category: "Custom Components",
//       variables: {
//         text: {
//           displayName: "Text",
//           type: "Text",
//           defaultValue: "Click me",
//         },
//       },
//     },
//   },
//   {
//     component: InfoCard,
//     definition: {
//       id: "info-card",
//       name: "Info Card",
//       category: "Custom Components",
//       variables: {
//         title: {
//           displayName: "Title",
//           type: "Text",
//           defaultValue: "Default title",
//         },
//         description: {
//           displayName: "Description",
//           type: "Text",
//           defaultValue: "Default description",
//         },
//         image: {
//           displayName: "Background Image",
//           type: "Media",
//           defaultValue:
//             "https://images.ctfassets.net/z9lgl0yt90y7/24V3RUrw0JaqTqA8FBcp2F/e93aa6b8e94614db75689fb6892c7ac2/Ohio_First_Lady_Logo.webp",
//         },
//         linkUrl: {
//           displayName: "Link URL",
//           type: "Text",
//           defaultValue: "https://firstlady.ohio.gov/",
//         },
//       },
//     },
//   },
//   {
//     component: Wistia,
//     definition: {
//       id: "wistia",
//       name: "Wistia Video",
//       category: "Custom Components",
//       variables: {
//         videoId: {
//           displayName: "Video ID",
//           type: "Text",
//           defaultValue: "nuhuqj4dg0",
//         },
//       },
//     },
//   },
// ]);

defineBreakpoints([]);

// Uncomment the following code to define custom breakpoints
// defineBreakpoints([
//   {
//     id: "Mobile",
//     query: "*",
//     displayName: "Mobile",
//     displayIcon: "mobile",
//     previewSize: "390px",
//   },
//   {
//     id: "Tablet",
//     query: "<982px",
//     displayName: "Tablet",
//     displayIcon: "tablet",
//     previewSize: "820px",
//   },
//   {
//     id: "Desktop",
//     query: "<576px",
//     displayName: "Desktop",
//     displayIcon: "desktop",
//     previewSize: "100%",
//   },
// ]);

defineDesignTokens([]);

// Uncomment the following code to define custom design tokens
// defineDesignTokens({
//   spacing: { XS: "4px", S: "16px", M: "32px", L: "64px", XL: "128px" },
//   sizing: { XS: "16px", S: "100px", M: "300px", L: "600px", XL: "1024px" },
//   color: {
//     Slate: "#94a3b8",
//     Azure: "azure",
//     Orange: "#fdba74",
//     Blue: "#0000ff",
//   },
//   textColor: { Dark: "#1a1a1a", Light: "#efefef", Slate: "#94a3b8" },
// });
