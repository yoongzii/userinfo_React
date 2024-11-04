//UserList.js
import UserListItem from "./UserListItem";

function UserList(props) {
   const {users, handleFavorite, removeUser} = props;

   return (
      <>
      {/* UserList (PostList 참조) */}
         <ul className="user_list_item">
            {/* li -> UserListItem 컴포넌트로 변경 */}
            {/* {users.map(user => <li key={user.id}>{user.name}</li>)} */}

            {users.map(user => <UserListItem key={user.id} user={user} handleFavorite={handleFavorite} removeUser={removeUser}/>)}
         </ul>
      </>
   );
}

export default UserList;
