import express from 'express';
import { createUser, deleteUser, getAllusers, updateUser } from '../controllers/user';

const useRouter = express.Router();


useRouter.get('/',getAllusers)
useRouter.post('/',createUser)
useRouter.post('/:id',updateUser)
useRouter.delete('/:id',deleteUser)

export default useRouter;
