import AboutNav from "../AboutNav";

const About = () => {
  return (
    <>
      <AboutNav />
      <section className="py-10">
        <div className="container">
          <h1 className="title text-2xl lg:text-3xl">
            &quot;Welcome to <span className="text-brand">EasyBuy</span>{" "}
            Interactive E-commerce Dashbord!&quot;
          </h1>
          <p className="basic text-lg text-center">
            Learn about our platform designed for practicing e-commerce setups.{" "}
            <span className="block">
              Purpose: Understand that this website is for demonstration and
              practice purposes.
            </span>
          </p>
          <div className="pt-16">
            <ul className="basic text-xl">
              <li className="flex mb-2">
                <p>Getting Started</p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Explore as a Guest: </span>
                  <span className="font-normal">
                    No need to sign up – begin browsing as a guest user.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Become a Merchant:</span>{" "}
                  <span className="font-normal">
                    Experience managing a shop as a Merchant.
                  </span>
                </p>
              </li>
            </ul>
            <ul className="my-10 basic text-xl">
              <li className="flex mb-2">
                <p>Dashboard Overview</p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Dashboard Introduction:</span>
                  <span className="font-normal">
                    Understand the main features and navigation options.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Chart Insights:</span>
                  <span className="font-normal">
                    View graphical representations of sales trends and inventory
                    status.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Order Management:</span>
                  <span className="font-normal">
                    Experience handling customer orders and delivery status.
                  </span>
                </p>
              </li>
            </ul>
            <ul className="my-10 basic text-xl">
              <li className="flex mb-2">
                <p>Customer Interaction</p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Live Chat Support:</span>
                  <span className="font-normal">
                    Engage in real-time communication with customers for
                    support.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Customer Management:</span>
                  <span className="font-normal">
                    Access and edit customer information for personalized
                    service.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Order Management:</span>
                  <span className="font-normal">
                    Experience handling customer orders and delivery status.
                  </span>
                </p>
              </li>
            </ul>
            <ul className="my-10 basic text-xl">
              <li className="flex mb-2">
                <p>Administrative Tasks</p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Admin Access:</span>
                  <span className="font-normal">
                    Explore administrative functionalities.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Approval Workflow:</span>
                  <span className="font-normal">
                    Understand how product approvals work for administrators.
                  </span>
                </p>
              </li>
              <li className="flex gap-2">
                <p>
                  <span>Profile Editing:</span>{" "}
                  <span className="font-normal">
                    Manage user profiles and permissions.
                  </span>
                </p>
              </li>
              <li>
                <p className="flex gap-2">
                  <span>Invoice:</span>
                  <span className="font-normal">
                   Create Invoice manually, View and print customer invoices.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
