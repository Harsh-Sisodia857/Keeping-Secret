import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import SecretContext from "./Context/SecretContext";


const CreateSecret = () => {
  const context = useContext(SecretContext);
  const [secret, setSecret] = useState({
    description: "",
    category: "Private",
  });

  const [error, setError] = useState("");

  const { createSecret } = context;

  const schema = Joi.object({
    description: Joi.string().min(5).required().label("Description"),
    category: Joi.string()
      .valid("Public", "Private")
      .required().label("Category"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = schema.validate(secret, { abortEarly: false });
    console.log(error);
    if (error) {
      setError(error.details[0].message);
      const formErrors = {};
      for (const err of error.details) {
        toast(err.message);
        formErrors[err.path[0]] = err.message;
      }
      return;
    }

    createSecret(secret.description, secret.category);
    console.log(secret);
    setSecret({
      description: "",
      category: "Public",
    });
    setError("");
    console.log(secret);
  };

  const onChange = (e) => {
    setSecret({ ...secret, [e.target.name]: e.target.value });
    setError("");
  };
  return (
    <div className="container">
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            value={secret.description}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="category"
            className="form-input form-label mb-2"
            id="category"
          >
            Category
          </label>
          <select
            type="text"
            id="category"
            name="category"
            placeholder="Choose a category"
            className="form-select"
            value={secret.category}
            onChange={onChange}
          >
            <option value="Private" defaultChecked>
              Private
            </option>
            <option value="Public">Public</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Secret
        </button>
      </form>
    </div>
  );
};

export default CreateSecret;
