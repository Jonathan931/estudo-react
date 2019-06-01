import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { connect } from "react-redux";
import { useStyles } from "../../screens/styles";
import { getDespesa } from "../../store/actions/despesasActions";

function Dashboard(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.getDespesa();
      setMount(true);
    }
  }, [mounted, props]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart despesas={props.despesas || []} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits despesas={props.despesas || []} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    despesas: state.despesas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDespesa: () => dispatch(getDespesa())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
