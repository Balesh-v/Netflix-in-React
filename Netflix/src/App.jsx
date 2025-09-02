import NetflixSeries from "./Components/NetflixSeries"
import "./Components/Netflix.css"



function App() {

  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Movies</h1>
      <NetflixSeries/>
    </section>
  )
}

export default App
