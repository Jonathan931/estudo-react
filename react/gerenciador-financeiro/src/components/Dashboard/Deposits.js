import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits(props) {
  const classes = useStyles();
  const [valor, setValor] = useState(0.0);
  useEffect(() => {
    let valorTot = 0.0;
    props.despesas.forEach(despesas => {
      valorTot += despesas.valor;
    });
    setValor(valorTot);
  }, [props]);

  return (
    <React.Fragment>
      <Title>Despesas Total</Title>
      <Typography component="p" variant="h4">
        R$ {valor.toFixed(2)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} />
      <div>
        <Link to="/despesas" color="primary">
          Visualizar
        </Link>
      </div>
    </React.Fragment>
  );
}
