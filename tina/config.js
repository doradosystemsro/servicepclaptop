import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "8640bb63-3016-4565-a65a-62829d5758f7",
  token: "c14c4e689dd6159dc6c5af7649cc30a6bc592dac",
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: ".",
    },
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
          }
        ],
      },
    ],
  },
});
