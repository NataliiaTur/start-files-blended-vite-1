import style from './StatisticsItem.module.css';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';

const iconMap = {
  'Happy Customers': <FaRegThumbsUp size={32} />,
  'Registered Members': <MdPeople size={32} />,
  'Available Products': <MdOutlineProductionQuantityLimits size={32} />,
  'Saved Trees': <GiTreeDoor size={32} />,
};

const StatisticsItem = ({ total, title }) => {
  return (
    <>
      {iconMap[title] || <AiFillHeart size={32} />}
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
