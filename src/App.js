import React ,{useEffect,useState}from "react"
function App() {

const [issLocation, setIssLocation]=useState([])

const getIssLocation =async ()=>{
return fetch("http://api.open-notify.org/iss-now.json")
.then((response)=> response.json())
.then((data)=> {
  let locationArray = Object.values(data)[2]
  setIssLocation(locationArray)
})
}

useEffect(()=>{
  const interval = setInterval(()=>{
    getIssLocation()
  },2000);
  return ()=> clearInterval(interval)
  // getIssLocation()
},[])


  return (<><div>{issLocation.latitude}
  </div>
  <div>{issLocation.longitude}</div>
  </>
  )
  
}

export default App;
