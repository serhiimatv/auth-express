class ApiError extends Error {
  status: number;
  errors: string[];
  constructor(status: number, massage: string, errors = [] as string[]) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, "User unauthorized");
  }

  static BadRequest(massage: string, errors: any[] = []) {
    return new ApiError(400, massage, errors);
  }
}

export default ApiError;
