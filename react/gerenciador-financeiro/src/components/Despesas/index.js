import React, { PureComponent } from "react";
import List from "./List";
import Modal from "./Modal";
import { Row, Card, Col, Button, Input } from "antd";
import { Container, Center } from "./styles";

const Search = Input.Search;

class Despesas extends PureComponent {
  state = { visible: false, despesa: null };

  render() {
    return (
      <Container>
        <h1>Despesas</h1>
        <Center>
          <Card>
            <Row>
              <Col span={10}>
                <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                />
              </Col>
              <Col offset={10} span={4}>
                <Button onClick={this.showModal} type="primary" icon="plus">
                  Nova Despesa
                </Button>
              </Col>
            </Row>
            <List onSetDespesa={this.handleSetDespesa} />
            <Modal
              onHandleCancel={this.handleCancel}
              isVisible={this.state.visible}
              despesa={this.state.despesa}
            />
          </Card>
        </Center>
      </Container>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
      despesa: null
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleSetDespesa = despesa => {
    console.log(despesa);
    this.setState({
      despesa,
      visible: true
    });
  };
}

export default Despesas;
