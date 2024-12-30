import { Schema, model, Document } from "mongoose";

export interface IVehicle extends Document {
  make: string;
  vehicleModel: string;
  year: number;
  vin: string;
  createdAt: Date;
  updatedAt: Date;
}

const VehicleSchema = new Schema<IVehicle>({
  make: {
    type: String,
    required: [true, "Make is required"],
    trim: true,
  },
  vehicleModel: {
    type: String,
    required: [true, "Model is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
  },
  vin: {
    type: String,
    required: [true, "VIN is required"],
    unique: true,
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

VehicleSchema.pre<IVehicle>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const VehicleModel = model<IVehicle>("Vehicle", VehicleSchema);
