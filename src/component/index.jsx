 import {useState} from "react";
import "./home.css"

const Home = () => {
  const [data , setData] = useState("");
    const [number, setNumber] = useState([1,2,3,4,5]);
    const [emptyValue, setEmptyValue] = useState([])
    number.sort((a,b) => a-b)
    const handleInput = (e) => {
        setData(e.target.value-1);
    }


    const handleShoot = () => { 
      if(emptyValue.includes(data+1)){
          alert("You have already shoot this number");
      }
      else{
          if(data > 4 || data < 0){
              alert("You can shoot only in between 1 to 5");
          }
          else{

              setEmptyValue([...emptyValue,data+1])
          }
      }
      setNumber(number.filter(x => x !== data+1))
  }




  const handleReplace = (e) => {
    let value = +e.target.innerHTML;
    setNumber([...number, value]);
    setEmptyValue(emptyValue.filter(x => x !== value));
 
}
    
      return (
    <div>
      <div className='main'>
      <div className='container'>
      <div className='emptydiv' >empty div</div>

      <div className='box' >
      {emptyValue.map(item=>{
                    return(
                        <div onClick = {handleReplace}  className = 'assignCircles' key = {item}  id = {`c${item}`}>
                            {item}
                        </div>
                    )
                })}
      </div>
      </div>
     
      <div className='leftdiv' >5 Circle
   
      {number.map(item => {
                    return (
                        <div  key = {item} className = 'circle' id = {`c${item}`}>
                            {item}
                        </div>
                    )
                })}
      
     
      <input type = "text" placeholder='enter circle number' onChange = {handleInput} ></input>
      <button onClick = {handleShoot}>shoot</button>
      </div>
 </div>
      </div>
      
   
  )
}




export default Home;

