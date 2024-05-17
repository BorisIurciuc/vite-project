import { FC, useState } from "react";
import MyButton from "../../common/MyButton/MyButton";

const TitleImage: FC=() => {

    const facade = {
        name: 'Weinhaus',
        title: "fine dining restaurant",
        imgUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/29/7c/64/tradition-seit-1413.jpg?w=1800&h=-1&s=1'

    }
    const interior = {
        name: 'restaurant hall',
        title: 'nobility and comfort',
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-o/08/d1/c3/da/restaurant-weinhaus-stachel.jpg'
    }

    const [isFacade, setIsFacade] = useState<boolean>(true);
    const [imageData, setImageData] = useState(facade);

    const toggleImage = () => {
        setIsFacade((isFacade) => {
            if(!isFacade) {
                setImageData(facade);
            } else {
                setImageData(interior);
            }
            return !isFacade;
        });
    }
    console.log(isFacade);
    console.log(facade);
    console.log(interior);

    return(
        <div className="div.container">
            <h2>{imageData?.name}</h2>
            <p>{imageData?.title}</p>
            <img src={imageData?.imgUrl} alt="" />
            <MyButton 
                onClick={toggleImage}
                text={isFacade ? 'switch to interior' : "switch to facade"} />
        </div> 
    );
}
export default TitleImage;