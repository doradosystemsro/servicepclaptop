import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "30229e1e-35c2-4a48-8256-9f2100285071",
  token: "38a0d1f44a7cd046148f64f395ce6b507a70823a",
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
