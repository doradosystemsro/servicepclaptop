import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", 
  clientId: "8640bb63-3016-4565-a65a-62829d5758f7", 
  token: process.env.TINA_TOKEN, 
  schema: {
    collections: [
      {
        name: "post",
        label: "Articole Blog",
        path: "blog", 
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titlu Articol (H1)", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Data Publicării" },
          { type: "rich-text", name: "body", label: "Corp Articol (Text)", isBody: true },
          { type: "string", name: "meta_title", label: "SEO Meta Title (În Google)" },
          { type: "string", name: "meta_description", label: "SEO Meta Description (În Google)", ui: { component: "textarea" } }
        ],
      },
    ],
  },
});
