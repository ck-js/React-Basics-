

export const PicWithCaption = (props) => {
 return  (
    <div>
        <img src={props.img} alt={props.text}/>
        <p>{props.text}</p>
    </div>
 )   
}

export const FormInput = (props) => {
    return (
            <input
type="text"
placeholder={props.placeholder}
value={props.val}
onChange={props.handler}
/>
    )
}

export const FormButton = (props) => {
return (
    <button onClick={props.handler}>
    {props.val}
    </button>


)
}