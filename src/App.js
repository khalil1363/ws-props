import './App.css';
import HandleName from'./Component/Profile/HandleName';
function App() {
  const alertMyInput =fullName=>alert(fullName)
  return (
    <div style={{color:"red",textAlign:"center" ,backgroundColor:"white", width:"400px" ,display:"flex" ,margin:"auto",padding: "10px"}}>
      <div>
<HandleName fullName='fray khalil' bio='fjfj' profession='student'  src='/user.jpg' alertMyInput={alertMyInput}/>
    </div>
    </div>
  );
}

export default App;
