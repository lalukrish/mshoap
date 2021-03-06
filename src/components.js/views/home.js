import React,{useState,useEffect} from "react";

const Home =()=>{
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authroization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json()).then(result=>{
      console.log(result)
      setData(result.posts)
    })
  },[]) 
  return(
    <div className="home">
    {
      data.map(item=>{
        return(
          <div className="card home-card" key={item._id}>
          <h5>{item.postedBy.name}</h5>
          <div className="card-images">
            <img
              src= {item.photo}
              alt="no internet"
            />
          </div>
          <div className="card-content">
            <i className="material-icons">favorite</i>
            <h4>{item.title}</h4>
            <p>{item.body} </p>
            <input type="text" placeholder="add a comment" />
          </div>
        </div>
       
       
        )
      })
    }
   
    </div>  
  
  )
}
export default Home;