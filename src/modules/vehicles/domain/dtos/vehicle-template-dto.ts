export class CreateVehicleDto {
  private constructor(
    public make: string,
    public vehicleModel: string,
    public year: number,
    public vin: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateVehicleDto?] {
    const { make, vehicleModel, year, vin } = props;

    if (!make) return ["Make is required"];
    if (!vehicleModel) return ["Model is required"];
    if (!year) return ["Year is required"];
    if (typeof year !== 'number' || year <= 0) return ["Invalid year"];
    if (!vin) return ["VIN is required"];

    return [undefined, new CreateVehicleDto(make, vehicleModel, year, vin)];
  }
}