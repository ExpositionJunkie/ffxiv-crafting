import React, { useState, useEffect } from "react";

export default function FetchUser(props) {
  const [values, setValues] = useState({loading: true, character: null})

  useEffect(() => {
    async function fetchAPI() {
      const url = `https://xivapi.com/character/search?name=${props.charName}&server=${props.server}`;
      let response = await fetch(url);
      let data = await response.json();
      setValues({ character: data.results[0], loading: false });
    }
    fetchAPI();
  }, );

  return (
    <div>
      {values.loading || values.character ? (
        <div>loading...</div>
      ) : (
        <div>{values.character.id}</div>
      )}
    </div>
  );
}
