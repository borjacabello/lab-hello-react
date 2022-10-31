function Description(props) {

    const {image, title, text, alt} = props;

    return (
        <div>
            <img src={image} alt={alt} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )

}

export default Description;