const Button = (props) => {
    return (
        <button className={props.type} onClick={props.callback}>{props.label}</button>
    )
}

export default Button; 