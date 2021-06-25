import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip"
import Button from '@material-ui/core/Button';
import { Divider, Paper, Grid } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PersonRounded } from '@material-ui/icons';
import Badge from "@material-ui/core/Badge"
import { makeStyles } from "@material-ui/core/styles";
import MatchManager from './MatchManager'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
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
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}))

const TournamentManagerListItem = (props) => {
  const classes = useStyles()
  const authToken = localStorage.getItem("token")

  const handleClick = () => {
    fetch("http://127.0.0.1:8080/api/v1/tournaments/" + props.tournament.id, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + authToken
      }
    })
      .then(response => {
        if (response.ok) {
          console.log(props)
          props.setObserver(true)
          return response.json()
        } else {

        }
      })
      .then(data => {
        if (data) {

        }
      })
  }

  return (
    <Accordion className={classes.row}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >

        <Grid container justify="flex-start" alignItems="center">
          <Button variant="contained" color="secondary" size="small"
            className={classes.button}
            startIcon={<PlayCircleFilledIcon />}
            onClick={handleClick}
          >
            Delete
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
        <Grid container justify="center" spacing={3}>
          <Grid container item xs={9} spacing={1}>
            {props.tournament.matches.map((value, index) => {
              if (value.firstParticipant && value.secondParticipant) {
                return <Grid item xs={4}>
                  <Paper key={index} variant='outlined'>
                    <Chip key={index} label={value?.firstParticipant?.username} className={classes.chip} />
                    vs
                    <Chip key={index} label={value?.secondParticipant?.username} className={classes.chip} />
                    {value.winner !== 1 && value.winner !== 2 ? <MatchManager key={index} match={value} /> : <></>}
                  </Paper>
                </Grid>
              }
            })}
          </Grid>
          <Grid item xs={3} justify="center">
            <Typography align="center">Participants</Typography>
            {props.tournament.participants.map((value, index) => {
              return <Chip key={index} label={value.username} className={classes.chip} />
            })}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion >
  )
}

export default TournamentManagerListItem