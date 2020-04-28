import DaftarBarang from "./DaftarBarang";
import Transaksi from "./Transaksi";

export default [
  { path: "/kasir", component: Transaksi },
  { path: "/kasir/daftar-barang", component: DaftarBarang },
];
