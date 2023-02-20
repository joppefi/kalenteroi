import * as jsonUrl from "json-url";

export const encode = (data: any) => {
  const codec = jsonUrl("lzw");

  return codec.compress(data);
};

export const decode = (data: any) => {
  const codec = jsonUrl("lzw");

  return codec.decompress(data);
};
