import './login.scss'

const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Blanditiis tenetur impedit rem
                        et qui reprehenderit? Doloremque
                        veniam et autem possimus, nesciunt
                        molestias reiciendis, magni, sit
                        vero ipsam nostrum adipisci a
                        consequatur quidem nihil obcaecati
                        numquam ratione odio quam. Asperiores
                        voluptas corrupti repellendus necessitatibus
                        sapiente? Qui, natus quibusdam sit culpa minus
                        ratione vero iusto blanditiis tenetur,
                        quod laboriosam, aspernatur modi. Veritatis
                        fuga magnam quis iste corporis consequuntur
                        fugit earum quibusdam blanditiis?</p>
                    <span>Do you have an Account</span>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login