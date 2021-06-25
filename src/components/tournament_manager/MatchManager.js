import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Radio, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        "& .MuiFilledInput-root": {
            background: "rgb(232, 241, 250)"
        },
        backgroundColor: theme.palette.background.paper,
        width: '50%',
        height: '50%',
        maxHeight: '500px',
        minWidth: '250px',
        maxWidth: '500px',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const MatchManager = ( props ) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0)

    const handleChange = e => {
        console.log(`selected value - ${e.target.value}`)
        setSelectedValue(e.target.value)
    }

    const handleClick = () => {
        const authToken = localStorage.getItem("token")
        console.log("Sending put")
        fetch(`http://127.0.0.1:8080/api/v1/matches/${props.match.id}/${selectedValue}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + authToken
            }
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    props.setObserver(true)
                    setOpen(false)
                }
            })
            .then(data => {
                if (data) {
                    console.log(data)
                }
            })
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Decide
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Decide Winner of {props.match?.firstParticipant?.username} vs {props.match?.secondParticipant?.username}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose user who won this match.
            </DialogContentText>
            <Radio
                                    checked={selectedValue == 1}
                                    onChange={handleChange}
                                    value={1}
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                                                <Radio
                                    checked={selectedValue == 2}
                                    onChange={handleChange}
                                    value={2}
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClick} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default MatchManager
