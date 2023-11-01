import './Trip.css'
import Tahiti from '../assets/Tahiti_trip.jpeg'
import Banff from '../assets/banff.jpeg'
import Barcelona from '../assets/Barcelona.jpeg'
import TripData from './TripData'

function Trip() {
  return (
    <>
      <div className="Trip">
        <h2>Recent Trips</h2>
        <p>You can discover unique destinations using Google Maps</p>
      </div>
      <div className="trip-card">
            <TripData
                image={Tahiti}
                heading = "Trip to Tahiti"
                para = "Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow combined with experiencing an ancient culture. Beyond the posh resorts, Tahiti boasts black sand and golden beaches, a bustling capital (Papeete) and prime snorkeling and surfing conditions."            
            />
            <TripData
                image={Banff}
                heading = "Trip to Banff"
                para = "Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow combined with experiencing an ancient culture. Beyond the posh resorts, Tahiti boasts black sand and golden beaches, a bustling capital (Papeete) and prime snorkeling and surfing conditions."            
            />
            <TripData
                image={Barcelona}
                heading = "Trip to Barcelona"
                para = "This Spanish city is a feast for the eyes: Visitors can walk past medieval architecture in the Barri Gòtic, snap photos of the intricate Basílica de la Sagrada Família and marvel at more of Antoni Gaudí's whimsical creations in Park Güell. Meanwhile, Barceloneta beach and the Parc de la Ciutadella are perfect places in sunny day"            
            />
      </div>
      
    </>
  )
}

export default Trip
