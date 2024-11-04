import CreateProduct from "../components/CreateProductForm";
import ProductList from "../components/ProductList";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8">
      <CreateProduct />
      <ProductList />
    </div>
  );
}
