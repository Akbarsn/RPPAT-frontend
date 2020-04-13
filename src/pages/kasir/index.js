import DaftarBarang from "./DaftarBarang";
import Transaksi from "./Transaksi";
import Login from "./Login";

export default [
  { path: "/kasir", component: Transaksi },
  { path: "/kasir/login", component: Login },
  { path: "/kasir/daftar-barang", component: DaftarBarang },
];
