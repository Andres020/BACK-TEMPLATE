import { Request, Response } from "express";
import { CreateVehicleDto } from "../domain/dtos";
import { VehicleRepository } from "../domain/vehicles-repository";
import { FilterDto } from "src/modules/base/domain/dtos";

export class VehicleController {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  public create = (req: Request, res: Response) => {
    const [error, data] = CreateVehicleDto.create(req.body);
    if (error) throw res.status(400).json({ error });

    this.vehicleRepository
      .create(data!)
      .then((vehicle) => {
        res.status(201).json(vehicle);
      })
      .catch((error) => res.status(201).json(error));
  };

  public findById = (req: Request, res: Response) => {
    const id = req.params.id;

    this.vehicleRepository
      .findById(id)
      .then((vehicle) => {
        res.status(201).json(vehicle);
      })
      .catch((error) => res.status(201).json(error));
  };

  public delete = (req: Request, res: Response) => {
    const id = req.params.id;

    this.vehicleRepository
      .delete(id)
      .then((vehicle) => {
        res.status(201).json(vehicle);
      })
      .catch((error) => res.status(201).json(error));
  };

  public update = (req: Request, res: Response) => {
    const id = req.params.id;
    const [error, data] = CreateVehicleDto.create(req.body);
    if (error) throw res.status(400).json({ error });

    // this.vehicleRepository
    //   .update({ ...data!, id })
    //   .then((vehicle) => {
    //     res.status(201).json(vehicle);
    //   })
    //   .catch((error) => res.status(201).json(error));
  };

  public getAll = (req: Request, res: Response) => {
    const filters = FilterDto.create(req.body);
    this.vehicleRepository
      .getAll(filters)
      .then((vehicles) => {
        res.status(201).json(vehicles);
      })
      .catch((error) => res.status(201).json(error));
  };
}
