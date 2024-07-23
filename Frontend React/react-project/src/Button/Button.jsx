import style from './Button.module.css'
function Button(){
   /* return (<button className={style.button}>Click me</button>)   *//* applying css using module */

   const styles={
    display: "inline-block",
    padding:" 0.5rem 1rem",
    fontSize:" 1rem",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    border: "0px",
    borderRadius:"0.25rem",
    backgroundColor: "#61cce7",
    color: "#333",
   }

   return(<button style={styles}>Click me</button>)
}

export default Button