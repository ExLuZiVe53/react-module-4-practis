import imgDevice from 'assets/images/devicePhoto.jpg';

import { useState } from 'react';
import DeviceList from './DeviceList/DeviceList';
import DeviceForm from './DeviceForm/DeviceForm';

const devicesData = [
  {
    id: 1,
    title: 'Smartfone',
    brand: 'Apple',
    price: '999.99',
    type: 'Mobile',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'laptop',
    brand: 'Dell',
    price: '1299.99',
    type: 'Computer',
    coverImage: imgDevice,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Smartwatch',
    brand: 'Samsung',
    price: '249.99',
    type: 'Wearable',
    coverImage: imgDevice,
    isFavorite: true,
  },
  {
    id: 4,
    title: 'Tablet',
    brand: 'Amazon',
    price: '199.99',
    type: 'Mobile',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 5,
    title: 'TV',
    brand: 'Sony',
    price: '799.99',
    type: 'Elektronics',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 6,
    title: 'Gaming console',
    brand: 'Microsoft',
    price: '399.99',
    type: 'Gaming',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 7,
    title: 'Camera',
    brand: 'Canon',
    price: '599.99',
    type: 'Photography',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 8,
    title: 'Beadphones',
    brand: 'Sony',
    price: '149.99',
    type: 'Audio',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 9,
    title: 'Router',
    brand: 'Linksys',
    price: '79.99',
    type: 'Beatworking',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 10,
    title: 'Fitnes Traker',
    brand: 'Fitbit',
    price: '79.99',
    type: 'Wearable',
    coverImage: imgDevice,
    isFavorite: false,
  },
];

