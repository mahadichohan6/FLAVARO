import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {loading ? (
        <PropagateLoader color="#12ffe1" />
      ) : (
        <div>
          <h2 className="mb-3 fw-bold fs-1">Order Successful</h2>
          <p className="mt-2 fw-semibold">
            Your Order Has Been Succesfully Placed
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
