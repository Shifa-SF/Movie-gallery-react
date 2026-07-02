import { useState } from 'react'
import './App.css'
import Movie from './assets/Movie'
import Ratatouille from './assets/Ratatouille.jpeg'
import Hinana from './assets/HiNana.jpeg'
import Omg from './assets/Omg.jpeg'
import Premam from './assets/Premam.jpeg'
import Remo from './assets/Remo.jpeg'
import ThulaadhaManamThullum from './assets/ThulaadhaManamThullum.jpeg'
import Vtv from './assets/Vtv.jpeg'
import KakaKaka from './assets/KakaKaka.jpeg'
import Sivaji from './assets/Sivaji.jpg'
import Three from './assets/Three.jpeg'
import Conjuring from './assets/Conjuring.jpg'
import Priyamanavale from './assets/Priyamanavale.jpeg'
import FinalDestination from './assets/FinalDestination.jpg'
import TrainToBusan from './assets/TrainToBusan.jpg'
import WithLove from './assets/WithLove.jpeg'



function App() {

  return (
    <>
   
<h1 className="heading">🎬 My Favourite Movies</h1>

<div className="container">
<Movie title="Ratatouille" year="2007" rating="8.1⭐" image={Ratatouille}/>
<Movie title="Hi Nana" year="2023" rating="8.3⭐" image={Hinana}/>
<Movie title="Oh My Kadavule" year="2020" rating="8⭐" image={Omg}/>
<Movie title="Premam" year="2015" rating="8.3⭐" image={Premam}/>
<Movie title="Remo" year="2016" rating="6⭐" image={Remo}/>
<Movie title="Thulatha Manamum Thullum" year="1999" rating="8.3⭐" image={ThulaadhaManamThullum}/>
<Movie title="Vinnai Thaandi Varuvaayaa" year="2010" rating="8.1⭐" image={Vtv}/>
<Movie title="With Love" year="2026" rating="7.6⭐" image={WithLove}/>
<Movie title="Kaka Kaka" year="2003" rating="8⭐" image={KakaKaka}/>
<Movie title="Sivaji: The Boss" year="2007" rating="7.6⭐" image={Sivaji}/>
<Movie title="3" year="2012" rating="7.4⭐" image={Three}/>
<Movie title="Conjuring" year="2013" rating="7.5⭐" image={Conjuring}/>
<Movie title="Priyamanavale" year="2000" rating="7.5⭐" image={Priyamanavale}/>
<Movie title="FinalDestination" year="2000" rating="6.7⭐" image={FinalDestination}/>
<Movie title="Train To Busan" year="2016" rating="7.6⭐" image={TrainToBusan}/>
</div>
    </>
  )
}

export default App
