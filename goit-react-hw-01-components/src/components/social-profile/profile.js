import s from './profile.module.css';
import PropTypes from 'prop-types';
export default function Profile({ name, avatar, tag, location, stats }) {
    return <div className={s.profile}>
        <div className={s.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={s.avatar}
            />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className={s.label}>Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className={s.label}>Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className={s.label}>Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul></div>;
    
}


Profile.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}