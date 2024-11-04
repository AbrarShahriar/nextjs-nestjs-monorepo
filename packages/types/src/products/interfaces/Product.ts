import { CreateProductBody } from "../dto/CreateProductBody.dto";
export interface IProduct extends CreateProductBody {
  id: string;
}
