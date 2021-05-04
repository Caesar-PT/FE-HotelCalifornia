
export interface UserToken {
  accessToken: Boolean;
  id: number;
  username: string;
  password: string;
  token?: string;
  enabled?: boolean;
  user: any;
}
