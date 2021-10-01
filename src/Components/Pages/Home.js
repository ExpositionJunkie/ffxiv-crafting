import React from "react";
import { useForm } from "../../Hooks/useForm";

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
        type="worldName"
        name="worldName"
        placeholder="World Name"
        value={values.worldName}
        onChange={handleChange}
      />
    </div>
  );
}
