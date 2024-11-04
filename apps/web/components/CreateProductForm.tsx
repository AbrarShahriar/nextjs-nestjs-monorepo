import createProductAction from "../app/actions/createProduct.action";

export default async function CreateProduct() {
  return (
    <div>
      <form
        action={createProductAction}
        className="flex flex-col gap-4 p-4 bg-slate-200"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>
        <button className="px-4 py-2 text-white bg-zinc-800" type="submit">
          Create Product
        </button>
      </form>
    </div>
  );
}
