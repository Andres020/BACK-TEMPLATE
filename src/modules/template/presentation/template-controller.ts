import { Request, Response } from "express";
import { CreateTemplateDto } from "../domain/dtos";
import { TemplateRepository } from "../domain/template-repository";

export class TemplateController {
  constructor(private readonly templateRepository: TemplateRepository) {}

  public create = (req: Request, res: Response) => {
    const [error, data] = CreateTemplateDto.create(req.body);
    if (error) throw res.status(400).json({ error });

    this.templateRepository
      .create(data!)
      .then((template) => {
        res.status(201).json(template);
      })
      .catch((error) => res.status(201).json(error));
  };

  public findById = (req: Request, res: Response) => {
    const id = req.params.id;

    this.templateRepository
      .findById(id)
      .then((template) => {
        res.status(201).json(template);
      })
      .catch((error) => res.status(201).json(error));
  };

  public delete = (req: Request, res: Response) => {
    const id = req.params.id;

    this.templateRepository
      .delete(id)
      .then((template) => {
        res.status(201).json(template);
      })
      .catch((error) => res.status(201).json(error));
  };

  public update = (req: Request, res: Response) => {
    const id = req.params.id;
    const [error, data] = CreateTemplateDto.create(req.body);
    if (error) throw res.status(400).json({ error });

    // this.templateRepository
    //   .update({ ...data!, id })
    //   .then((template) => {
    //     res.status(201).json(template);
    //   })
    //   .catch((error) => res.status(201).json(error));
  };
}
