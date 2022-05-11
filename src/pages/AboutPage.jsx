import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> about project </h1>
        <p> day la trang gioi thieu </p>
      </div>
      
      <p>
        <Link to='/'> back to home </Link>
      </p>
    </Card>
  )
}
export default AboutPage