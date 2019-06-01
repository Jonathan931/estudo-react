import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import moment from "moment";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

export default function Chart(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const retorno = props.despesas.map(despesa =>
      createData(moment(despesa.data.toDate()).format("MM/YYYY"), despesa.valor)
    );
    setData(retorno);
  }, [props]);

  return (
    <React.Fragment>
      <Title>Despesas</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              (R$)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
