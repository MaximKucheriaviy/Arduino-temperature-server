export interface ResponseData {
  message: string;
  data: Object | undefined;
}

export const createResponseData = (
  message: string,
  data: Object | undefined = undefined
): ResponseData => {
  const result: ResponseData = {
    message,
    data,
  };
  return result;
};
