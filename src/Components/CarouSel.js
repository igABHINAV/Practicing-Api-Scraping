import React , {useState , useEffect} from 'react'

export default function CarouSel() {
  const [users,setUsers]= useState([])
  const getUser= async ()=>{
    const response=await fetch('https://api.nasa.gov/planetary/apod?api_key=B1h9RV1yNQwS85zs5HZ2JqZY22aFG1f2yWmb846Z')
    setUsers (await response.json())
    console.log( users)
  }
  useEffect(()=>{
    getUser();
    
  },[]);
  return (
    <>
    <h1 className='text-center' style={{color:'#949494'}}>Image Of The Day</h1>
    <div style={{marginTop: '0px', paddingTop: '0px'}}>
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
         
        </div>
        <div className="carousel-inner">

        
          <div className="carousel-item active">
            <img src={users.hdurl} style={{height :'550px'}} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'rgb(245 87 255)'}}>{users.title}</h5>
              <p>{users.explanation}</p>
            </div>
          </div>


          
        </div>
        
      </div>

    </div>
    </>
  )
}
