import React from "react";
import { BrowserRouter as Brow, Route, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Homepage from "./pages/Home";
import Laporan from "./pages/Laporan";
import LihatStok from "./pages/LihatStok";
import RiwayatTransaksi from "./pages/RiwayatTransaksi";
import Beli from "./pages/Beli";
// import DetailPembayaran from "./pages/DetailPembayaran";
// import DetailToko from "./pages/DetailToko";
import DaftarBarang from "./pages/kasir/DaftarBarang";
import Transaksi from "./pages/kasir/Transaksi";
import TambahKasir from "./pages/TambahKasir";
import GantiProfile from "./pages/GantiProfile";

import OutletRouter from "./pages/outlet";
import PetaniRouter from "./pages/petani";
import UMKMRouter from "./pages/umkm";
import KemasanRouter from "./pages/kemasan";
import BahanTambahanRouter from "./pages/bahanTambahan";
import KasirRouter from "./pages/kasir";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Notifikasi from "./pages/Notifikasi";
import UMKMDetailToko from "./pages/umkm/DetailToko";
import UMKMDetailPembayaran from "./pages/umkm/DetailPembayaran";
import OutletDetailToko from "./pages/outlet/DetailToko";
import OutletDetailPembayaran from "./pages/outlet/DetailPembayaran";

export default function Router() {
  return (
    <Brow>
      <Switch>
        {/* Production Path */}
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <ProtectedRoute exact path="/ganti-profile" component={GantiProfile} role={6}/>

        <ProtectedRoute exact path="/notifikasi" component = {Notifikasi} role={6}/>

        <ProtectedRoute
          path="/umkm/detail-toko/:store/:id"
          component={UMKMDetailToko}
          role={3}
        />

        <ProtectedRoute
          exact path="/umkm/detail-pembayaran/:store/:id" component={UMKMDetailPembayaran} role={3}/>

        <ProtectedRoute path="/outlet/detail-toko/:id" component={OutletDetailToko} role={4}/>

        <ProtectedRoute
          path="/outlet/detail-pembayaran/:id"
          component={OutletDetailPembayaran}
          role={4}
        />

        {PetaniRouter.map((props) => (
          <ProtectedRoute exact {...props} role={0}></ProtectedRoute>
        ))}

        {KemasanRouter.map((props) => (
          <ProtectedRoute exact {...props} role={1}></ProtectedRoute>
        ))}

        {BahanTambahanRouter.map((props) => (
          <ProtectedRoute exact {...props} role={2}></ProtectedRoute>
        ))}

        {UMKMRouter.map((props) => (
          <ProtectedRoute exact {...props} role={3}></ProtectedRoute>
        ))}

        {OutletRouter.map((props) => (
          <ProtectedRoute exact {...props} role={4}></ProtectedRoute>
        ))}

        {KasirRouter.map((props) => (
          <ProtectedRoute exact {...props} role={5}></ProtectedRoute>
        ))}

        {/* Development Route */}

        <Route exact path="/beli-bahan">
          {" "}
          <Beli />{" "}
        </Route>

        <Route exact path="/daftar-barang">
          <DaftarBarang />
        </Route>

        {/* <Route exact path="/detail-toko/:id">
          <DetailToko />
        </Route> */}

        <Route exact path="/homepage">
          <Homepage />
        </Route>

        <Route exact path="/laporan">
          <Laporan />
        </Route>

        <Route exact path="/lihatstok">
          <LihatStok />
        </Route>

        <Route
          exact
          path="/transaksi"
          render={(props) => <Transaksi {...props} />}
        />

        <Route exact path="/riwayat">
          {" "}
          <RiwayatTransaksi />
        </Route>

        {/* <Route exact path="/detail-pembayaran">
          <DetailPembayaran />
        </Route> */}

        <Route exact path="/tambah-kasir">
          <TambahKasir />
        </Route>

        <Route path="*">
          <NotFound />{" "}
        </Route>
      </Switch>
    </Brow>
  );
}
