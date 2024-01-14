import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const response = await fetch(
         "http://localhost:5000/user/password/forgot",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ email }),
         }
         );
         const res = await response.json()
       if (res.success) {
         toast("Forgot password request sent successfully.Check Your Email !");
         navigate("/auth/reset-password");
       } else {
         toast.error("Failed to send forgot password request.");
       }
     } catch (error) {
       toast.error(`Error sending forgot password request : ${error}`);
     }
   };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Forgot Password</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
