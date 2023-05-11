import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, [url]);
  const confirmHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((b) => b._id !== id);
          const updated = bookings.find((b) => b._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  const deleteHandler = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = bookings.filter((b) => b._id !== id);
          setBookings(remaining);
          alert("Delete Successful");
        });
    }
  };
  return (
    <div>
      <h2>Total Bookings : {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {bookings.map((book) => (
            <BookingsRow
              key={book._id}
              book={book}
              deleteHandler={deleteHandler}
              confirmHandler={confirmHandler}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
