import { IProduct } from "@repo/types";

export default async function ProductList() {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] },
  });

  const products: IProduct[] = await res.json();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="m-4 text-2xl font-bold">Products</h1>
      <ul>
        {products.map((el) => (
          <li key={el.id}>
            {el.name} - {el.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
