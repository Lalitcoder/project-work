const Button = ({homeBtn}) => {
 
  return(
    <button className="buttons" style={{ width:300, height:48, fontSize:"18px", color:"#fff",
    background:`${homeBtn?.color || 'blue'}`,
    }}>
    {homeBtn?.name || "click"}
    </button>
  )

}
export default Button