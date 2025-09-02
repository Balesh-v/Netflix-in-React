import Series from "../Api/Series.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <>
      <ul className="grid grid-three-column">
        {Series.map((Element)=>{
        return  <SeriesCard key={Element.id} Element = {Element}/>
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
