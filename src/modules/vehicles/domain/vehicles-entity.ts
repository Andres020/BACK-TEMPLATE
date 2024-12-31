export class VehicleEntity {
  id: string;
  make: string;
  vehicleModel: string;
  year: number;
  vin: string;

  constructor(
    id: string,
    make: string,
    vehicleModel: string,
    year: number,
    vin: string
  ) {
    this.id = id;
    this.make = make;
    this.vehicleModel = vehicleModel;
    this.year = year;
    this.vin = vin;
  }

  static fromObject(object: { [key: string]: any }) {
    const { id, _id, make, vehicleModel, year, vin } = object;

    if (!id && !_id) throw new Error("Missing id");
    if (!make) throw new Error("Missing make");
    if (!vehicleModel) throw new Error("Missing vehicleModel");
    if (!year) throw new Error("Missing year");
    if (!vin) throw new Error("Missing vin");

    return new VehicleEntity(id || _id, make, vehicleModel, year, vin);
  }
}
