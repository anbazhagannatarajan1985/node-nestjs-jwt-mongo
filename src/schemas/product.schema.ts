import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product extends Document {
    
    @Prop({required:true, type: String, unique: true})
    id: string;

    @Prop()
    name: string;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);