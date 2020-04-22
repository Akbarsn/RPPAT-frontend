import Home from "./Home";
import LaporanPembelian from "./LaporanPembelian";
import LaporanPenjualan from "./LaporanPenjualan";
import LaporanProduksi from "./LaporanProduksi";
import LihatStokBahan from "./LihatStokBahan";
import LihatStokProduk from "./LihatStokProduk";
import RiwayatTransaksi from "./RiwayatTransaksi";
import BeliBahanBaku from "./BeliBahanBaku";
import BeliBahanTambahan from "./BeliBahanTambahan";
import BeliKemasan from "./BeliKemasan";
import DetailPembayaran from './DetailPembayaran';
import DetailToko from './DetailToko';

export default [
  { path: "/umkm", component: Home },
  { path: "/umkm/laporan/pembelian", component: LaporanPembelian },
  { path: "/umkm/laporan/penjualan", component: LaporanPenjualan },
  { path: "/umkm/laporan/produksi", component: LaporanProduksi },
  { path: "/umkm/lihat-stok/bahan", component: LihatStokBahan },
  { path: "/umkm/lihat-stok/produk", component: LihatStokProduk },
  { path: "/umkm/riwayat-transaksi", component: RiwayatTransaksi },
  { path: "/umkm/beli-stok/bahan-baku", component: BeliBahanBaku },
  { path: "/umkm/beli-stok/bahan-tambahan", component: BeliBahanTambahan },
  { path: "/umkm/beli-stok/kemasan", component: BeliKemasan },
  { path: "/umkm/detail-pembayaran", component: DetailPembayaran },
  { path: "/umkm/detail-toko/:id", component: DetailToko },
];
