import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import InputNumber from './InputNumber';
import { Form } from './FormPhonebook.styled';

class FormPhonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  // записываем значение инпута name
  handleChangeByName = e => {
    this.setState({ name: e.currentTarget.value });
  };
  // записываем значение инпута number
  handleChangeByNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };
  // при сабмите отправляем данные для создания обьекта контакта
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    // очищаем инпуты
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChangeByName} value={name} />
        <InputNumber onChange={this.handleChangeByNumber} value={number} />
        <Button />
      </Form>
    );
  }
}

export default FormPhonebook;
