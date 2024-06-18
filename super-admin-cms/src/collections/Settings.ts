import { CollectionConfig } from "payload/types";

const Settings: CollectionConfig = {
  slug: "settings",
  fields: [
    {
      name: "trackingCode", // required
      type: "code", // required
      required: true,
      admin: {
        language: "javascript",
      },
    },
  ],
};

export default Settings;
