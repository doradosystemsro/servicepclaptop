import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "8640bb63-3016-4565-a65a-62829d5758f7",
  token: "c14c4e689dd6159dc6c5af7649cc30a6bc592dac",
  build: {
    outputFolder: "admin", // Va genera folderul servicepclaptop.pages.dev/admin
    publicFolder: ".",     // Rădăcina site-ului tău
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articole Blog",
        path: "blog",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titlu Articol (H1)", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Data Publicarii" },
          { type: "rich-text", name: "body", label: "Corp Articol", isBody: true },
          { type: "string", name: "meta_title", label: "SEO Meta Title" },
          { type: "string", name: "meta_description", label: "SEO Meta Description", ui: { component: "textarea" } }
        ],
      },
    ],
  },
});
