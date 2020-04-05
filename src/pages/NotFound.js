import { Result, Button } from "antd";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="Tidak Ada Apa-Apa Disini"
        subTitle="Mohon Maaf, Halaman yang Anda Cari Tidak Ditemukan."
        extra={<Button type="primary">Kembali ke Halaman Utama</Button>}
      />
    </div>
  );
}
