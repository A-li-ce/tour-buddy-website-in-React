import './Cont.css'

function Cont() {
  return (
    <div className='Cont'>
      <h2>Send Message to us!</h2>
      <form action="/">
        <input placeholder='Name' />
        <input placeholder='Email' />
        <input placeholder='Subject' />
        <textarea placeholder='Message'  cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Cont
