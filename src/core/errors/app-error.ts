export class AppError extends Error {
  public readonly code: string;
  public readonly userMessageKey: string;

  constructor(message: string, code = 'APP_ERROR', userMessageKey = 'errors.unexpected') {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.userMessageKey = userMessageKey;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ValidationError extends AppError {
  public readonly field?: string;

  constructor(message: string, field?: string, userMessageKey = 'errors.validation') {
    super(message, 'VALIDATION_ERROR', userMessageKey);
    this.name = 'ValidationError';
    this.field = field;
  }
}

export class StorageError extends AppError {
  constructor(message: string, userMessageKey = 'errors.storage') {
    super(message, 'STORAGE_ERROR', userMessageKey);
    this.name = 'StorageError';
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, userMessageKey = 'errors.notFound') {
    super(message, 'NOT_FOUND_ERROR', userMessageKey);
    this.name = 'NotFoundError';
  }
}
