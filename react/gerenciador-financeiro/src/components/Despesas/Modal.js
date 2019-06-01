import React, { PureComponent } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Modal, Form, Input, DatePicker, InputNumber, Checkbox } from "antd";
import {
  createDespesa,
  getDespesa,
  editDespesa
} from "../../store/actions/despesasActions";

class CheckboxPago extends PureComponent {
  render() {
    return (
      <Checkbox checked={this.props.value} onChange={this.props.onChange} />
    );
  }
}

class DespesasModal extends PureComponent {
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
    const { isVisible, onHandleCancel, despesa } = this.props;
    return (
      <Modal
        destroyOnClose
        title={!despesa ? "Cadastro de Despesa" : "Edição de Despesa"}
        visible={isVisible}
        onOk={this.handleOk}
        onCancel={onHandleCancel}
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
            {getFieldDecorator("pago", {})(<CheckboxPago />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.despesa && this.props.despesa !== prevProps.despesa) {
      const { despesa, form } = this.props;
      const { descricao, data, valor, pago } = despesa;
      const dataFormatada = moment(data.toDate());
      form.setFieldsValue({ descricao, valor, pago, data: dataFormatada });
    }
  }

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
        if (this.props.despesa) {
          values.id = this.props.despesa.key;
          this.props.editDespesa(values);
        } else {
          this.props.createDespesa(values);
        }
        this.props.getDespesa();
        this.props.onHandleCancel();
      }
    });
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createDespesa: despesa => dispatch(createDespesa(despesa)),
    editDespesa: despesa => dispatch(editDespesa(despesa)),
    getDespesa: () => dispatch(getDespesa())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form.create({ name: "despesas" })(DespesasModal));
