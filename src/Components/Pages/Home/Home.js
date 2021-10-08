import React, { useState } from "react";
import "./Style/Home.css";
import { charWithNameAndServer } from "../../Reusable/Variables/XIVApiUrls";
import axios from "axios";
import { useForm } from "react-hook-form"; //https://www.youtube.com/watch?v=bU_eq8qyjic
import CharImageList from "../../Reusable/CharImageList/CharImageList";
import { useHistory } from "react-router-dom";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [matches, setMatches] = useState({});
  let history = useHistory();

  const onSubmit = (info) => {
    console.log("info: ", info);
    newResponse(info);
  };

  const newResponse = async (info) => {
    //cancel token to stop multiple
    let cancelToken;
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Cancelling the previous request");
    }
    cancelToken = axios.CancelToken.source();

    const response = await axios({
      method: "get",
      url: charWithNameAndServer(info.charName, info.server),
      cancelToken: cancelToken.token,
    });

    console.log("response.data", response.data);
    setMatches({items: response.data.Results});
    console.log("matches:", matches);
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
      <div onClick={() => {
            history.push("/character")
          }}>
        <CharImageList items={matches.items} />
      </div>
    </div>
  );
}
