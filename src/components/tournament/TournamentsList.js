import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useState, useEffect} from 'react'


const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const TournamentsList = () => {
  const classes = useStyles();
  const [tournamentsData, setTournamentsData] = useState([])

  useEffect(() => {
    const authToken = localStorage.getItem("token")
    fetch("http://127.0.0.1:8080/api/v1/tournaments", {
      mode: 'cors',
      method: 'GET',
      headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + authToken
      }
  })
      .then(response => {
          console.log(response)
          if (response.ok) {
            console.log("Got tournaments")
          }
      })
      .then(data => {
          if (data) {
            console.log(data)
          }
      })
  console.log("Finished")
  });


  return (
    <div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Disabled Accordion
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

export default TournamentsList