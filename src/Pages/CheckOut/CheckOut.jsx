import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, service_id, img, title, price } = service;
  const { user } = useContext(AuthContext);
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const due = form.due.value;
    const email = form.email.value;

    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: due,
    };
    console.log(order);
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booked your appointment");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl">Book Service : {title}</h2>
      <div className="card-body">
        <form onSubmit={handleFormData}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={`$ ` + price}
                name="due"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                defaultValue={user.email}
                name="email"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              value="Confirm Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
