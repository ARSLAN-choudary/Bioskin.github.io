import React from 'react'


function Card1(props) {
  return (
    <div className="carda1" style={{backgroundColor:props.mode==='light'?'white':'white'}}>
      <a href="/"className='text-black' >
       <div  >
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtWthYEtHOcujoe9G6RDLan29mjTx9JqCFk2qzKW1LNWL9k1AI" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center my-4">Body Treatment</h5>
                
              </div>
            </div>
            </a>
    </div>
  )
}

export default Card1

