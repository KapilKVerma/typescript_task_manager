import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductInput } from "../model/product.model";

export async function createProduct(input: ProductInput) {
  return ProductModel.create(input);
}

export async function findProduct(query: FilterQuery<ProductInput>) {
  return ProductModel.findOne(query).lean();
}

export async function findProducts() {
  return ProductModel.find().lean();
}

export async function findAndUpdateProduct(
  query: FilterQuery<ProductInput>,
  update: UpdateQuery<ProductInput>,
  options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductInput>) {
  return ProductModel.deleteOne(query);
}
