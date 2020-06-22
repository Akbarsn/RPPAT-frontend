/* eslint-disable default-case */
import React, { useEffect, useState } from 'react'
import { Layout } from "antd";

import Navbar from "../../components/Navbar";
import Konten from "../../components/AdminHomepage";
import API from "../API";

export default function Homepage() {
    const [count, setCount] = useState({})
    const [type, setType] = useState({})
    const [cash, setCash] = useState({ buy: 0, sell: 0, difference: 0 })
    const [chartData, setChartData] = useState([])
    const token = localStorage.getItem("token");


    useEffect(() => {
        const fetchData = async () => {
            const result = await API.get('/admin', {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            })

            console.log("result")
            console.log(result)

            let temp = {};
            result.data.data.users.forEach(user => {
                switch (user.role) {
                    case 0:
                        temp.farmer = user.userCount
                        break;
                    case 1:
                        temp.package = user.userCount
                        break;
                    case 2:
                        temp.material = user.userCount
                        break;
                    case 3:
                        temp.product = user.userCount
                        break;
                    case 4:
                        temp.outlet = user.userCount
                        break;
                }
            });

            setCount(temp)

            setType({
                apple: result.data.data.appleCount,
                product: result.data.data.productCount,
                material: result.data.data.materialCount
            })

            setCash({
                buy: result.data.data.totalBuy,
                sell: result.data.data.totalSell,
                difference: result.data.data.difference
            })

            let chart = []
            for (var key in temp) {
                if (temp.hasOwnProperty(key)) {
                    var inside = {};
                    switch (key) {
                        case "farmer":
                            inside = {
                                name: "Petani Apel",
                                Jumlah: temp[key]
                            }
                            chart.push(inside)
                            break;
                        case "material":
                            inside = {
                                name: "Pemasok Bahan Tambahan",
                                Jumlah: temp[key]
                            }
                            chart.push(inside)
                            break;
                        case "package":
                            inside = {
                                name: "Pemasok Kemasan",
                                Jumlah: temp[key]
                            }
                            chart.push(inside)
                            break;
                        case "product":
                            inside = {
                                name: "UMKM Pengolah Apel",
                                Jumlah: temp[key]
                            }
                            chart.push(inside)
                            break;
                        case "outlet":
                            inside = {
                                name: "Outlet Produk Apel",
                                Jumlah: temp[key]
                            }
                            chart.push(inside)
                            break;
                    }
                }
            }

            setChartData(chart)
        }

        fetchData()
    }, [])

    // const count = {
    //     farmer: 5,
    //     material: 2,
    //     package: 2,
    //     product: 3,
    //     outlet: 1
    // }

    // const type = {
    //     apple: 11,
    //     product: 5,
    //     material: 3
    // }

    // const cash = {
    //     buy: 10000,
    //     sell: 20000,
    //     difference: 10000
    // }




    return (
        <Layout style={{ backgroundColor: "#ffffff" }}>
            <Navbar />
            <Layout.Content
                style={{ minHeight: "100vh", backgroundColor: "white", marginTop: 80 }}
            >
                <Konten count={count} type={type} cash={cash} data={chartData} />
            </Layout.Content>
        </Layout>
    )
}
