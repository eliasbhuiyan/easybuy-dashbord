import { Input } from "antd";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
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
import HtmltoText from "../HtmltoText";
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
        <div className="w-full">
          <label className="basic w-full">Catagory Name</label>
          <div className="flex items-start gap-2 mt-3">
            <MdOutlineSubdirectoryArrowRight />
            <Input
              value={catagoryData?.name}
              readOnly
              placeholder="Catagory Name"
              className="border-none w-full py-3"
            />
          </div>
        </div>
        <p className="basic pt-8 w-full">Catagory Description</p>
        <div className="w-full flex items-start gap-2">
          <MdOutlineSubdirectoryArrowRight />
          <div className="bg-white py-3 w-full">
            <HtmltoText htmlContent={catagoryData?.description} />
          </div>
        </div>
      </div>
      {/* ====== */}
      <div className="productBox w-4/5 mt-6 flex flex-col items-center gap-6 border border-slate-200">
        <h2 className="title">sub Catagories</h2>
        <Accordion className="w-full">
          {catagoryData?.subCatagory.map((item, i) => (
            <AccordionItem key={item._id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className="ml-2 inline-block">
                    <span className="text-white text-sm py-1 px-3 bg-brand w-fit rounded-lg mr-3">
                      No.{i + 1}
                    </span>
                    <span className="basic text-lg">{item.name}</span>
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <HtmltoText htmlContent={item?.description} />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CatagoryDetails;
