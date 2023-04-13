
export const CustomButtons = (props) => {
return (
    <button
    onClick={props.handleClick}
    >
        {props.text}
    </button>
)    
}