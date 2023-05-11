import React from "react";

const BookingsRow = ({ book, deleteHandler, confirmHandler }) => {
  const {
    _id,
    img,
    customerName,
    email,
    date,
    service,
    service_id,
    price,
    status,
  } = book;

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td>
          {status === "confirm" ? (
            <span className="p-4 rounded-lg text-white bg-green-400 border-none">
              APPROVED
            </span>
          ) : (
            <button
              onClick={() => confirmHandler(_id)}
              className="btn bg-orange-400 hover:bg-green-400 border-none"
            >
              CONFIRM
            </button>
          )}
        </td>
        <td>
          <div>
            <button
              onClick={() => deleteHandler(_id)}
              className="btn hover:border-none hover:bg-red-400 btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default BookingsRow;
