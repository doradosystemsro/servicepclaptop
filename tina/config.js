import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "30229e1e-35c2-4a48-8256-9f2100285071",
  token: "3fd1f9ec5a37473f9cdafbe3493f8f533e523551",
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articole Blog",
        path: "blog",
        format: "html", // ÎI SPUNEM EXPLICIT CĂ AI FIȘIERE .HTML ACOLO!
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titlu",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Continut",
          }
        ],
      },
    ],
  },
});
