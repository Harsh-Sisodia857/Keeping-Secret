import React,{useContext} from 'react'
import deleteIcon from "../assets/icons/Delete.png";
import SecretContext from "./Context/SecretContext";

function SecretCard({
  user,
  category,
  handleUpdateClick,
  idOfSecret,
  description,
  isOtherSecret
}) {
  const context = useContext(SecretContext);
  const { deleteSecret } = context;

  return (
    <div>
      <div className="card mb-5" id={user}>
        <div className="card-header" style={{ position: "relative" }}>
          <span style={{ width: 30 }}>{category}</span>
          <span>
            <i
              className="far fa-edit my-1 fa-lg"
              style={{
                width: 30,
                height: 30,
                display: "inline-block",
                position: "absolute",
                right: 40,
                cursor: "pointer",
                paddingRight: 40,
              }}
              onClick={handleUpdateClick}
            ></i>
          </span>
          <span>
            <img
              src={deleteIcon}
              id={idOfSecret}
              alt="Delete Secret"
              onClick={() => {
                deleteSecret(idOfSecret);
              }}
              style={{
                width: 30,
                height: 30,
                display: "inline-block",
                position: "absolute",
                right: 11,
                bottom: 5,
                cursor: "pointer",
              }}
            />
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-category">{description}</h5>
        </div>
      </div>
    </div>
  );
}

export default SecretCard