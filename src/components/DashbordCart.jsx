import CountUp from "react-countup";
const DashbordCart = ({ title, icon, value }) => {
  return (
    <div className="dashbordCart">
      <div className="text-brand text-3xl lg:text-4xl xl:text-6xl">{icon}</div>
      <p className="title mb-2 py-3">{title}</p>
      <CountUp
        duration={2.75}
        decimals={2}
        decimal="."
        className="text-3xl lg:text-4xl font-bold font-mono"
        end={value}
      />
    </div>
  );
};

export default DashbordCart;
