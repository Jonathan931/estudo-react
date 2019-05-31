import React, { PureComponent } from "react";
import { Row, Table, Divider, Tag, Card, Input, Col, Popconfirm } from "antd";
import { connect } from "react-redux";
import { getDespesa, removeDespesa } from "../../store/actions/despesasActions";
import moment from "moment";

const Search = Input.Search;
moment.locale("pt-BR");

class DespesasList extends PureComponent {
  render() {
    const data = this.props.despesas || [];
    const columns = [
      {
        title: "Descrição",
        dataIndex: "descricao",
        key: "descricao"
      },
      {
        title: "Data",
        dataIndex: "data",
        key: "data",
        render: data => (
          <span>{moment(data.toDate()).format("DD/MM/YYYY")}</span>
        )
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
        title: "Valor",
        key: "valor",
        dataIndex: "valor",
        render: valor => <span>{valor.toFixed(2)}</span>
      },
      {
        title: "Ação",
        key: "action",
        render: (text, record) => (
          <span>
            <span style={{ color: "blue", cursor: "pointer" }}>Editar</span>
            <Divider type="vertical" />
            <Popconfirm
              title="Deseja remover?"
              onConfirm={() => this.handleRemove(record)}
              okText="Sim"
              cancelText="Não"
            >
              <span style={{ color: "blue", cursor: "pointer" }}>Delete</span>
            </Popconfirm>
          </span>
        )
      }
    ];

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

  handleRemove = data => {
    this.props.removeDespesa(data.key);
    this.props.getDespesa();
  };
}

const mapStateToProps = state => {
  return {
    despesas: state.despesas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeDespesa: id => dispatch(removeDespesa(id)),
    getDespesa: () => dispatch(getDespesa())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DespesasList);
