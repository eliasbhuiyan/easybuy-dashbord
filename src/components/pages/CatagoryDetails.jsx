import { Input } from "antd";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CatagorybyId } from "../../api";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const CatagoryDetails = () => {
  let [searchParams] = useSearchParams();
  const user = useSelector((state) => state.user_sec.user);
  const [catagoryData, setCatagoryData] = useState([]);
  const [looding, setLooding] = useState(true);
  useEffect(() => {
    const data = async () => {
      await CatagorybyId(user?.auth, searchParams.get("pid"))
        .then((res) => {
          setCatagoryData(res.data.catagory);
          setLooding(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, []);
   console.log(catagoryData.subCatagory);
  if (looding) {
    return <Loading />;
  }
  return (
    <section className="w-full mt-28 md:mt-0 md:p-10 flex flex-col items-center">
      <div className="productBox w-4/5 flex flex-col items-center gap-6 border border-slate-200">
        <ToastContainer />
        <h2 className="title">catagory Details</h2>
        <label className="primary w-full">
          Catagory Name *
          <Input
            value={catagoryData?.name}
            readOnly
            placeholder="Catagory Name"
            className="input w-full"
          />
        </label>
        <label className="primary pt-8 inline-block w-full">
          Catagory Description *
          <textarea
            readOnly
            className="input w-full"
            value={catagoryData?.description}
          />
        </label>
      </div>
      {/* ====== */}
      <div className="productBox w-4/5 mt-6 flex flex-col items-center gap-6 border border-slate-200">
        <h2 className="title">sub Catagories</h2>
        <Accordion className="w-full">
          {catagoryData?.subCatagory.map((item, i) => (
            <AccordionItem key={item._id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className="ml-10 inline-block">
                    <span className="basic text-white py-1 px-3 bg-brand w-fit rounded-lg mr-3">
                      Item No.{i + 1}
                    </span>
                    <span className="title text-lg">{item.name}</span>
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="w-full">{item.description}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CatagoryDetails;
