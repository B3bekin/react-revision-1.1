const CardDynamic = (props) => {
    return (
        <div>
            <h2 className="mustafa">{props.title} </h2>

            <p className="text">{props.content}</p>

            <a className="data">{props.link}</a>

        </div>
    )
}


export default CardDynamic;

