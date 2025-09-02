const SeriesCard = ({Element}) =>{
   const {img_url , name , rating , description , cast , watch_url , id} = Element;

     return( 
     <li >
          <div>
            <img
              src={img_url}
              alt="download.jpg"
              width="40%"
              height="40%"
            />
          </div>
          <h2>Name : {name}</h2>
          <h3>Rating : {rating}</h3>
          <p>Summary : {description}</p>
          <p>Cast : {cast}</p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>);
}

export default SeriesCard;