import Home from "./Home";
import LaporanPembelian from "./LaporanPembelian";
import LaporanPenjualan from "./LaporanPenjualan";
import LihatStok from "./LihatStok";
import RiwayatTransaksi from "./RiwayatTransaksi";

export default [
  { path: "/pemasok-bahan-tambahan", component: Home },
  { path: "/pemasok-bahan-tambahan/laporan/pembelian", component: LaporanPembelian },
  { path: "/pemasok-bahan-tambahan/laporan/penjualan", component: LaporanPenjualan },
  { path: "/pemasok-bahan-tambahan/lihat-stok", component: LihatStok },
  { path: "/pemasok-bahan-tambahan/riwayat-transaksi", component: RiwayatTransaksi },
];
