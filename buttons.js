
export const CustomButtons = (props) => {
return (
    <button
    onClick={props.handleClick}
    >
        {props.text}
    </button>
)    
}

export const MyImage = (props) => {
return (
    <img 
    src={"https://mimo.app/i/" + props.name + ".png"}
    alt={props.name}
    />
)
}