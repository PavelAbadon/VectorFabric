import { Schema, model, Types } from "mongoose";

const vectorSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 1000,
      minlength: 3,
    },

    // Основният vector файл (EPS)
    vectorUrl: {
        type: String,
        required: [true, "Vector file is required"],
        validate: {
            validator: function(value) {
            return /^https?:\/\/.+\.(eps|svg|ai)$/i.test(value);
   },
   message: 'Vector file must be EPS, SVG or AI'
}
    },

    // Preview image (JPG/PNG)
    previewImageUrl: {
      type: String,
      required: [true, "Vector image file is required"],
      validate: {
        validator: function (value) {
          return /^https?:\/\/.+\.(jpg|jpeg|png)$/i.test(value);
        },
        message: "Preview image must be a valid image URL (JPG, PNG)",
      },
    },

    // Релация към User
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    // optional metadata
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    category: {
    type: String,
    required: true,
    enum: ["Logo", "Icon", "Illustration", "Background", "3D", "Pattern"],
    },

    downloads: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Vector = model("Vector", vectorSchema);

export default Vector;