
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AddBookReducers } from '../../Redux/Add/Reducers';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function RechercheDisplay() {


  const Allresult = useSelector((state) => state.result.result.items)
  const navigate = useNavigate()
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const dispatch = useDispatch();

  const handleToggleDescription = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const AddBook = (index) => {
    const data = Allresult[index].volumeInfo;
    const auteur = data.authors[0];
    const titre = data.title
    const book = { titre, auteur }
    navigate("/library")
    dispatch(AddBookReducers(book))

  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Allresult ? Allresult.map((element, index) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={element.volumeInfo.imageLinks?.smallThumbnail}
            title="livre"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.volumeInfo.title}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {expandedIndex === index
                ? element.volumeInfo.description
                : element.volumeInfo.description?.slice(0, 100)} {/* Affiche les 100 premiers caractères de la description */}
              {element.volumeInfo.description?.length > 100 && ( /* Affiche le bouton "Voir plus" si la description est plus longue que 100 caractères */
                <Button variant="link" onClick={() => handleToggleDescription(index)}>
                  {expandedIndex === index ? 'Voir moins' : 'Voir plus'}
                </Button>)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" href={element.volumeInfo.infoLink}>Plus Info</Button>
            <Button variant="outlined" onClick={() => AddBook(index)}>Save</Button>
          </CardActions>
        </Card>

      )) : <p style={{ textAlign: "center" }}>Faites votre recherche</p>}
    </div>
  );
}

export default RechercheDisplay;
