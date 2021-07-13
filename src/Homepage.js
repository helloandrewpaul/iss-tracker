import React ,{useEffect,useState}from "react"
import styled from "styled-components"
const Homepage= ()=> {

const [issLocation, setIssLocation]=useState([])
const [photo,setPhoto]=useState([])

const getIssLocation = async ()=>{
return fetch("http://api.open-notify.org/iss-now.json")
.then((response)=> response.json())
.then((data)=> {
  let locationArray = Object.values(data)[2]
  setIssLocation(locationArray)
})
}
const getAPOD = async()=>{
  return fetch("https://api.nasa.gov/planetary/apod?api_key=2VHkzCESaR0vFjx9yzAvyCfboaCT9tp4a8hydfrF")
  .then((response)=> response.json())
  .then((data)=>{
    let apod = Object.values(data)[7]
    setPhoto(apod)
    console.log(photo)

  })
}
useEffect(()=>{
  getAPOD()

},[])

useEffect(()=>{
  const interval = setInterval(()=>{
    getIssLocation()
  },2000);
  return ()=> clearInterval(interval)
  // getIssLocation()
},[])




  return (<><Wrap style={{backgroundImage: `url('${photo} ')`,
  backgroundRepeat: 'no-repeat', backgroundPosition: "center",
  backgroundSize: "cover", backgroundAttachment:"fixed"}}>
{/* <Wrap ><div><Img src={photo}/></div> */}
<Long>Longitude: {issLocation.latitude}
  </Long>
  <Lat>Latitude: {issLocation.longitude}</Lat>
  
  
  </Wrap>
  </>
  )

  
}
// const Img = styled.img`
// width:100%;
// height:100%;
// position:absolute;
// `
const Lat = styled.div`
color:#fff;`
const Long = styled.div`
color:#fff;`
const Wrap=styled.div`
width:100vw;
height:100vh;

`
export default Homepage;