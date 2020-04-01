import React, { useState } from "react";
import "./index.scss";
import { List, Button, Modal, Pagination } from "antd";

export default function Notif(props) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);

  function handleChange(page, pageSize) {
    if (page <= 1) {
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(maxValue);
      setMaxValue(page * 9);
    }
  }

  function DataModal(title, content) {
    Modal.info({
      title: (
        <div>
        {title}
        </div>),
      content: (
        <div>
          {content}
        </div>
      )
    })}

  return (
    <div className="notif">
      <p className="titlepage" style={{ margin: "1% 2% 1% 2%" }}>
        Notifikasi
      </p>
      <div className="listnotif">
      <List>
        {props.data.slice(minValue, maxValue).map(item => {
          
          return (
            
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<p className="titlenotif">{item.content}</p>}
                  description={item.date}
                />
                <div>
                  <Button onClick={() => DataModal(item.content, item.detail)}>Lihat Detail</Button>
                </div>
              </List.Item>
            
          );
        })}
        </List>
      </div>
      <div className="custompagination">
        <Pagination
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} dari ${total} toko`
          }
          onChange={handleChange}
          total={props.data.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
