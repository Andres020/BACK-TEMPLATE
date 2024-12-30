import { Schema, model, Document } from "mongoose";

export interface ITemplate extends Document {
  name: string;

  createdAt: Date;
  updatedAt: Date;
}

const TemplateSchema = new Schema<ITemplate>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

TemplateSchema.pre<ITemplate>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const TemplateModel = model<ITemplate>("Template", TemplateSchema);
