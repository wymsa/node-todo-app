export class HttpException extends Error {
  constructor(public readonly statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}
