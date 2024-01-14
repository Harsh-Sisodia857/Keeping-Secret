import { useContext } from "react";
import SecretContext from "./Context/SecretContext";

function OtherSecret() {
  const context = useContext(SecretContext);
  const { OtherSecrets } = context;
  console.log(OtherSecrets);

  return (
    <>
      {OtherSecrets && OtherSecrets.length > 0 ? (
        <div className="container" style={{ marginTop: "12px" }}>
          <div className="row">
            {OtherSecrets.map((secret) => (
              <div className="card mb-5 col-md-4" key={secret._id}>
                <div className="card-body">
                  <h5 className="card-category">{secret.description}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container" style={{marginTop : "20px"}}>No Public Secret's</div>
      )}
    </>
  );
}

export default OtherSecret;
