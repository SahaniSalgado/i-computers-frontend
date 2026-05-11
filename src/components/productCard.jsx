
export default function ProductCard(props) {
    return(
        <div className="border w-80 h-80 ">
            <h1>{props.name}</h1>
            <img src={props.photo} alt="image" className="w-40 h-40" />
            <p> RS. {props.price}</p>
       </div>
    )
}