import './Destination.css'
import NewZealand1 from '../assets/newZealand.jpeg'
import NewZealand2 from '../assets/newZealand2.jpeg'
import England1 from '../assets/london_eng.jpg'
import England2 from '../assets/london_eng2.jpg'
import DestinationData from './DestinationData'

const Destination = () =>{
    return(
        <>
            <div className="Destination">
            <h2>Popular Destinations</h2> 
            <p>Tours give you the opportunity to see alot, wihtin a time frame </p>
            </div>
            <DestinationData
                className ="first-des"
                heading = "London, England"
                para = "London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast.  "
                img1 = {England1}
                img2 = {England2}
            />
            <DestinationData 
                className = "first-des-rev"
                heading = "South Island, New Zealand"
                para = "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National Park from hiking trails or a boat on Milford Sound/Piopiotahi. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee jumpers), sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealand's most accessible glaciers."
                img1 = {NewZealand1}
                img2 = {NewZealand2}
            />
        </>
    )
}

export default Destination