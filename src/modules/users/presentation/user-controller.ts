import { Request, Response } from "express";
import { UserRepository } from "../domain";
import { CreateUserDto } from "../domain/dtos";
import { FilterDto } from "src/modules/base/domain/dtos";
import { CustomError } from "src/modules/errors";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public create = (req: Request, res: Response) => {
    const [error, data] = CreateUserDto.create(req.body);
    if (error) throw res.status(400).json({ message: error });

    this.userRepository
      .create(data!)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => {
        if (error instanceof CustomError) {
          res.status(error.statusCode).json({ message: error.message });
        } else {
          res.status(500).json({ message: "Internal Server Error" });
        }
      });
  };

  public findById = (req: Request, res: Response) => {
    const id = req.params.id;

    this.userRepository
      .findById(id)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => res.status(201).json(error));
  };

  public delete = (req: Request, res: Response) => {
    const id = req.params.id;

    this.userRepository
      .delete(id)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => res.status(201).json(error));
  };

  public getAll = (req: Request, res: Response) => {
    const filters = FilterDto.create(req.body);
    this.userRepository
      .getAll(filters)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => res.status(201).json(error));
  };

  public update = (req: Request, res: Response) => {
    const id = req.params.id;
    const [error, data] = CreateUserDto.create(req.body);
    if (error) throw res.status(400).json({ error });

    // this.vehicleRepository
    //   .update({ ...data!, id })
    //   .then((vehicle) => {
    //     res.status(201).json(vehicle);
    //   })
    //   .catch((error) => res.status(201).json(error));
  };

  public findByEmail = (req: Request, res: Response) => {};
}
