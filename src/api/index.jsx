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
const CatagoryData = (auth) => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}catagory/getallcatagory`,
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
const ProductData = (auth) => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}product/getallproduct`,
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

export { AllMerchant, UserList, CatagoryData, SubCatagoryData, ProductData };
