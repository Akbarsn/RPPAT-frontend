import React from "react";
import { BrowserRouter as Brow, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Home";
import Laporan from "./pages/Laporan";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LihatStok from "./pages/LihatStok";
import RiwayatTransaksi from "./pages/RiwayatTransaksi";
import Beli from "./pages/Beli";
import DetailPembayaran from "./pages/DetailPembayaran";
import DetailToko from "./pages/DetailToko";
import DaftarBarang from "./pages/kasir/DaftarBarang";
import Notif from "./pages/Notifikasi";
import Transaksi from "./pages/kasir/Transaksi";
import TambahKasir from "./pages/TambahKasir";
import GantiProfile from "./pages/GantiProfile";

import OutletRouter from "./pages/outlet";
import PetaniRouter from "./pages/petani";
import UMKMRouter from "./pages/umkm";
import KemasanRouter from "./pages/kemasan";
import BahanTambahanRouter from "./pages/bahanTambahan";
import KasirRouter from "./pages/kasir";

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

        <Route exact path="/ganti-profile">
          <GantiProfile />
        </Route>

        {PetaniRouter.map((props) => (
          <Route exact {...props}></Route>
        ))}

        {KemasanRouter.map((props) => (
          <Route exact {...props}></Route>
        ))}

        {BahanTambahanRouter.map((props) => (
          <Route exact {...props}></Route>
        ))}

        {OutletRouter.map((props) => (
          <Route exact {...props}></Route>
        ))}

        {UMKMRouter.map((props) => (
          <Route exact {...props}></Route>
        ))}

        {KasirRouter.map((props) => (
          <Route exact {...props}></Route>
        ))}

        {/* Development Route */}

        <Route
          exact
          path="/beli-bahan"
          render={(props) => <Beli {...props} />}
        />

        <Route
          exact
          path="/daftar-barang"
          render={(props) => <DaftarBarang {...props} />}
        />

        <Route
          exact
          path="/detail-toko"
          render={(props) => <DetailToko {...props} />}
        />

        <Route exact path="/homepage">
          <Homepage />
        </Route>

        <Route exact path="/laporan">
          <Laporan />
        </Route>

        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <Route
          exact
          path="/lihatstok"
          render={(props) => <LihatStok {...props} />}
        />

        <Route
          exact
          path="/notifikasi"
          render={(props) => <Notif {...props} />}
        />

        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />

        <Route
          exact
          path="/transaksi"
          render={(props) => <Transaksi {...props} />}
        />

        <Route
          exact
          path="/riwayat"
          render={(props) => <RiwayatTransaksi {...props} />}
        />

        <Route exact path="/detail-pembayaran">
          <DetailPembayaran />
        </Route>

        <Route exact path="/tambah-kasir">
          <TambahKasir />
        </Route>
      </Switch>
    </Brow>
  );
}
