import CreateProduct from "../CreateProduct";
import CreateVarient from "../CreateVarient";
const Product = () => {
  return (
    <>
      <section className="flex flex-col gap-6 w-full">
        <CreateProduct />
        <CreateVarient />
      </section>
    </>
  );
};

export default Product;
