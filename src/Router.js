import React from 'react'
import {
    BrowserRouter as Brow,
    Route,
    Switch
} from 'react-router-dom'
import Homepage from "./pages/Home";
import Laporan from "./pages/Laporan"
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';
import LihatStok from './pages/LihatStok';
import RiwayatTransaksi from './pages/RiwayatTransaksi';
import Beli from './pages/Beli';
import DetailPembayaran from './pages/DetailPembayaran'

export default function Router() {
    return (
        <Brow>
            <Switch>
                <Route exact path='/'>
                    Hello World!!
                </Route>

                <Route exact path="/beli" render={props => <Beli {...props} />} />

                <Route exact path='/homepage'>
                    <Homepage></Homepage>
                </Route>

                <Route exact path='/laporan'>
                    <Laporan />
                </Route>

                <Route exact path="/login" render={props => <Login {...props} />} />

                <Route exact path="/lihatstok" render={props => <LihatStok {...props} />} />

                <Route exact path="/register" render={props => <Register {...props} />} />
                
                <Route exact path="/riwayat" render={props => <RiwayatTransaksi {...props} />} />

                <Route exact path="/detail-pembayaran">
                    <DetailPembayaran></DetailPembayaran>
                </Route>
            </Switch>
        </Brow>
    )
}