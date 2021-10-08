import React, { useState, useEffect } from "react";
import { useForm } from "../../../Hooks/useForm";
import { useFetch } from "../../../Hooks/useFetch";
import { ffxiv } from "../../../APIKeys/xivApiKey";

function FetchUserInfo(ready, values) {
  const res = useFetch(ready, `https://xivapi.com/character/search?name=${values.charName}&server=${values.server}&private_key=${ffxiv.private_key}`,
  { mode: "cors" })
  if(ready) {
    if (!res.response) {
      return <div>Loading...</div>;
    }
    if (res.response) {
      console.log("response from fetchUserInfo", res);
  
      return (
        <div>
          <h1>Hit Fetch User Info</h1>
        </div>
      );
    }
  }
}

export default function Home() {
  const [values, handleChange] = useForm({ charName: "", server: "" });
  const [user, setUser] = useState({ initialized: true });
  const [ready, setReady] = useState(false);

   useEffect(() => {
     if (values.charName) {
      fetch(
        `https://xivapi.com/character/search?name=${values.charName}&server=${values.server}&private_key=${ffxiv.private_key}`,
        { mode: "cors" }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Char name and Server:", values.charName, values.server);
          console.info(data.Results[0].ID);
          const res = data.Results[0];
          setUser((user) => ({ ...user, ...res }));
          console.log("user info", user);
        });
    } 
  }, [ready]); 

  const toggleReady = React.useCallback((e) => {
    e.preventDefault();
    setReady((ready) => !ready);
  }, []);

  return (
    <div>
      <h1>Final Fantasy Crafting Picker</h1>
      <input
        type="text"
        name="charName"
        placeholder="Character Name"
        value={values.charName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="server"
        placeholder="Server Name"
        value={values.server}
        onChange={handleChange}
      />
      <input type="Submit" onClick={toggleReady}></input>
      <div>
        {/* <FetchUserInfo ready={ready} values={values} /> */}
      </div>
    </div>
  );
}
