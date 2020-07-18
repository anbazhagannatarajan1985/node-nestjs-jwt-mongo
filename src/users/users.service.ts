import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userRepository: Model<User>
    ) {
       
    }

    /**
     * create user
     * 
     * @param userModel 
     */
    async createUser(userModel: UserModel) : Promise<User> {
        
        const createUser = new this.userRepository(userModel);
        return createUser.save();
    }

    /**
     * get all users
     */
    async findAll(): Promise<User[]> {
        return this.userRepository.find().exec();
    }

    /**
     * get user by id
     * 
     * @param id 
     */
    async getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findById(id);
    }

    /**
     * find user detail by username
     * @param username 
     */
    async findByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.where('email').in([username]).exec();
    }


}
