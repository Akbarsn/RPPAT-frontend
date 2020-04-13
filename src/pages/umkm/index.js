import Home from "./Home";
import LaporanPembelian from "./LaporanPembelian";
import LaporanPenjualan from "./LaporanPenjualan";
import LaporanProduksi from "./LaporanProduksi";
import LihatStokBahan from "./LihatStokBahan";
import LihatStokProduk from "./LihatStokProduk";
import RiwayatTransaksi from "./RiwayatTransaksi";
import Beli from "./Beli";

export default [
  { path: "/outlet", component: Home },
  { path: "/outlet/laporan/pembelian", component: LaporanPembelian },
  { path: "/outlet/laporan/penjualan", component: LaporanPenjualan },
  { path: "/outlet/laporan/produksi", component: LaporanProduksi },
  { path: "/outlet/lihat-stok/bahan", component: LihatStokBahan },
  { path: "/outlet/lihat-stok/produk", component: LihatStokProduk },
  { path: "/outlet/riwayat-transaksi", component: RiwayatTransaksi },
  { path: "/outlet/beli-stok", component: Beli },
];
