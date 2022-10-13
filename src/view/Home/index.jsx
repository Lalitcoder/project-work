
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// import UserSign from '../Login/userSign';
// import UserLogin from '../Login/userLogin';
// import Button from '../../components/Buttons'

import slideOne from '../../assets/image/slide-one.jpg'
import slideTwo from '../../assets/image/slide-two.jpg'
import slideThree from '../../assets/image/slide-three.jpg'



const Home = () => {
  // const [user, setUser] = useState(false)

  // const isUserLogin = () => {
  //   setUser(true)
  // }

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {

    try {
      setLoading(true);
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setData(res.data);
      setLoading(false);

    } catch (error) {
      console.log('==>', error);
    }
  }


  return (
    <div >
      <div className='slider'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: 400 }}>
              <img src={slideOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: 400 }}>
              <img src={slideTwo} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: 400 }}>
              <img src={slideThree} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h1 className='text-center'> {loading ? ' Loading...' : ''}</h1>
      <div style={{ backgroundColor: "#e7e7e7", padding: "30" }}>
        <div className='container'>
          {/* <h1> Courses</h1>
            <Button homeBtn={{ name: "Login", color:"#ff0000" }}  />
            <Button homeBtn={{ name: "Sign Up", color:"#000000" }} />
            <Button /> */}

          <h1>{loading ? '' : 'Categories'}</h1>
          <div className='row'>

            {data && data.map(item => (
              <div className='col-2' key={item.id}>
                <Link to={`products/${item.name}`}>
                  <div className='card card-body text-center'>
                    <img src={item.image} alt={item.name} />
                    <h4 className='pt-3'> {item.name}</h4>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
        {/*             
            <div className="App">
      {user ? <UserLogin /> : <UserSign />}
      
        <button onClick={isUserLogin}> click </button>
     </div> */}
      </div>
    </div>

  )
}

export default Home