import React, { useEffect, useState } from "react";
import API from "./API";
export default function Test() {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/test");
      console.log(result);

      setData(result.data.data);
    };

    fetchData();
  }, []);

  return <div>{Data}</div>;
}
