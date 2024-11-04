import { useState } from "react";

const InputTodo = () => {
  const [valuet, setValuet] = useState([]);
  const [state, setState] = useState("");
  const handleSubmit = () => {
    setValuet((todo) => [...todo, state]);
    // setValuet(todo);
    setState("");
    console.log(valuet);
  };
  return (
    <>
      <div>Add new Todo</div>
      <input
        type="text"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      &nbsp;
      <button onClick={() => handleSubmit()}>save</button>
      {valuet.map((a, index) => (
        <div key={index}>{a}</div>
      ))}
    </>
  );
};

export default InputTodo;
