
import axios from "axios";

function App() {

  function hello(){
    axios.get('/api/hello').then((res)=>{
      console.log(res.data);
    })
  }

  return (
    <div>

      <button onClick={hello}>안녕</button>

    </div>
  );
}

export default App;
