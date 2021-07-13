import React ,{useEffect,useState}from "react"
function App() {
const [issLocation, setIssLocation]=useState([])
const getIssLocation =async ()=>{
return fetch("http://api.open-notify.org/iss-now.json")
.then((response)=> response.json())
.then((data)=> {
  let locationArray = Object.values(data)[2]
  // let newArray = Object.values(locationArray)[0]
  // console.log(locationArray)

  // setIssLocation(newArray)
  setIssLocation(locationArray)

console.log(locationArray)
})
}
useEffect(()=>{
  getIssLocation()
},[])
// useEffect(()=>{
//   fetch("http://api.open-notify.org/iss-now.json",{method:"GET"})
//   .then(())
// })

  return (<><div>{issLocation.latitude}
  </div>
  <div>{issLocation.longitude}</div>
  </>
  )
  
}

export default App;
