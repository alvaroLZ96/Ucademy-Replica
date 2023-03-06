import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getData = async (endpoint) => {
  try {
    const res = await fetch(`http://localhost:8080/${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (endpoint, item) => {
  item = { ...item, id: uuidv4() };
  axios({
    method: "post",
    url: `http://localhost:8080/${endpoint}`,
    data: item,
  });
};

export const putData = async (endpoint, item) => {
  axios({
    method: "put",
    url: `http://localhost:8080/${endpoint}/${item.id}`,
    data: item,
  });
};
