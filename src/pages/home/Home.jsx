import React from "react";
import "./Home.css";
import $ from "jquery";
import { MDBDataTableV5 } from "mdbreact";

import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Editbill from "../editbill/Editbill";
export const Home = () => {
  const [data, setData] = React.useState([]);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "S.no",
        field: "s_no",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Bill date",
        field: "Bill_date",
        width: 270,
      },
      {
        label: "Paid date",
        field: "Paid_date",
        width: 200,
      },
      {
        label: "Unit consume",
        field: "Unit_consume",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start_date",
        field: "Start_date",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Amount",
        field: "Amount",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Edit",
        field: "edit",
        sort: "disabled",
        width: 50,
      },
      {
        label: "Delete",
        field: "delete",
        sort: "disabled",
        width: 50,
      },
    ],
    rows: [
      // data.map((item, index) => {
      //   return {
      //     s_no: index + 1,
      //     Bill_date: item.billdate,
      //     paiddate: item.Paid_date,
      //     unitconsume: item.Unit_consume,
      //     startdate: item.Start_date,
      //     Amount: item.amount,
      //     edit: (
      //       <button
      //         className="btn btn-primary"
      //         onClick={() => {
      //           edit(item.id);
      //         }}
      //       >
      //         Edit
      //       </button>
      //     ),
      //     delete: (
      //       <button
      //         className="btn btn-danger"
      //         onClick={() => {
      //           deleteData(item.id);
      //         }}
      //       >
      //         Delete
      //       </button>
      //     ),
      //   };
      // }),
      // {
      //   s_no: "1",
      //   Bill_date: "System Architect",
      //   Paid_date: "Edinburgh",
      //   Unit_consume: "61",
      //   Start_date: "2011/04/25",
      //   Amount: "$320",
      //   edit: (
      //     <button className="btn btn-primary">
      //       <i class="fa-regular fa-pen-to-square"></i>
      //     </button>
      //   ),
      //   delete: (
      //     <button className="btn btn-danger">
      //       <i class="fa-solid fa-trash-can"></i>
      //     </button>
      //   ),
      // },
    ],
  });

  const fetchBills = async () => {
    const response = await axios.get("/api/getbills");
    console.log(response.data.bills);

    setData(response.data.bills);
    setDatatable({
      ...datatable,
      rows: response.data.bills.map((item, index) => {
        return {
          s_no: index + 1,
          Bill_date: item.billdate,
          Paid_date: item.paiddate,
          Unit_consume: item.unitconsume,
          Start_date: item.startdate,
          Amount: item.amount,
          edit: (
            <button
              className="btn btn-primary"
              onClick={() => {
                edit(item._id);
              }}
            >
              Edit
            </button>
          ),
          delete: (
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteData(item._id);
              }}
            >
              Delete
            </button>
          ),
        };
      }),
    });
  };

  const deleteData = (id) => {
    console.log(id);
    axios
      .delete(`/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Bill deleted successfully");
        fetchBills();
      })
      .catch((err) => {
        toast.error("Error in deleting bill");
        console.log(err);
      });
  };
  const edit = async (id) => {
    $("#editBill").css("display", "block");
    sessionStorage.setItem("id", id);
    const response = await axios.get(`/api/edit/${id}`);
    console.log(response.data.bill);
    $("#ebilldate").val(response.data.bill.billdate);
    $("#epaiddate").val(response.data.bill.paiddate);
    $("#eunitconsume").val(response.data.bill.unitconsume);
    $("#eamount").val(response.data.bill.amount);
  };
  const updateBill = async (e) => {
    e.preventDefault();
    const jsondata = {
      billdate: $("#ebilldate").val(),
      paiddate: $("#epaiddate").val(),
      unitconsume: $("#eunitconsume").val(),
      amount: $("#eamount").val(),
    };
    const id = sessionStorage.getItem("id");

    const response = await axios.put(`/api/edit/${id}`, jsondata);
    console.log(response.data);
    if (response.data.status === "success") {
      toast.success("Bill updated successfully");
      $("#editBill").css("display", "none");
      fetchBills();
    } else {
      toast.error("Error in updating bill");
    }
  };
  useEffect((e) => {
    fetchBills();
  }, []);
  console.log(data);
  return (
    <div className="home__container">
      <div className="container">
        <div className="text-center">
          <h3>Bills</h3>
        </div>
        <Editbill updateBill={updateBill} />
        <div className="container mt-5">
          <MDBDataTableV5
            hover
            entriesOptions={[9, 20, 25]}
            entries={9}
            pagesAmount={4}
            data={datatable}
            searchTop
            searchBottom={false}
            btn={true}
          />
        </div>
      </div>
    </div>
  );
};
