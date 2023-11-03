export const BASE_URL = "/virtudes";

const url = (rawUrl: string) => {
  return `${BASE_URL}/${rawUrl}`.replaceAll("//", "/");
};

export default url;
