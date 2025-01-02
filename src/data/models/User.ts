import { ModelStatus } from "@config/status";
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  status: ModelStatus;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  status: {
    type: String,
    enum: Object.values(ModelStatus),
    default: ModelStatus.active,
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

UserSchema.pre<IUser>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const UserModel = model<IUser>("User", UserSchema);
