import { Result, Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();

  function Back(){
    history.push("/")
  }


  return (
    <div>
      <Result
        status="404"
        title="Tidak Ada Apa-Apa Disini"
        subTitle="Mohon Maaf, Halaman yang Anda Cari Tidak Ditemukan."
        extra={<Button type="primary" onClick={Back}>Kembali ke Halaman Utama</Button>}
      />
    </div>
  );
}
