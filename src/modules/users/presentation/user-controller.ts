import { Request, Response } from "express";
import { UserRepository } from "../domain";
import { CreateUserDto } from "../domain/dtos";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public findAll = (req: Request, res: Response) => {
    this.userRepository
      .findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => res.status(404).json(error));
  };

  public findById = (req: Request, res: Response) => {
    this.userRepository
      .findById(req.params.id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => res.status(404).json(error));
  };
  public findByEmail = (req: Request, res: Response) => {};

  public create = (req: Request, res: Response) => {
    const [error, data] = CreateUserDto.create(req.body);
    if (error) throw res.status(400).json({ error });

    this.userRepository
      .create(data!)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => res.status(201).json(error));
  };

  public update = (req: Request, res: Response) => {};
  public delete = (req: Request, res: Response) => {};
}
