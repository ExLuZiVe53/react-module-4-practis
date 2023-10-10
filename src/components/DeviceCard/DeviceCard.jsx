import { FcLike } from 'react-icons/fc';
import { StyledDeviceCard } from './DeviceCard.styled';
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
  toogleFavorite,
  isFavorite,
  onOpenModal,
}) => {
  return (
    <StyledDeviceCard>
      {/* за допомогою {вставляємо наші пропси} */}
      <img className="image" src={coverImage} alt={title} />
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{type}</p>
      <p>{price}</p>
      {/* через замикання передаємо пропс та викликаємо його */}
      <button type="button" onClick={() => onDeleteDevice(id)}>
        Delete
      </button>
      <button type="button" onClick={() => toogleFavorite(id)}>
        {/* onClick={()=>toogleFavorite пишемо через замикання, бо якщо без підніметься в App функцію event. А нам потрібно саме id*/}
        <FcLike className={`icon-like ${isFavorite ? 'liked' : ''}`} />
      </button>
      <button type="button" onClick={() => onOpenModal(title)}>
        Click to see the details
      </button>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
