import SecretContext from "./SecretContext";
import { useState } from "react";
import { toast } from "react-toastify";

const SecretState = (props) => {
    const [Secrets, setSecrets] = useState([]);
    const [OtherSecrets, setOtherSecrets] = useState([]);

    // GET ALL Secrets
    const fetchSecrets = async () => {
        const response = await fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const secret = await response.json();
        console.log("Fetch secret : ",secret)
        setSecrets(secret.secrets);
        setOtherSecrets(secret.otherSecrets)
    };

    const createSecret = async (description, category) => {
        //  API CALL
        const response = await fetch("http://localhost:5000/user/createSecrets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ description, category,}),
        });
        const secret = await response.json();
        if (secret.error) {
            toast.error(secret.error);
            return;
        }
        console.log(secret);
        console.log(Secrets.concat(secret))
        setSecrets(Secrets.concat(secret));
        toast("Secret Created !!");
    }

    const deleteSecret = async (id) => {
        const response = await fetch(
            `http://localhost:5000/user/deleteSecret/?id=${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            }
        );
        const json = await response.json();
        console.log(json)
        const newSecrets = Secrets.filter((note) => { return note._id !== id });
        toast("Secret is Deleted")
        console.log(json)
        setSecrets(newSecrets);
        await fetchSecrets();
    };


    const editSecret = async (id, description, category) => {
        console.log(id)
        console.log(description)
        console.log(category)
        // API CALL
        const response = await fetch(
            `http://localhost:5000/user/updateSecret/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({ edescription: description, ecategory: category}),
            }
        );
        const json = await response.json();
        console.log(json);
        setSecrets((prevSecrets) =>
            prevSecrets.map((secret) =>
                secret._id === id
                    ? {
                        ...secret,
                        category: json.secret.category,
                        description: json.secret.description,
                    }
                    : secret
            )
        );
    };

    return (
        <SecretContext.Provider value={{ OtherSecrets, Secrets, deleteSecret, fetchSecrets, editSecret, createSecret }}>
            {props.children}
        </SecretContext.Provider>

    )
}

export default SecretState;