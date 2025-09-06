import NetflixSeries from "./Components/NetflixSeries"
// import "./Components/Netflix.css"
import style from "./Components/Netflix.module.css"



function App() {

  return (
    <section className="container">
      <h1 className={style.card_heading}>List of Best Netflix Movies</h1>
      <NetflixSeries/>
    </section>
  )
}

export default App
