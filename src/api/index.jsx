import axios from "axios";

const AllMerchant = (auth) => {
  try {
    const res = axios.get(`${import.meta.env.VITE_API_URL}auth/allmerchant`, {
      headers: {
        Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
const UserList = (auth) => {
  try {
    const res = axios.get(`${import.meta.env.VITE_API_URL}auth/userlist`, {
      headers: {
        Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
const FindUser = (auth, id) => {
  try {
    const res = axios.post(
      `${import.meta.env.VITE_API_URL}auth/finduser`,
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const CatagoryData = () => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}catagory/getallcatagory`,
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const CatagorybyId = (auth, id) => {
  try {
    const res = axios.post(
      `${import.meta.env.VITE_API_URL}catagory/getcatagorybyid`,
      { id },
      {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const SubCatagoryData = (auth) => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}catagory/getallsubcatagory`,
      {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const ProductData = () => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}product/getallproduct`,
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const FindOneProduct = (id) => {
  try {
    const res = axios.post(
      `${import.meta.env.VITE_API_URL}product/findoneproduct`,
      {
        id: id,
      },
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const InvoiceData = (auth) => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}product/invoicelist`,
      {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const OrderListData = (auth) => {
  try {
    const res = axios.get(`${import.meta.env.VITE_API_URL}product/orderlist`, {
      headers: {
        Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export {
  AllMerchant,
  UserList,
  CatagoryData,
  SubCatagoryData,
  ProductData,
  CatagorybyId,
  FindOneProduct,
  FindUser,
  InvoiceData,
  OrderListData,
};
