import { useState } from 'react';
import {db} from './firebase-config'
import {set, ref} from 'firebase/database'

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  // Push Function
  const Push = () => {
    set(ref(db, 'users/' + 1), {
      name: name,
      age: age
    });
  }

  const pull = () => {
    let ref = database.ref("/users");
    ref.on("value", snapshot => {
    const data = snapshot.val()
    console.log(data)
    })
  }
  return (
    <div className="App" style={{ marginTop: 250 }}>
      <center>
        <input placeholder="Enter your name" value={name}
          onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <input placeholder="Enter your age" value={age}
          onChange={(e) => setAge(e.target.value)} />
        <br /><br />
        <button onClick={Push}>PUSH</button>
        <button onClick={pull}>pull</button>
      </center>
    </div>
  );
}

export default App;
