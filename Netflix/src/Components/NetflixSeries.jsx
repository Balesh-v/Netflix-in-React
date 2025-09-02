import Series from "../Api/Series.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <>
      <ul>
        {Series.map((Element)=>{
        return  <SeriesCard key={Element.id} Element = {Element}/>
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
