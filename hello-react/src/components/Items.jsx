import Description from "./Description";

function Items(props) {

    const {images} = props

    const altImages = {
        alt1: "declarative-image",
        alt2: "components-image",
        alt3: "single-way-image",
        alt4: "jsx-image"
    }

    const titles = {
        title1: "declarative",
        title2: "components",
        title3: "single-way",
        title4: "jsx"
    }

    const texts = {
        text1: "React makes it painless to create interactive UIs",
        text2: "Build encapsulated components that manage their state",
        text3: "A set of immutable values are passed to the component's",
        text4: "Statically-typed, designed to run on modern browsers"
    }

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Description image={images.declarative} title={titles.title1} text={texts.text1} alt={altImages.alt1}/>
            <Description image={images.components} title={titles.title2} text={texts.text2} alt={altImages.alt2}/>
            <Description image={images.singleway} title={titles.title3} text={texts.text3} alt={altImages.alt3}/>
            <Description image={images.jsx} title={titles.title4} text={texts.text4} alt={altImages.alt4}/>
        </div>
    )

}

export default Items;