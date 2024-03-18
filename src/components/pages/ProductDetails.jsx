import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const ProductDetails = () => {
  return (
    <div className="w-full p-6">
      <div className="border-b pb-4 mb-6 flex justify-around">
        <h2 className="title">Product Details</h2>
        <label className="basic">
          Search By ID:
          <select className="border">
            <option value="" disabled hidden>
              Product ID
            </option>
            <option value="">#2433</option>
            <option value="">#2433</option>
            <option value="">#2433</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6">
        <div className="w-1/2">
          <div className="flex gap-1">
            <div className="border">
              <img src="/Image.png" alt="img" />
            </div>
            <div className="border">
              <img src="/Image.png" alt="img" />
            </div>
            <div className="border">
              <img src="/Image.png" alt="img" />
            </div>
          </div>
          <div className="w-56 flex gap-1 m-auto mt-2">
            <div className="border">
              <img src="/Image.png" alt="img" />
            </div>
            <div className="border">
              <img src="/Image.png" alt="img" />
            </div>
            <div className="border">
              <img src="/Image.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <h3 className="title text-start capitalize">
              iphone 15 Pro Max 256GB/512GB/1TB
            </h3>
            <div className="flex items-center gap-2 my-2">
              <ul className="flex gap-1 text-orange-400">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <p>8 Reviews</p>
            </div>
            <div className="border-b">
              <h3 className="title text-start text-brand">$44.00</h3>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Color:
              </p>
              <ul className="flex gap-1 items-center mt-2">
                <li>
                  <span className="w-4 h-4 rounded-full bg-[red] inline-block"></span>
                </li>
                <li>
                  <span className="w-4 h-4 rounded-full bg-[green] inline-block"></span>
                </li>
                <li>
                  <span className="w-4 h-4 rounded-full bg-[black] inline-block"></span>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center my-4">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Size:
              </p>
              <ul className="flex gap-1 items-center">
                <li>
                  <span className="py-1 px-2 rounded-sm border inline-block">
                    XL
                  </span>
                </li>
                <li>
                  <span className="py-1 px-2 rounded-sm border border-brand inline-block">
                    LG
                  </span>
                </li>
                <li>
                  <span className="py-1 px-2 rounded-sm border inline-block">
                    MD
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Quantity:
              </p>
              <div className="flex justify-start w-28 border">
                <button className="w-1/3 font-bold py-2 border-r">-</button>
                <input
                  className="w-1/3 font-bold py-2 outline-none text-center"
                  value={1}
                  readOnly
                />
                <button className="w-1/3 font-bold py-2 border-l">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="title text-start mb-2">Product Details:</p>
        <p className="basic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat, ducimus.
        </p>
      </div>
      <div className="my-4">
        <p className="title text-start mb-2 mt-8">Customer Review (5) :</p>
        <div className="border-b pb-3 my-3">
          <div className="flex gap-2 items-center pb-2">
            <p className="basic">User Name</p>
            <ul className="flex gap-1 text-orange-400">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
          </div>
          <p className=" font-sans text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
            fugiat eos voluptates itaque nemo.
          </p>
        </div>
        <div className="border-b pb-3 my-3">
          <div className="flex gap-2 items-center pb-2">
            <p className="basic">User Name</p>
            <ul className="flex gap-1 text-orange-400">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaRegStar />
              </li>
            </ul>
          </div>
          <p className=" font-sans text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
            fugiat eos voluptates itaque nemo.
          </p>
        </div>
        <div className="w-1/4">
          <p className="title mt-8 mb-3 text-start">Add Review</p>
          <label className="basic">
            Name
            <input
              type="text"
              placeholder="Your name.."
              className="inputField ml-0"
            />
          </label>
          <label className="basic">
            Email
            <input
              type="email"
              placeholder="Your email.."
              className="inputField ml-0"
            />
          </label>
          <label className="basic">
            Review
            <textarea
              type="email"
              placeholder="Your opinion"
              className="inputField ml-0"
            />
          </label>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
