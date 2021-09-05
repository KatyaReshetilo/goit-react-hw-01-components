import PropTypes from 'prop-types';
import s from './friendList.module.css';
export default function Friends({ isOnline, url, name }) {
    return <li className={s.item}>
        { isOnline===true ? (<span className={s.statusOn}></span>):(<span className={s.statusOf}></span>)}
        <img className="avatar" src={url} alt="" width="48" />
        <p className={s.name}>{name}</p>
    </li>;
}

Friends.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

}