export function App() {
  // створюємо стейт стану

  const [devices, setDevices] = useState(devicesData);
  const [filter, setFilter] = useState('');

  const onDeleteDevice = id => {
    setDevices(devices.filter(device => device.id !== id));
  };

  const onAddDevice = data => {
    // Перевіримо чи існує такий об'єкт в нашому масиві
    if (devices.some(({ title }) => data.title === title)) {
      return alert('This device have already been added');
    }
    console.log(data);
    //  title: 'Beadphones',brand: 'Sony',price: '149.99',type: 'Audio' використовуємо розпилення ...data бо у нас назви полів яку додаємо немає у формі
    const newDevice = {
      ...data,
      coverImage: imgDevice,
      id: new Date().getMilliseconds(),
    };
    // push в React повертає довжину масиву

    setDevices([...devices, newDevice]);
  };

  const onChangeInput = event => {
    setFilter(event.target.value);
  };

  const toogleFavorite = id => {
    setDevices(
      devices.map(device => {
        if (device.id === id) {
          return {
            ...device,
            isFavorite: !device.isFavorite,
          };
        }
        return device;
      })
    );
  };

  {
    const filteredDevices = devices.filter(device =>
      device.title.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return (
      <div>
        <h1>Device store</h1>
        {/* за допомогоюу пропсів пропидаємо метод в компонент */}
        <DeviceForm onAddDevice={onAddDevice} />
        <label>
          <p>Search by title</p>
          <input
            type="text"
            placeholder="Enter search title"
            value={filter}
            onChange={onChangeInput}
          />
        </label>
        {/* за допомогою {} у js пишемо jsx-файли*/}
        {/*Після імпорту передаємо пропси */}
        <DeviceList
          devices={filteredDevices}
          onDeleteDevice={onDeleteDevice}
          toogleFavorite={toogleFavorite}
        />
      </div>
    );
  }
}

// import imgDevice from 'assets/images/devicePhoto.jpg';

// import { Component } from 'react';
// import DeviceList from './DeviceList/DeviceList';
// import DeviceForm from './DeviceForm/DeviceForm';

// const devices = [
//   {
//     id: 1,
//     title: 'Smartfone',
//     brand: 'Apple',
//     price: '999.99',
//     type: 'Mobile',
//     coverImage: imgDevice,
//   },
//   {
//     id: 2,
//     title: 'leptop',
//     brand: 'Dell',
//     price: '1299.99',
//     type: 'Computer',
//     coverImage: imgDevice,
//   },
//   {
//     id: 3,
//     title: 'Smartwatch',
//     brand: 'Samsung',
//     price: '249.99',
//     type: 'Wearable',
//     coverImage: imgDevice,
//   },
//   {
//     id: 4,
//     title: 'Tablet',
//     brand: 'Amazon',
//     price: '199.99',
//     type: 'Mobile',
//     coverImage: imgDevice,
//   },
//   {
//     id: 5,
//     title: 'TV',
//     brand: 'Sony',
//     price: '799.99',
//     type: 'Elektronics',
//     coverImage: imgDevice,
//   },
//   {
//     id: 6,
//     title: 'Gaming console',
//     brand: 'Microsoft',
//     price: '399.99',
//     type: 'Gaming',
//     coverImage: imgDevice,
//   },
//   {
//     id: 7,
//     title: 'Camera',
//     brand: 'Canon',
//     price: '599.99',
//     type: 'Photography',
//     coverImage: imgDevice,
//   },
//   {
//     id: 8,
//     title: 'Beadphones',
//     brand: 'Sony',
//     price: '149.99',
//     type: 'Audio',
//     coverImage: imgDevice,
//   },
//   {
//     id: 9,
//     title: 'Router',
//     brand: 'Linksys',
//     price: '79.99',
//     type: 'Beatworking',
//     coverImage: imgDevice,
//   },
//   {
//     id: 10,
//     title: 'Fitnes Traker',
//     brand: 'Fitbit',
//     price: '79.99',
//     type: 'Wearable',
//     coverImage: imgDevice,
//   },
// ];

// // export const App = () => {
// //   return (
// //     <div>
// //       <h1>Device store</h1>
// //       {/* за допомогою {} у js пишемо jsx-файли */}
// //       {/* Після імпорту передаємо пропси */}
// //       <DeviceList devices={devices} />
// //     </div>
// //   );
// // };

// export class App extends Component {
//   // створюємо стейт стану
//   state = {
//     devices: devices,
//     filter: '',
//   };

//   onDeleteDevice = id => {
//     this.setState({
//       devices: this.state.devices.filter(device => device.id !== id),
//     });
//   };

//   onAddDevice = data => {
//     // Перевіримо чи існує такий об'єкт в нашому масиві
//     if (this.state.devices.some(({ title }) => data.title === title)) {
//       return alert('This device have already been added');
//     }

//     //  title: 'Beadphones',brand: 'Sony',price: '149.99',type: 'Audio' використовуємо розпилення ...data бо у нас назви полів яку додаємо немає у формі
//     const newDevice = {
//       ...data,
//       coverImage: imgDevice,
//       id: new Date().getMilliseconds(),
//     };
//     // push в React повертає довжину масиву
//     this.setState({ devices: [...this.state.devices, newDevice] });
//   };

//   onChangeInput = event => {
//     this.setState({ filter: event.target.value });
//   };

//   render() {
//     const filteredDevices = this.state.devices.filter(device =>
//       device.title
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase().trim())
//     );
//     return (
//       <div>
//         <h1>Device store</h1>
//         {/* за допомогоюу пропсів пропидаємо метод в компонент */}
//         <DeviceForm onAddDevice={this.onAddDevice} />
//         <label>
//           <p>Search by title</p>
//           <input
//             type="text"
//             placeholder="Enter search title"
//             value={this.state.filter}
//             onChange={this.onChangeInput}
//           />
//         </label>
//         {/* за допомогою {} у js пишемо jsx-файли*/}
//         {/*Після імпорту передаємо пропси */}
//         <DeviceList
//           devices={filteredDevices}
//           onDeleteDevice={this.onDeleteDevice}
//         />
//       </div>
//     );
//   }
// }
