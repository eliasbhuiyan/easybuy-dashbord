import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Error = () => {
  function goBack() {
    window.history.back();
  }
  return (
    <section className="bg-[url(../../public/404page.png)] bg-no-repeat bg-contain bg-center h-screen">
      <div className="container">
        <Link
          to="/"
          className="text-3xl font-bold text-slate-800 text-center absolute top-[10%] left-1/2 -translate-x-1/2"
        >
          EasyBuy.com
        </Link>
        <button
          onClick={goBack}
          className="flex items-center transition-all gap-4 hover:gap-5 text-xl font-bold text-white bg-slate-900 rounded-xl border py-4 px-6 absolute bottom-[10%] left-1/2 -translate-x-1/2"
        >
          <ArrowLeftOutlined />
          <span>Go Back</span>
        </button>
      </div>
    </section>
  );
};

export default Error;
