import { CgSoftwareDownload } from "react-icons/cg"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AddBookReducers } from '../../Redux/Add/Reducers';


function RechercheDisplay() {


  const Allresult  = useSelector((state)=>state.result.result.items)
  
  const [expandedIndex, setExpandedIndex] = useState(-1);
 
  const dispatch = useDispatch();
 
  const handleToggleDescription = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  
  const AddBook = (index)=>{
    const data = Allresult[index].volumeInfo;
    const auteur = data.authors[0];
    const titre = data.title
    const book = {titre , auteur}
    dispatch(AddBookReducers(book))
  }
 
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Allresult ? Allresult.map((element, index) => (
     
       <Card key={index} style={{ width: '18rem', margin: '10px' }}  >
          <Card.Img variant="top" style={{height : '340px'}} src={element.volumeInfo.imageLinks?.smallThumbnail} />
          <Card.Body>
            <Card.Title>{element.volumeInfo.title}</Card.Title>
            <Card.Text>
              {expandedIndex === index
                ? element.volumeInfo.description
                : element.volumeInfo.description?.slice(0, 100)} {/* Affiche les 100 premiers caractères de la description */}
              {element.volumeInfo.description?.length > 100 && ( /* Affiche le bouton "Voir plus" si la description est plus longue que 100 caractères */
                <Button variant="link" onClick={() => handleToggleDescription(index)}>
                  {expandedIndex === index ? 'Voir moins' : 'Voir plus'}
                </Button>
              )}
            </Card.Text>
            <Button variant="outline-info" href={element.volumeInfo.infoLink}>Plus d'infos</Button>
            <Button variant="outline-warning" onClick={()=>AddBook(index)}>Enregistrer</Button>
          </Card.Body>
        </Card>
     
     )) : <p style={{textAlign : "center"}}>Faites votre recherche</p>}
    </div>
  );
}

export default RechercheDisplay;
