import {Link, useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Files() {
  const navigate = useNavigate()

  return (
    <div>

      <Button className='files-btn' variant='primary' onClick={()=>navigate('/')} >Back</Button>

      <nav className='files-nav'>
        <Link className='files-link' to="/src/assets/Murugesan.jpeg" target="_blank" rel="noopener noreferrer" download> Murugesan.JPEG </Link>
      </nav>
      <nav className='files-nav'>
        <Link className='files-link' to="/src/assets/Aaadhar Card.pdf" target="_blank" rel="noopener noreferrer" download> Aaadhar Card.PDF </Link>
      </nav>
      <nav className='files-nav'>
        <Link className='files-link' to="/src/assets/Company Latest increment Letter.pdf" target="_blank" rel="noopener noreferrer" download> Company Latest increment Letter.PDF </Link>
      </nav>
    </div>
  )
}

export default Files
