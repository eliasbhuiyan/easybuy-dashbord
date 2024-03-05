import { GiCrossMark } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Merchant = () => {
  return (
    <section className="p-6 w-full productlist">
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r w-1/4 text-white">Name</th>
            <th className="border-r w-1/4 text-white">Email</th>
            <th className="border-r w-1/4 text-white">Avatar</th>
            <th className="border-r w-1/4 text-white">Approved/Reject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elias</td>
            <td>elias@gmail</td>
            <td>
              <img className="w-16 h-16 m-auto border" src={""} alt={""} />
            </td>
            <td className="flex items-center justify-evenly">
              <button className="approved_btn">
                <IoCheckmarkDoneSharp className="edit_icon" />
              </button>
              <button className="reject_btn">
                <GiCrossMark className="blt_icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Merchant;
