import css from './DeviceCard.module.css';
// створюємо розмітку
// приймаємо пропси у вигляді об'єкту для рендеру розмітки у DeviceCard
const DeviceCard = ({
  id,
  title,
  brand,
  price,
  type,
  coverImage,
  onDeleteDevice,
}) => {
  return (
    <li className={css.item}>
      {/* за допомогою {вставляємо наші пропси} */}
      <img src={coverImage} width={300} alt={title} />
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{type}</p>
      <p>{price}</p>
      {/* через замикання передаємо пропс та викликаємо його */}
      <button type="button" onClick={() => onDeleteDevice(id)}>
        Delete
      </button>
    </li>
  );
};

export default DeviceCard;
