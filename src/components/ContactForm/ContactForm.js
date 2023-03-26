import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isValidateForm = this.validateForm();
    if (!isValidateForm) {
      alert('Please fill in both name and phone fields.');
      return;
    }
    onAdd({ id: uuid(), name, phone });
    this.reset();
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { checkName } = this.props;
    if (!name || !phone) {
      return false;
    }
    return checkName(name);
  };

  reset = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={this.handleChangeForm}
        />

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
