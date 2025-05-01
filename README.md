# 🎨 Super-Simple-Contentful-Studio

Super-Simple-Contentful-Studio is a simple Next.js server-side application that serves as a reference implementation for integrating the Contentful Studio product. This project provides the most basic starting point, allowing you to build out custom components, design system tokens, and more as you go.

> **⚠️ Disclaimer:** This project is not created by or supported by Contentful. It is a community-driven reference implementation that anyone can use.

## ✨ Features

- 🚀 Minimal setup to get started with Contentful Studio.
- 🛠️ Fully customizable to suit your design and component needs.
- 🌐 Built with Next.js for server-side rendering and scalability.

## 🏁 Getting Started

Follow these steps to set up the Studio Experience:

1.  **📂 Clone the repository:**

    ```bash
    git clone https://github.com/shanonplace/Super-Simple-Contentful-Studio.git
    cd Super-Simple-Contentful-Studio.git
    ```

2.  **📦 Install dependencies:**

    ```bash
    npm install
    ```

3.  **🔑 Set up environment variables:**
    Create a `.env.local` file in the root directory and add the following:

    ```env
    CONTENTFUL_ACCESS_TOKEN=your_access_token
    CONTENTFUL_SPACE=your_space_id
    CONTENTFUL_ENVIRONMENT=your_environment_id
    CONTENTFUL_EXPERIENCE_TYPE=your_experience_type
    ```

    Alternatively, you can refer to the `env.sample` file in the root directory for an example of the required environment variables.

4.  **▶️ Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🎨 Customization

To customize Super-Simple-Contentful-Studio, you can add custom components, design system tokens, and other configurations by modifying the `studio-config.ts` file. This file contains commented sections that you can uncomment and adjust to suit your needs.

### 🛠️ Steps to Customize:

1. **📝 Open the `studio-config.ts` file:**
   Locate the `studio-config.ts` file in the root directory of the project.

2. **🔧 Uncomment and configure:**
   Inside the file, you'll find commented sections for custom components, design system tokens, and other settings. Uncomment the relevant parts and update them as needed.

3. **💾 Save and restart the development server:**
   After making changes, save the file and restart the development server to see your customizations in action.

By leveraging the flexibility of the `studio-config.ts` file, you can tailor the application to meet your specific requirements.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this reference implementation.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

🎉 Enjoy building with Super-Simple-Contentful-Studio!
