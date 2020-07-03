import React from "react";
import { BrowserRouter as Brow, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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
import KasirLogin from "./pages/kasir/Login";
import AdminHomepage from "./pages/admin/Homepage";
import Test from "./pages/Test";

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

        <ProtectedRoute
          exact
          path="/ganti-profile"
          component={GantiProfile}
          role={5}
        />

        <ProtectedRoute
          exact
          path="/notifikasi"
          component={Notifikasi}
          role={5}
        />

        <ProtectedRoute
          path="/umkm/detail-toko/:store/:id"
          component={UMKMDetailToko}
          role={3}
        />

        <ProtectedRoute
          exact
          path="/umkm/detail-pembayaran/:store/:id"
          component={UMKMDetailPembayaran}
          role={3}
        />

        <ProtectedRoute
          path="/outlet/detail-toko/:id"
          component={OutletDetailToko}
          role={4}
        />

        <ProtectedRoute
          path="/outlet/detail-pembayaran/:id"
          component={OutletDetailPembayaran}
          role={4}
        />

        <Route
          path="/admin"
          component={AdminHomepage}
        />


        <Route exact path="/kasir/login">
          <KasirLogin></KasirLogin>
        </Route>

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

        <Route exact path="/test">
          <Test />
        </Route>

        <Route path="*">
          <NotFound />{" "}
        </Route>
        
      </Switch>
    </Brow>
  );
}
