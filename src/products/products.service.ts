import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';
import { Model } from 'mongoose';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productRepository: Model<Product>
    ){

    }

    /**
     * Funtion to create product
     * 
     * @param createProductDto 
     */
    async createProduct(createProductDto: ProductModel) : Promise<Product> {
        console.log(JSON.stringify(createProductDto));
        const createProduct = new this.productRepository(createProductDto);
        return createProduct.save();
    }

    /**
     * find all products
     */
    async findAll(): Promise<Product[]> {
        return this.productRepository.find().exec();
    }

    /**
     * find product by id
     * 
     * @param id
     */
    async findById(id: string): Promise<Product> {
        return this.productRepository.findById(id);
    }


}
