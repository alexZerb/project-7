import React from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
   
    const searchData = props.data;
    console.log(searchData);
    return(
        <div className="photo-container">
            <h2>{this.query}</h2>
                <ul>
                {searchData.map(photo => (
                    <Photo id={photo.id} server={photo.server} secret={photo.secret} key={photo.id} />
                ))} 
                </ul>
        </div>
    );

}

export default PhotoContainer;