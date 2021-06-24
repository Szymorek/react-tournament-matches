import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip"
import Button from '@material-ui/core/Button';
import { Divider, Grid, Badge } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { PersonRounded } from '@material-ui/icons';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TournamentBracket from '../helpers/TournamentBracket'
import { makeStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto",
  },
  summary: {
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  row: {
  },
  column: {
    flexBasis: '33.33%',
  },
  button: {
    margin: theme.spacing(2),
    maxHeight: "40px",
  },
  chip: {
    margin: theme.spacing(0.5)
  },
}))

const TournamentListItem = (props) => {
  const classes = useStyles()
  const authToken = localStorage.getItem("token")

  const handleClick = () => {
    fetch("http://127.0.0.1:8080/api/v1/tournaments/" + props.tournament.id, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + authToken
      }
    })
      .then(response => {
        if (response.ok) {
          props.setObserver(true)
          return response.json()
        } else {

        }
      })
      .then(data => {
        if (data) {
          console.log(data)
        }
      })
  }
  return (
    <Accordion className={classes.row}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.summary}
        id="Tournament-header"
      >
        <Grid container justify="flex-start" alignItems="center">
            <Button
              className="button"
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<PlayCircleFilledIcon />}
              onClick={handleClick}
            >
              Join
            </Button>
            <Typography className={classes.heading}>{props.tournament.title}</Typography>
          <Badge color="primary" margin="auto"
            badgeContent={props.tournament.participants ? `${props.tournament.participants.length}/${props.tournament.places}` :
              `0/${props.tournament.places}`} >
            <PersonRounded />
          </Badge>

        </Grid>

      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Grid container>
        <Grid item xs={9}>
          <TournamentBracket matches={props.tournament.matches.sort((a, b) => (a.number > b.number) ? 1 : -1)} />
        </Grid>
        <Grid items xs={3}>
          {props.tournament.participants.map((value, index) => {
            return <Chip key={index} label={value.username} className={classes.chip} />
          })}
        </Grid>
        </Grid>

      </AccordionDetails>
    </Accordion>
  )
}

export default TournamentListItem
