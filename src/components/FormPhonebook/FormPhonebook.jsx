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
  // // записываем значение инпута name деревянный метод
  // handleChangeByName = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  // // записываем значение инпута number деревянный метод
  // handleChangeByNumber = e => {
  //   this.setState({ number: e.currentTarget.value });
  // };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // при сабмите отправляем данные для создания обьекта контакта
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  // очищаем инпуты
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  // второй способ
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   const name = form.elements.name.value;
  //   const number = form.elements.number.value;
  //   console.log(name, number);
  //   this.props.onSubmit({ name, number });

  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input value={name} onChange={this.handleChange} />
        <InputNumber value={number} onChange={this.handleChange} />
        <Button />
      </Form>
    );
  }
}
// деревянный метод
// onChange={this.handleChangeByName}
// onChange={this.handleChangeByNumber}
export default FormPhonebook;
