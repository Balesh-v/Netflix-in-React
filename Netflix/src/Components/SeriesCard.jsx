const SeriesCard = ({Element}) =>{
   const {img_url , name , rating , description , cast , watch_url , id} = Element;

   const btn_style = {
              padding:"1.2rem 2.4rem",
              fontSize:"1.4rem",
              backgroundColor:"#e50914",
            }

     return( 
     <li className="card" >
          <div>
            <img
              src={img_url}
              alt="download.jpg"
              width="40%"
              height="40%"
            />
          </div>
          <div className="card-content">
          <h2>Name : {name}</h2>
          <h3>Rating : {rating}</h3>
          <p>Summary : {description}</p>
          <p>Cast : {cast}</p>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now</button>
          </a>
          </div>
        </li>);
}

export default SeriesCard;