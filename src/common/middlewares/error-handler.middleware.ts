import type { NextFunction, Request, Response } from 'express';
import { HttpException } from '../errors/http-exception.error';

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if (error instanceof HttpException) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    res.status(400).json({ err: error.message });
  }
  console.log(`Error Handling: ${error.message}`);
}
