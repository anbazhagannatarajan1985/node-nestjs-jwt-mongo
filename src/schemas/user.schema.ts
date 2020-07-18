import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User extends Document {
    
    @Prop({type: String, required: true})
    email: string;

    @Prop({type: String, required: true})
    password: string;

    @Prop({type: String})
    firstName: string;

    @Prop({type: String})
    lastName: string
    
}

export const UserSchema = SchemaFactory.createForClass(User);
