export interface IToken {
  token: string
}

export type Token = {
  authorization: string,
};

export type JwtUser = {
  username: string,
};

export type DecodedToken = {
  id?: number,
  type?: string,
  message?: string,
};