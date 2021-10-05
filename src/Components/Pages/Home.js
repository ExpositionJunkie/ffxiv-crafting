import React, {useState} from "react";
import { useForm } from "../../Hooks/useForm";
import FetchUser from "../Reusable/FetchUser"

const XIVAPI = require("@xivapi/js");
const xiv = new XIVAPI();

export default function Home() {
  const [values, handleChange] = useForm({ charName: "", worldName: "" });

  return (
    <div>
      <h1>Final Fantasy Crafting Picker</h1>
      <input
        type="charName"
        name="charName"
        placeholder="Character Name"
        value={values.charName}
        onChange={handleChange}
      />
      <input
        type="server"
        name="server"
        placeholder="Server Name"
        value={values.serverName}
        onChange={handleChange}
      />
      <input type="submit"/>
      
    </div>
  );
}
