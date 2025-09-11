import { ErrorType } from '@enums/error.enum';

export type ErrorDetails = { errorType: ErrorType; errorMessage: string };

export const NotFoundError = (errorMessage: string): ErrorDetails => ({
    errorType: ErrorType.NOT_FOUND,
    errorMessage,
});

export const RequestError = (errorMessage: string): ErrorDetails => ({
    errorType: ErrorType.REQUEST,
    errorMessage,
});
