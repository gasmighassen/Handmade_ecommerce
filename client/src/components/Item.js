import React from 'react'
import "./style/item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
const Item = () => {
  return (
    <div className='card-container'>
        <h1>Popular gifts right now</h1>
        <div className='card-list'>
        <Card  className="card-general" style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg" />
      <Card.Body>
        <Card.Title>Dainty Name</Card.Title>
        <ReactStars
    count={5}
   
    size={24}
    activeColor="#ffd700"
  />
        <Card.Text>
         25.77$
        </Card.Text>
        
      </Card.Body>
    </Card >
    <Card className="card-general" style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg" />
      <Card.Body>
        <Card.Title>Dainty Name</Card.Title>
        <ReactStars
    count={5}
   
    size={24}
    activeColor="#ffd700"
  />
        <Card.Text>
         25.77$
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className="card-general" style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg" />
      <Card.Body className='card-body'>
        <Card.Title>Dainty Name</Card.Title>
        <ReactStars
    count={5}
   
    size={24}
    activeColor="#ffd700"
  />
        <Card.Text>
         25.77$
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className="card-general" style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.etsystatic.com/26992806/r/il/ad5118/3629338159/il_340x270.3629338159_2hah.jpg" />
      <Card.Body>
        <Card.Title>Dainty Name</Card.Title>
        <ReactStars
    count={5}
   
    size={24}
    activeColor="#ffd700"
  />
        <Card.Text>
         25.77$
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className="card-general" style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg" />
      <Card.Body>
        <Card.Title>Dainty Name</Card.Title>
        <ReactStars
    count={5}
   
    size={24}
    activeColor="#ffd700"
  />
        <Card.Text>
         25.77$
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
    </div>
  )
}

export default Item