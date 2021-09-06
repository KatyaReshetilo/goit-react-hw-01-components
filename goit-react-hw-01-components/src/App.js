import friends from './components/friend-list/friends.json';
import FriendsList from './components/friend-list/friendList';
import Profile from './components/social-profile/profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/statistics';
import statisticalData from './components/statistics/statistical-data.json';
import TransactionHistory from './components/transaction-history/transactionHistory';
import transactions from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <>
      <FriendsList friends={friends} />
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
