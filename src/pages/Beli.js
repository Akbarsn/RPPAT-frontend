import React, { useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import BeliBahan from '../components/Beli/Beli';

export default function Beli() {

  const data = [
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    },
    {
      nama: "Toko Budi",
      stok: [
        {
          barang: "Kripik Apel",
          jumlah: 100
        },
        {
          barang: "Dodol",
          jumlah: 200
        },
        {
          barang: "Sari Buah",
          jumlah: 75
        }
      ]
    }
  ];
  
  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={4} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
        <BeliBahan nama="Produk" search="Cari produk disini" data={data} />
          
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
