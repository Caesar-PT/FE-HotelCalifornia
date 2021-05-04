
export interface UserToken {
  accessToken: boolean;
  id: number;
  username: string;
  password: string;
  token?: string;
  enabled?: boolean;
  user: any;
}
