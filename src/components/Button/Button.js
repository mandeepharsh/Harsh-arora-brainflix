

const Button = ({icon,description,iconDescritpion}) => {
  return (
    <button>
      <img src={icon} alt ={iconDescritpion}/>
      {description}
    </button>
  )
}

export default Button
