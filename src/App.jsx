import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Card1 from './components/card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Product1 from './components/Product1'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Product4 from './components/Product4'
import Product6 from './components/Product6'
import Product5 from './components/Product5'
import Product7 from './components/Product7'
import Product9 from './components/Product9'
import Product8 from './components/Product8'
import Svgcard1 from './components/svgcard1'
import Svgcard2 from './components/Svgcard2'
import Svgcard3 from './components/Svgcard3'
import Svgcard4 from './components/Svgcard4'
import Svgcaed5 from './components/Svgcaed5'
import Svgcard6 from './components/Svgcard6'
import Svgcard7 from './components/Svgcard7'
import Svgcard8 from './components/Svgcard8'
import Footer from './components/Footer'


function App(props) {
const[mode, setMode]=useState('light')
const toogleMode= ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#232c2d';
  }
  else(
    setMode('light'),
    document.body.style.backgroundColor='white'
  )
}
  return (
    <>
      <Navbar title="Bioskin" page="about us" mode={mode} toogleMode={toogleMode}  />
     
      <Routes>
     
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
        <Route path='/products' element={<Products/>}/>
        </Routes>
      <div className="container-fluid " >
        <div className="row bgimg"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-5 ">
          <Card1  />
          </div>
          <div className="col-md-4 my-5">
            <Card2/>
          </div>
          <div className="col-md-4 my-5">
            <Card3/>
          </div>
        </div>
        <div className="row">
          <div className="col my-5">
            <p className='h3 fw-4 text-center 'style={{color:props.mode==='dark'?'white':'black'}}>PRODUCT RANGE</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Product1/>
          </div>
          <div className="col">
            <Product2/>
          </div>
          <div className="col">
            <Product3/>
          </div>
        </div>
        <div className="row">
          <div className="col my-5">
            <Product4/>
          </div>
          <div className="col my-5">
            <Product5/>
          </div>
          <div className="col my-5">
            <Product6/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Product7/>
          </div>
          <div className="col">
            <Product8/>
          </div>
          <div className="col">
            <Product9/>
          </div>
        </div>
        <div className="row">
          <div className="col my-5">
         
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary btn-outline-secondary text-white" type="button"style={{color:props.mode==='dark'?'white':'black'}} >SEE All Products</button>
          </div>
          </div>
        </div>
        
      </div>
      <div className="container-fluid"style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="row">
          <div className="col">
            <p className='h3'>WELCOME TO BIOSKIN DERMOLIFE COSMETIC</p>
            <p className=''>Results from the first treatment. It’s been our philosophy from the start. It means that however you choose to deliver Bioskin Dermolife Cosmetic we aim to push the boundaries of your treatment expectations.</p>
            <p>At Bioskin we formulate cutting-edge professional cosmetics. Our solutions are used by medical aesthetic professionals clinicians in clinics salons and spa’s throughout the world.</p>
            
          </div>
          <div className="col-md-4 imgcol ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdi2OiSIUNX1rk81TGremHiT1SqYyfjZuf_PuWzns5SAOF_Y4U"className='dirimg img-fluid' alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 acndcol">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7Yf3F8gt9DvqnwwNKhJe3xXqWvrlo6c3KFfbltK6wTKu0sMUg"className='scndimg img-fluid' alt="" />
          </div>
          <div className="col text-bg-secondary">
            <p className='h3 my-5'>COSMECEUTICAL SOLUTIONS</p>
            <p>Our cosmeceutical solutions are highly demanded thanks to their broad application with numerous efficacious and popular delivery systems.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi veritatis rerum unde eos ipsum vitae ut ea quisquam consectetur. Repellat illo est, suscipit blanditiis, temporibus, cum optio veritatis consequuntur tempora odio unde. Quod dolor a temporibus, repudiandae facere aspernatur saepe accusamus. Corporis quibusdam rerum fugit nulla assumenda, laudantium aut!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className='h3 fw-bold text-center my-5'>OUR FORMULATION</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <Svgcard1/>
          </div>
          <div className="col-lg-3 col-md-4">
            <Svgcard2/>
          </div>
          <div className="col-lg-3 col-md-4">
            <Svgcard3/>
          </div>
          <div className="col-lg-3 col-md-4">
            <Svgcard4/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <Svgcaed5/>
          </div>
          <div className="col-lg-3 col-md-4">
            <Svgcard6/>
          </div>
          <div className="col-lg-3 col-md-4">
            <Svgcard7/>
          </div>
          <div className="col-lg-3 col-md-4">
            <Svgcard8/>
          </div>
        </div>
        <div className="row my-5 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 my-5 ">
            <p className='h3  text-center'>GET IN TOUCH TODAY</p>
            <p className='text-center'>Register your interest in becoming a distributor today by completing the form.</p>
           
              <div class="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter your Name'/>
              </div>
              <div class="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter Email @'/>
              </div>
              <div class="input-group mb-3">
                <input type="text" className="form-control py-5" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Subject*'/>
              </div>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Message here..."></input>
              <div class="d-grid gap-2">
              <button type="button" className="btn btn-outline-primary btn-md my-5 btn-center">Submit</button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
