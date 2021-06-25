import React from 'react';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Radio, Button, FormControlLabel, Grid } from '@material-ui/core';

const MatchManager = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0)

    const handleChange = e => {
        setSelectedValue(e.target.value)
    }

    const handleClick = () => {
        const authToken = localStorage.getItem("token")
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
                if (response.ok) {
                    props.setObserver(true)
                    setOpen(false)
                }
            })
            .then(data => {
                if (data) {
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
            <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
                Decide
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Decide Winner of {props.match?.firstParticipant.username} vs {props.match?.secondParticipant.username}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose user who won this match.
                    </DialogContentText>
                    <Grid container justify="space-between">
                    <FormControlLabel value={1} control={<Radio
                        checked={selectedValue === 1}
                        onChange={handleChange}
                        value={1}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />} label={props.match?.firstParticipant.username}/>
                    <FormControlLabel value={2} control={<Radio
                        checked={selectedValue === 2}
                        onChange={handleChange}
                        value={2}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />} label={props.match?.secondParticipant.username}/>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container justify="space-between">
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleClick} variant="contained" color="primary">
                        Confirm
                    </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MatchManager
