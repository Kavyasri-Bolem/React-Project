import logo from './assets/Logo.jpeg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={logo} alt="Logo"></img>
            <h2>Welcome To My Website</h2>
            <p>This Site belongs to me &copy;</p>
        </div>
    )
}

export default Card