import Home from "./Home";
import LaporanStokPanen from "./LaporanStokPanen";
import LaporanPenjualan from "./LaporanPenjualan";
import LihatStok from "./LihatStok";
import RiwayatTransaksi from "./RiwayatTransaksi";

export default [
  { path: "/petani", component: Home },
  { path: "/petani/laporan/stok-panen", component: LaporanStokPanen },
  { path: "/petani/laporan/penjualan", component: LaporanPenjualan },
  { path: "/petani/lihat-stok", component: LihatStok },
  { path: "/petani/riwayat-transaksi", component: RiwayatTransaksi },
];
