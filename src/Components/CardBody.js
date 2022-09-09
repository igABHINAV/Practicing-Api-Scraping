
import React, { useState, useEffect } from 'react'

export default function CardBody() {
    const [users, setUsers] = useState([])
    
    const getUser = async () => {
        const response = await fetch('https://images-api.nasa.gov/search?q=apollo11')
        setUsers(await response.json())

    }

    useEffect(() => {
        getUser();
        
    }, []);


    return (
        <>
            {/* <div className='container-fluid'></div>
            <h2 className='text-center ' style={{margin:'80px',color:'gray'}}>Some Pics of Apollo 11 mission</h2>
            <div className="row text-center" style={{ marginLeft: '165px' }}>
            {
                users.collection.items.map((i) => {
                    return (

                        <div className="col-md-3 mb-4 my-3 mx-4 ">
                            <div className="card bg-dark text-light my-2" style={{ border: '2px solid gray', }} >
                                <img src={i.links[0].href} className="card-img-top" alt="preview" />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{i.data[0].title}</h5>
                                    <p className="card-text">{i.data[0].description}</p>

                                </div>
                            </div>
                        </div>
                    )
                })

            }
            </div> */}
        </>
    )

}

