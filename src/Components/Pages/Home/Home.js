import React, { useState } from "react";
import "./Style/Home.css";
import { ffxiv } from "../../../APIKeys/xivApiKey";
import axios from "axios";
import { useForm } from "react-hook-form"; //https://www.youtube.com/watch?v=bU_eq8qyjic

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState({});

  const onSubmit = (info) => {
    console.log("info: ", info);
    //cancel token to stop multiple
    let cancelToken;
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Cancelling the previous request");
    }
    cancelToken = axios.CancelToken.source();

    axios({
      method: "get",
      url: `https://xivapi.com/character/search?name=${info.charName}&server=${info.server}&private_key=${ffxiv.private_key}`,
    }).then((response) => {
      let newResponse = { ...response.data };
      console.log("newResponse", newResponse);
      axios({
        method: "get",
        url: `https://xivapi.com/character/${response.data.Results[0].ID}&private_key=${ffxiv.private_key}`,
      })
        .then((res) => {
          let newData = { ...res.data };
          setUser((currentUser) => {
            return {
              ...currentUser,
              ...newData,
            };
          });
        })
        .catch((err) => console.log("error: ", err.message));
    });
  };

  return (
    <div>
      <h1>Final Fantasy Crafting Picker</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="charName"
          placeholder="Character Name"
          {...register("charName", { required: true })}
        />
        {errors.charName && <p>{errors.charName.message}</p>}
        <input
          type="text"
          name="server"
          placeholder="Server Name"
          {...register("server", { required: true })}
        />
        {errors.server && <p>{errors.server.message}</p>}
        <input type="submit" />
      </form>
      <div className="results">
        <h1>{user.Name}</h1>
        <h3>{user.ID}</h3>
        {/* <p>{JSON.stringify(user)}</p> */}
        <img src={user.Avatar} alt="Your Character Avatar" />
      </div>
    </div>
  );
}
