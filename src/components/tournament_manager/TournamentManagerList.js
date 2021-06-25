import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from 'react'
import CreateTournament from '../tournament/CreateTournament'
import TournamentManagerListItem from "./TournamentManagerListItem";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000px",
    margin: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  column: {
    flexBasis: '33.33%',
    justifyItems: 'center'
  },
  columnUsers: {
    flexBasis: '66.66%',
  },
  button: {
    margin: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const TournamentManagerList = () => {
  const classes = useStyles();
  const [observer, setObserver] = useState(false)
  const [tournamentsData, setTournamentsData] = useState([
    {
      id: null,
      user: {},
      title: '',
      places: null,
      prize: null,
      matches: [],
      participants: [],
      judges: []
    }
  ])

  useEffect(() => {
    const authToken = localStorage.getItem("token")
    fetch("http://127.0.0.1:8080/api/v1/tournaments/manager", {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + authToken
      }
    })
      .then(response => {
        if (response.ok) {
          setObserver(false)
          return response.json()
        } else {
          window.location.href="/login";
        }
      })
      .then(data => {
        if (data) {
          setTournamentsData([...data])
        }
      })
  }, [observer])


  return (
    <div className={classes.root}>
      {tournamentsData.map((value, index) => {
        return <TournamentManagerListItem key={index} tournament={value} setObserver={setObserver} />
      })}
      <CreateTournament setObserver={setObserver}/>
    </div>
  );
}

export default TournamentManagerList