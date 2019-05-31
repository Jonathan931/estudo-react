import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, DatePicker, InputNumber, Checkbox } from "antd";
import { createDespesa, getDespesa } from "../../store/actions/despesasActions";

class DespesasModal extends PureComponent {
  state = { visible: true };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      if (!err) {
        if (!values.pago) {
          values.pago = false;
        }
        this.props.createDespesa(values);
        this.props.getDespesa();
        this.setState({
          visible: false
        });
      }
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="Cadastro de Despesa"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form {...formItemLayout} onSubmit={this.handleOk}>
          <Form.Item label="Descrição">
            {getFieldDecorator("descricao", {
              rules: [
                {
                  required: true,
                  message: "Por favor, coloque a descrição"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Data">
            {getFieldDecorator("data", {
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Por favor, insira a data!"
                }
              ]
            })(<DatePicker />)}
          </Form.Item>
          <Form.Item label="Valor">
            {getFieldDecorator("valor", {
              rules: [
                {
                  required: true,
                  message: "Por favor, coloque o valor da despesa"
                }
              ]
            })(<InputNumber min={0.1} step={0.1} />)}
          </Form.Item>

          <Form.Item label="Pago">
            {getFieldDecorator("pago", {})(<Checkbox />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDespesa: despesa => dispatch(createDespesa(despesa)),
    getDespesa: () => dispatch(getDespesa())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form.create({ name: "despesas" })(DespesasModal));
