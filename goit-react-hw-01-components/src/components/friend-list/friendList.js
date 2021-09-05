import Friends from "./friends";
import s from './friendList.module.css';



export default function FriendsList({friends}) {
return <ul className={s.friendList}>
  {friends.map(friend =>(
       <Friends
      key={friend.id}
      isOnline={friend.isOnline}
      url={friend.avatar}
      name={friend.name} />
    ))}
</ul>
}