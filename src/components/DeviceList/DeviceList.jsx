import React from 'react';
import DeviceCard from 'components/DeviceCard/DeviceCard';
import css from './DeviceList.module.css';

// Передаємо пропсами на верхній рівень компоненту
const DeviceList = ({
  devices,
  onDeleteDevice,
  toogleFavorite,
  onOpenModal,
}) => {
  return (
    <ul className={css.cardList}>
      {devices.map(
        // витягуємо усе з device через деструкторизацію
        ({ id, title, brand, price, type, coverImage, isFavorite }) => (
          // або деструктуризуємо поля які потрібно з device
          <DeviceCard
            // Передаємо пропсами дані з компоненту DeviceCard
            // додаємо ключ для методу map, React не зрозуміє що потрібно map-нути
            key={id}
            id={id}
            title={title}
            brand={brand}
            price={price}
            type={type}
            coverImage={coverImage}
            // Передаємо пропсом цей метод
            onDeleteDevice={onDeleteDevice}
            toogleFavorite={toogleFavorite}
            isFavorite={isFavorite}
            onOpenModal={onOpenModal}
          />
        )
      )}
    </ul>
  );
};

export default DeviceList;
