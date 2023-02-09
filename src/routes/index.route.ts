import { Router } from 'express';
import { Routes } from '@/modules/user/interfaces/routes.interface';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
}

export default IndexRoute;
