import style from "./Netflix.module.css" 
import styled from 'styled-components';


const SeriesCard = ({Element}) =>{
   const {img_url , name , rating , description , cast , watch_url , id} = Element;

   const btn_style = {
              // padding:"1.2rem 2.4rem",
              fontSize:"1rem",
              backgroundColor:"#e50914",
              color : "white",
              border : "none",
              borderRadius : "5px",
              cursor : "pointer",
              marginTop : "1rem"
            }

  // const Btn = styled.button`
  //           // padding:1.2rem 2.4rem;
  //           font-size:1.4rem;
  //           background-color:#e50914;
  // `;

     return( 
     <li className={style.card} >
          <div>
            <img
              src={img_url}
              alt="download.jpg"
              width="40%"
              height="40%"
            />
          </div>
          <div className={style.card_content}>
          <h2>Name : {name}</h2>
          <h2>Rating : <span className={rating >= 8.5 ? style.super_hit : style.avrage }>{rating}</span></h2>
          <div className={style.card_desc}>
             <p>Summary : {description}</p>
             <p  className={style.cast_desc}>Cast : {cast}</p>
          </div>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now</button>
            {/* <Btn>Watch Now</Btn> */}
          </a>
          </div>
        </li>);
}

export default SeriesCard;