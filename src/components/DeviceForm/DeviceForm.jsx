import { useState } from 'react';

export default function DeviceForm({ onAddDevice }) {
  // створюємо state
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  //  Створюємо метод для зміни стейту
  const onInputChangeValue = event => {
    // через Switch-case проходимось по нашим стейтам та підставляємо той котрий відповідає умові

    const { name, value } = event.target;
    // деструкторизуємо name та value з event.taget
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'brand':
        setBrand(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const formData = {
      // якщо ключ та значення співпадають можемо друге значення не записувати
      // title: title,
      // brand: brand,
      // price: price,
      // type: type,
      title,
      brand,
      price,
      type,
    };

    // оскільки очікуємо пропс onAddDevice, його потрібно прийняти у батьківському компоненті
    onAddDevice(formData);
    // reset form, скидуємо значення в state до початкового

    setTitle('');
    setBrand('');
    setPrice('');
    setType('');
  };

  //   // Деструкторизуємо наші пропси зі стейту
  //   const { title, brand, price, type } = this.state;
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <p>Title:</p>
          <input
            type="text"
            //   значення ім'я name має співпадати з нашим стейтом
            name="title"
            value={title}
            onChange={this.onInputChangeValue}
            required
          />
        </label>
        <label>
          <p>Brand:</p>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={this.onInputChangeValue}
            required
          />
        </label>
        <label>
          <p>Price:</p>
          <input
            type="text"
            name="price"
            value={price}
            onChange={this.onInputChangeValue}
            required
          />
        </label>
        <label>
          <p>Type:</p>
          <input
            type="text"
            name="type"
            value={type}
            onChange={this.onInputChangeValue}
            required
          />
        </label>
        <br />
        <button type="submit">Add device</button>
      </form>
    </div>
  );
}

// import { Component } from 'react';

// export default class DeviceForm extends Component {
//   // створюємо state
//   state = {
//     title: '',
//     brand: '',
//     price: '',
//     type: '',
//   };

//   //  Створюємо метод для зміни стейту
//   onInputChangeValue = event => {
//     // коли звертаємось до поля об'єкту використовуємо [] для того щоб написати вираз який підставить назву властивості об'єкта
//     // event.target.name - куди записувати?
//     // event.target.value - що записувати?
//     // {key:value}
//     this.setState({ [event.target.name]: event.target.value });
//     // патерн контрольовані форми
//   };

//   onFormSubmit = event => {
//     event.preventDefault();
//     const formData = {
//       title: this.state.title,
//       brand: this.state.brand,
//       price: this.state.price,
//       type: this.state.type,
//     };
//     // прокидуємо наш пропс з класового компоненту в метод
//     this.props.onAddDevice(formData);
//     // reset form, скидуємо значення в state до початкового
//     this.setState({
//       title: '',
//       brand: '',
//       price: '',
//       type: '',
//     });
//   };

//   render() {
//     // Деструкторизуємо наші пропси зі стейту
//     const { title, brand, price, type } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <label>
//             <p>Title:</p>
//             <input
//               type="text"
//               //   значення ім'я name має співпадати з нашим стейтом
//               name="title"
//               value={title}
//               onChange={this.onInputChangeValue}
//               required
//             />
//           </label>
//           <label>
//             <p>Brand:</p>
//             <input
//               type="text"
//               name="brand"
//               value={brand}
//               onChange={this.onInputChangeValue}
//               required
//             />
//           </label>
//           <label>
//             <p>Price:</p>
//             <input
//               type="text"
//               name="price"
//               value={price}
//               onChange={this.onInputChangeValue}
//               required
//             />
//           </label>
//           <label>
//             <p>Type:</p>
//             <input
//               type="text"
//               name="type"
//               value={type}
//               onChange={this.onInputChangeValue}
//               required
//             />
//           </label>
//           <br />
//           <button type="submit">Add device</button>
//         </form>
//       </div>
//     );
//   }
// }
