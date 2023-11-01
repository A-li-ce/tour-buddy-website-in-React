import './Footer.css'

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="top">
            <div>
                <h2>Trip Buddy</h2>
                <p>Choose your favourite destination</p>
            </div>
            <div>
               <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a> 
               <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a> 
               <a href="/">
                    <i className='fa-brands fa-twitter-square'></i>
                </a> 
               <a href="/">
                    <i className='fa-brands fa-behance-square'></i>
                </a> 
            </div>
        </div>

        <div className="bottom">
            
            <div>
                <h4>General</h4>
                <a href='/'>  Countries</a>
                <a href='/'>  Regions </a>
                <a href='/'>  Cities </a>
                <a href='/'>  Districts </a>
                <a href='/'>  Airaorts </a>
                <a href='/'>  Hotels </a>
                <a href='/'>  alaces of interest </a>
            </div>

            <div>
                <h4>facilities</h4>
                <a href='/'> Homes </a>
                <a href='/'> Aaartments</a>
                <a href='/'> Resorts</a>
                <a href='/'> Villas</a>
                <a href='/'> Hostels</a>
                <a href='/'> B&Bs</a>
                <a href='/'> Guest houses</a>
            </div>            

            <div>
                <h4>Contact us</h4>
                <p> <i className="fa-solid fa-envelope"></i> tourbuddy@gmai.com</p>
                <p> <i className="fa-solid fa-phone"></i> +00 000 000 0000</p>
                <p> <i className="fa-solid fa-phone"></i> +99 999 999 999</p>
            </div>                       
        </div>
            <div className="cpy">
                 Copyright &copy; Trip buddy.com&#8482;. All rights reserved
            </div>
      </div>
    </>
  )
}

export default Footer
