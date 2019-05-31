import React, { PureComponent } from "react";
import { Row, Table, Divider, Tag, Card, Input, Col } from "antd";
import { connect } from "react-redux";
import { getDepesa } from "../../store/actions/despesasActions";

const Search = Input.Search;

const columns = [
  {
    title: "Descrição",
    dataIndex: "descricao",
    key: "descricao"
  },
  {
    title: "Data",
    dataIndex: "data",
    key: "data"
  },
  {
    title: "Pago",
    key: "pago",
    dataIndex: "pago",
    render: pago => (
      <span>
        <Tag color={!pago ? "geekblue" : "green"}>
          {!pago ? "PENDENTE" : "PAGO"}
        </Tag>
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Editar </a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

class DespesasList extends PureComponent {
  render() {
    const data = this.props.despesas || [];
    console.log(data);
    return (
      <div style={{ width: "100%", marginBottom: 10, marginTop: 10 }}>
        <h1 style={{ textAlign: `left`, marginLeft: "2.5%", fontSize: 20 }}>
          Despesas
        </h1>
        <Card
          style={{
            width: "95%",
            margin: "0 auto"
          }}
        >
          <Row style={{ paddingTop: 10 }}>
            <Col span={10}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
              />
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
  componentDidMount() {
    this.props.getDespesa();
  }
}

const mapStateToProps = state => {
  return {
    despesas: state.despesas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDespesa: () => dispatch(getDepesa())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DespesasList);
