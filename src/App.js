
import { Routes, Route } from 'react-router-dom'
 
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './view/Home'
import Login from './view/Login'
import Products from './view/Product'
import Contact from './view/Contact'
import PageNotFound from './view/Pagenofound'


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} >
          <Route path=":itemId" element={<Products />} />
         
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    <Footer />
    </div>
  );
}



export default App