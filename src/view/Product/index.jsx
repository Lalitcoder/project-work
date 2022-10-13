 
import { useState, useEffect } from 'react'
import axios from 'axios';
 

import { useParams } from 'react-router-dom';


const Products = () => {

const [data, setData] = useState ([]);
const [loading, setLoading] = useState (false);
 
const param = useParams();
useEffect (() => {
 getData()
}, [])


const getData = async () => {
   
    try {
        setLoading(true)
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setData(res.data);
        setLoading(false)
    } catch (error) {
        console.log('==>', error);   
    }
}
 
 

    return (
        <div className='row'>

            <h1 className='text-center'> {loading ? ' Loading...' : ''}</h1>
         
            <div className='col-3'>
                <h2>{loading ? '' : 'Filters'}</h2>
            </div>
            <div className='col-9'>
            <h2>  {loading ? '' : `Products`}</h2>
                <div className='row'>
                    
                    {data && data.filter(item => item?.category?.name === param.itemId).map(item => (
                        <div className="col-3 mb-4" key={item.id}>
                            <div className='card card-body'>
                                <img src={item?.images} alt='' />
                                <p className='text-success mt-2'>{item?.category?.name}</p>
                                <h4> {item.title.slice(0, 18)}...</h4>
                                <p> {item.description.slice(0, 55)}... </p>
                                <p className='text-success'>${item.price}</p>
                                <button className='btn btn-primary'> View Details</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <h1>Products</h1>
        </div>

    )
}

export default Products