import { Request, Response } from 'express';
import User  from '../models/user';
import { IUser } from '../interfaces/user';



export const getAllusers = async (req:Request,res:Response):Promise<void> =>{
   
  try{
   const users:IUser[] = await User.find();
   res.status(200).json({users})
  }catch(ex){
    res.status(500).json({ex})
  }

}


export const createUser = async(req:Request,res:Response):Promise<void> => {
    try{
     const {email,password} = req.body
     const newUser:IUser = new User({email,password})
     const rs = await newUser.save()
     res.status(201).json({rs})
    }catch(ex){
        res.status(500).json({ex})
    }
}

export const updateUser = async(req:Request,res:Response):Promise<void> => {
    try{
        const {id} = req.params;
        const {email,password} = req.body;
        const updateUser:IUser | null = await User.findByIdAndUpdate(id,{email,password})
        if (updateUser) {
            res.status(200).json(updateUser);
          } else {
            res.status(404).json({ error: 'User not found' });
          }
        
    }catch(ex){
        res.status(500).json({ex})
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
   try{
    const userId: string = req.params.id;
    const deleteUser :IUser | null = await User.findByIdAndDelete(userId);
    if (deleteUser) {
        res.status(200).json(deleteUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }

   }catch(ex){
    console.log(ex)
   }
}