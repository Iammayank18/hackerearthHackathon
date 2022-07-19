import React from "react";
import $ from "jquery";
const Editbill = ({ updateBill }) => {
  const [edata, setEdata] = React.useState({
    billdate: "",
    paiddate: "",
    unitconsume: "",
    amount: "",
  });
  return (
    <div className="container w-50 p-4 mt-5 addbill__con" id="editBill">
      <div className="container">
        <div className="text-center">
          <h3>Edit Bill</h3>
        </div>
      </div>
      <form>
        <div class="mb-3">
          <label for="billdate" class="form-label">
            Bill date
          </label>
          <input
            type="date"
            class="form-control"
            id="ebilldate"
            aria-describedby="emailHelp"
            name="ebilldate"
            onChange={(e) => setEdata({ ...edata, ebilldate: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="paiddate" class="form-label">
            Paid date
          </label>
          <input
            id="epaiddate"
            type="date"
            class="form-control"
            name="epaiddate"
            onChange={(e) => setEdata({ ...edata, epaiddate: e.target.value })}
          />
        </div>

        <div class="mb-3">
          <label for="unitconsume" class="form-label">
            Unit consume
          </label>
          <input
            type="number"
            class="form-control"
            id="eunitconsume"
            name="eunitconsume"
            onChange={(e) =>
              setEdata({ ...edata, eunitconsume: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="amount" class="form-label">
            Amount
          </label>
          <input
            type="number"
            class="form-control"
            id="eamount"
            name="eamount"
            onChange={(e) => setEdata({ ...edata, eamount: e.target.value })}
          />
        </div>

        <button type="submit" class="btn btn-primary mx-2" onClick={updateBill}>
          Update
        </button>
        <button
          type="submit"
          class="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            $("#editBill").css("display", "none");
          }}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Editbill;
