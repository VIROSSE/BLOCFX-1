import { Request } from 'express';

interface user {
  user: {
    id: string;
    email: string;
    role: string;
    name: string;
  };
}
export type RequestWithUser = Request & user;
