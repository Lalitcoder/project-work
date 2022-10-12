import { useState } from "react";

function App (){

    const [data, setData] = useState("hi");
    
    return(
<div>
   {data}
    <button onClick={() => setData("how are you")}>Click me</button>
</div>
    );

}

export default App;