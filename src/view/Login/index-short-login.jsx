
import { useState } from "react"

const Login = () => {
    const [values, setValues] = useState({usename: '', email:'', password:''})
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]:value }) 
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label> Name</label>
            <input type="text" value={values.usename} name="usename" onChange={handleChange} />   

        <br />
        <label> Email</label>
            <input type="email" value={values.email} name="email" onChange={handleChange} />   

            <br />
        <label> Email</label>
            <input type="password" value={values.password} name="password" onChange={handleChange} />   
            <button type="submit"> Submit </button>
        </form>
    )
} 
export default Login