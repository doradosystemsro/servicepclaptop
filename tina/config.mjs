import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", 
  clientId: "8640bb63-3016-4565-a65a-62829d5758f7", // Client ID-ul tău corect
  token: process.env.TINA_TOKEN, // Va citi token-ul adăugat de tine în Cloudflare
  
  build: {
    outputFolder: "admin", // Tina va crea interfața în folderul servicepclaptop.pages.dev/admin
    publicFolder: ".",     // Rădăcina site-ului tău HTML
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articole Blog",
        path: "blog", // Salvează direct în folderul tău existent numit blog
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
