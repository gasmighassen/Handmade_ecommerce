import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { allProducts } from "../redux/slices/productSlice";
import { useEffect } from "react";

export default function ProductsTable({ elements }) {
  const columns = [
    {
      dataField: "_id",
      text: "Product ID",
      sort: true,
    },
    {
      dataField: "ProdName",
      text: "Product Name",
      sort: true,
    },
    {
      dataField: "Price",
      text: "Product Price",
    },
  ];
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={elements}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
