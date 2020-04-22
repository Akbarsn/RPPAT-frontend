import Home from "./Home";
import LaporanPembelian from "./LaporanPembelian";
import LaporanPenjualan from "./LaporanPenjualan";
import LihatStok from "./LihatStok";
import RiwayatTransaksi from "./RiwayatTransaksi";
import TambahKasir from "./TambahKasir";
import Beli from "./Beli";
import DetailPembayaran from './DetailPembayaran';
import DetailToko from './DetailToko';

export default [
  { path: "/outlet", component: Home },
  { path: "/outlet/laporan/pembelian", component: LaporanPembelian },
  { path: "/outlet/laporan/penjualan", component: LaporanPenjualan },
  { path: "/outlet/lihat-stok", component: LihatStok },
  { path: "/outlet/riwayat-transaksi", component: RiwayatTransaksi },
  { path: "/outlet/tambah-kasir", component: TambahKasir },
  { path: "/outlet/beli-stok", component: Beli },
  { path: "/outlet/detail-pembayaran", component: DetailPembayaran },
  { path: "/outlet/detail-toko/:id", component: DetailToko },
];
