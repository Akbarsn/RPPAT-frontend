import Home from "./Home";
import LaporanStokKemasan from "./LaporanStokKemasan";
import LaporanPenjualan from "./LaporanPenjualan";
import LihatStok from "./LihatStok";
import RiwayatTransaksi from "./RiwayatTransaksi";

export default [
  { path: "/pemasok-kemasan", component: Home },
  { path: "/pemasok-kemasan/laporan/stok-kemasan", component: LaporanStokKemasan },
  { path: "/pemasok-kemasan/laporan/penjualan", component: LaporanPenjualan },
  { path: "/pemasok-kemasan/lihat-stok", component: LihatStok },
  { path: "/pemasok-kemasan/riwayat-transaksi", component: RiwayatTransaksi },
];
