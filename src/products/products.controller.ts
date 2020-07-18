import { Controller, Get, Put, Post, Param, UseGuards, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProductModel } from '../models/product.model';


@ApiTags('products')
@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {

    constructor(private productService: ProductsService) {

    }

    
    @Get()
    getProducts() {
        return this.productService.findAll();
    }

    @Post()
    createProduct(@Body() product: ProductModel) {
        console.log(JSON.stringify(product));
        this.productService.createProduct(product);
    }

    @Put()
    updateProduct(@Body() product: ProductModel) {

    }

    @Get(':id') 
    getProduct(@Param() params) {
        return this.productService.findById(params.id);
    }
}
