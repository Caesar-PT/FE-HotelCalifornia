
export interface UserToken {
  id: number;
  username: string;
  password: string;
  token?: string;
  enabled?: boolean;
  user: any;
}
