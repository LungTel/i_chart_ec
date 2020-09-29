import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const data = {
  labels: ["9/28", "9/29", "9/30", "10/1"],
  datasets: [
    {
      label: "来訪者",
      backgroundColor: "#cffff0", //"#000000",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
      data: [360, 0, 0, 0, 0],
    },
    {
      label: "購入者",
      backgroundColor: "#C0C0C0", //"#000000",
      borderColor: "#000",
      pointBorderWidth: 10,
      data: [3, 0, 0, 0, 0],
    },
    {
      label: "サンプル利用者",
      backgroundColor: "#FFFFEF", //"#000000",
      borderColor: "#FFCE56",
      pointBorderWidth: 10,
      data: [9, 0, 0, 0, 0],
    },
  ],
};

/*
360

---------
3

---------
9


---------
32,0009

*/

const LinePlot: React.FC = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <h2>来訪者/購入者 </h2>
      <Line data={data} />

      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              累計訪問者
            </Typography>
            <Typography variant="h6" component="p">
              360顧客
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              累計購買者
            </Typography>
            <Typography variant="h6" component="p">
              3顧客
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              累計購買率
            </Typography>
            <Typography variant="h6" component="p">
              0.8%
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              累計受注金額
            </Typography>
            <Typography variant="h6" component="p">
              ￥32,009
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <br />
      <div>
        【説明】対象が1000顧客。360と訪問顧客率は悪くないと考える。
        <br />
        　購買率 = 購買顧客/訪問顧客 *
        １００が１％を下回っているため、１～３％を目標に対策を講じるのが良いかも。
      </div>
    </div>
  );
};

export default LinePlot;
