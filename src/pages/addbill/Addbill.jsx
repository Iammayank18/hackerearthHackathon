import React from "react";
import "./Addbill.css";
import axios from "axios";
import { toast } from "react-toastify";
const Addbill = () => {
  const [datatable, setDatatable] = React.useState({
    billdate: "",
    paiddate: "",
    unitconsume: "",
    amount: "",
  });
  const addBill = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/addBill", datatable);
    console.log(response.data);
    if (response.data.status === "success") {
      toast.success("Bill added successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } else {
      toast.error("Error adding bill");
    }
  };

  return (
    <div className="container w-50 p-4 mt-5 addbill__con">
      <form onSubmit={addBill}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Bill date
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="billdate"
            onChange={(e) =>
              setDatatable({ ...datatable, billdate: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Paid date
          </label>
          <input
            type="date"
            name="paiddate"
            onChange={(e) =>
              setDatatable({ ...datatable, paiddate: e.target.value })
            }
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Unit consume
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            name="unitconsume"
            onChange={(e) =>
              setDatatable({ ...datatable, unitconsume: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Amount
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            name="amount"
            onChange={(e) =>
              setDatatable({ ...datatable, amount: e.target.value })
            }
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            All the above fields are correct
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addbill;
