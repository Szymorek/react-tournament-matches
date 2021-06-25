import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

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
    width: 160,
  },
});

const Match = () => {
    const [matchData, setMatchData] = useState([{}])
    const classes = useStyles()

    useEffect(() => {
        const authToken = localStorage.getItem("token")
        fetch("http://127.0.0.1:8080/api/v1/matches", {
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
                console.log(data)
              setMatchData([data])
            }
          })
      }, [])

      console.log(matchData)
    return (
        <Grid container>
        {matchData?.map((value, index) => {
                return <Grid key={index} container justify="center">
                <Grid item xs={6}>
                <CardActionArea component="a" href="#">
                  <Card className={value.tournament?.title}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
        
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
        
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
        
                        </Typography>
                        <Typography variant="subtitle1" color={"primary"}>
                          Continue reading...
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
