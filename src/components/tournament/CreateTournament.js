import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import { TextField, Paper, Button, Fab } from '@material-ui/core';


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
        maxHeight: '200px',
        minWidth: '250px',
        maxWidth: '500px',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    float: {
        margin: 0,
        top: 'auto',
        right: "50%",
        bottom: 20,
        position: 'fixed',
    }
}));


const CreateTournament = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        title: '',
        places: 0,
        prize: 0,
        user: {},
        participants: [],
        judges: []
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    const handleClick = () => {
        const authToken = localStorage.getItem("token")
        fetch("http://127.0.0.1:8080/api/v1/tournaments", {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + authToken
            },
            body: JSON.stringify(values)
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
                }
            })
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setValues({ title: '', places: 0, user: {}, prize: 0, participants: [], judges: [] })
    };

    return (
        <div>
            <Fab color="primary" className={classes.float} aria-label="add" onClick={handleOpen}>
                <AddIcon />
            </Fab>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper>
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Tournament Title"
                                    name="title"
                                    autoComplete="title"
                                    autoFocus
                                    value={values.title}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    type="number"
                                    required
                                    size="small"
                                    id="prize"
                                    label="Prize"
                                    name="prize"
                                    autoComplete="prize"
                                    autoFocus
                                    value={values.prize}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    type="number"
                                    required
                                    size="small"
                                    id="places"
                                    label="Number of players"
                                    name="places"
                                    autoComplete="places"
                                    autoFocus
                                    value={values.places}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid container item xs={12} justify="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={handleClick}
                                >Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )
}

export default CreateTournament
