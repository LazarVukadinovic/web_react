import { useState, useEffect } from 'react';
import "./InputForm.css"

const InputForm = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if(name != "")
    localStorage.setItem('DATA', JSON.stringify(name))
  }, [name])

  return (
    <form>
      <label>{props.nameField}
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

export default InputForm;