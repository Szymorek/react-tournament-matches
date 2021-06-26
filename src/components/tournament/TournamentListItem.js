import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip"
import Button from '@material-ui/core/Button';
import { Divider, Grid, Badge} from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { PersonRounded } from '@material-ui/icons';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TournamentBracket from '../helpers/TournamentBracket'
import { makeStyles } from "@material-ui/core/styles";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import * as Constants from '../../utils/Constants.js'

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

  const getWinner = () => {
    return props.tournament?.matches?.[props.tournament.places-2]?.winnerParticipant?.username
  }

  const handleClick = e => {
    e.stopPropagation()
    fetch(Constants.API_URL + "tournaments/" + props.tournament.id, {
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
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<PlayCircleFilledIcon />}
              onClick={handleClick}
              onFocus={(event) => event.stopPropagation()}
              disabled={props.tournament?.participants?.length === props.tournament?.places}
            >
              Join
            </Button>
            <Typography className={classes.heading}>{props.tournament.title}</Typography>
          <Badge color={props.tournament?.participants?.length === props.tournament?.places ? "error" : "primary"} margin="auto"
            badgeContent={props.tournament.participants ? `${props.tournament.participants.length}/${props.tournament.places}` :
              `0/${props.tournament.places}`} >
            <PersonRounded />
          </Badge>
          &nbsp;&nbsp;&nbsp;
          <Badge color="primary" margin="auto" max={999}
            badgeContent={props.tournament.prize}>
            <AttachMoneyIcon />
          </Badge>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {getWinner()? [< EmojiEventsIcon />, <Chip label={getWinner()} color="secondary"/>] : null}
          

        </Grid>

      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Grid container>
        <Grid item xs={9}>
          <TournamentBracket matches={props.tournament.matches.sort((a, b) => (a.number > b.number) ? 1 : -1)}
            participants={props.tournament.places} />
        </Grid>
        <Grid item xs={3}>
          {props.tournament.participants.map((value, index) => {
            return <Chip key={index} label={value.username} className={classes.chip}
              color={getWinner() === value.username ? "secondary" : "default"}/>
          })}
        </Grid>
        </Grid>

      </AccordionDetails>
    </Accordion>
  )
}

export default TournamentListItem
