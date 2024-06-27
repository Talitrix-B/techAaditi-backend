import type { Router } from 'express';
import { handleAddCaller } from '@/controllers/caller-controllers';
import { authenticate } from '@/middlewares/auth';
import { createRouter } from '@/utils/create';

export default createRouter((router: Router) => {
  router.post('/', authenticate(), handleAddCaller);
});
