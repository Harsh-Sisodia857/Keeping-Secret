import React from "react";
import { useEffect, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import SecretContext from "./Context/SecretContext";
import SecretList from "./SecretList";

function DisplaySecrets() {
  const context = useContext(SecretContext);
  const { Secrets, fetchSecrets, OtherSecrets } = context;

  const navigate = useNavigate();
 const fetchData = async () => {
   if (localStorage.getItem("token")) {
     console.log("Fetch data is called")
     await fetchSecrets();
   } else {
     navigate("/user");
   }
 };
  useEffect(() => {
      fetchData();
  }, []);

  console.log("Secret : ", OtherSecrets);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {Secrets && Secrets.length > 0 ? (
            Secrets.map((t) => {
              return (
                <div key={t._id} className="col-md-4">
                  <SecretList
                    description={t.description}
                    category={t.category}
                    user={t.user}
                    idOfSecret={t._id}
                  />
                </div>
              );
            })
          ) : (
            <div className="container">"No Secrets To Show"</div>
          )}
        </div>
      </div>
    </>
  );
}

export default DisplaySecrets;
