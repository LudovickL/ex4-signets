import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { green, red } from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#900');

  const ButtonRouge = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[900],
    },
  }))(Button);

  const ButtonVert = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: green[700],
    },
  }))(Button);

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC','#0693E3']}
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
          />
        </DialogContent>
        <DialogActions>
          <ButtonRouge id="btnAnnuler" onClick={()=>setOuvert(false)} color="primary" variant="contained">
            Annuler
          </ButtonRouge>
          <ButtonVert id="btnAjouter" onClick={() => nom !== '' && gererAjout(nom, couverture, couleur)} color="secondary" variant="contained">
            Ajouter
          </ButtonVert>
        </DialogActions>
      </Dialog>
    </div>
  );
}