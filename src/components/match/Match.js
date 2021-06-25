import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import * as Constants from '../../utils/Constants.js'

const useStyles = makeStyles({
    root: {
        margin: "auto",
        justify: "center",
    },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 100,
  },
});

const Match = () => {
    const [matchData, setMatchData] = useState([{}])
    const classes = useStyles()

    useEffect(() => {
        const authToken = localStorage.getItem("token")
        fetch(Constants.API_URL + "matches", {
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
              return response.json()
            } else if (response.status === 403){
              localStorage.removeItem("token")
              window.location.href="/login";
            }
          })
          .then(data => {
            if (data) {
              setMatchData(data)
            }
          })
      }, [])

    return (
        <Grid container>
        {matchData?.map((value, index) => {
                return <Grid key={index} container justify="center" spacing={3}>
                <Grid item xs={6}>
                <CardActionArea component="a" href="#">
                  <Card className={value.tournament?.title}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography>
                          {value?.firstParticipant?.username} vs {value?.secondParticipant?.username}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {value?.tournamentTitle}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>

                        </Typography>
                        <Typography variant="subtitle1" color={"primary"}>
                         Winner: {value?.winnerParticipant?.username}
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
              </Grid>
      })}

      </Grid>
    )
}

export default Match
