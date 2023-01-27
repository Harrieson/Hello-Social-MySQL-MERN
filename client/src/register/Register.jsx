import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Blanditiis tenetur impedit rem
                        et qui reprehenderit? Doloremque
                        veniam et autem possimus, nesciunt
                        molestias reiciendis, magni, sit
                    </p>
                    <span>Do you have an Account</span>
                    <Link to='/'>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register