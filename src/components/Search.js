import React, { useContext, useState } from "react";
import AlertContext from "../context/alert/alertContext";
import GithubContext from "../context/github/githubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { show, hide } = useContext(AlertContext);
  const { search, clearUsers } = useContext(GithubContext);

  const onSubmit = (evt) => {
    if (evt.key !== "Enter") {
      return;
    }

    clearUsers();

    if (value.trim()) {
      hide();
      search(value.trim());
    } else {
      show("The username field cannot be empty!");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Github username"
        onKeyPress={onSubmit}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
