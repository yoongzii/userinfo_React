//UserMain.js
import { useState } from "react"
import UserAdd from "./UserAdd";
import UserHead from "./UserHead";
import UserList from "./UserList";

function UserMain() {
   const[users, setUsers]= useState([
      {
         id:1,
         name: '정해인',
         tel: '010-1234-5678',
         pic:'./img/user1.jpg',
         birth:'1997-11-15',
         group:'친구',
         // favorite: true  / [참고]
         //cardgame app.js - const updateCards = ()=>{}

      }

   ])

   const [addModal, setAddModal] =useState(false)
   const showAddModal = () => setAddModal(true)
   const hideAddModal = () => setAddModal(false)

   const addUser = (user) => {
      setUsers([
      ...users, user
      ])
   }

   const handleFavorite = userId => {
      const updateUsers = users.map(user =>
         user.id === userId ?
         {...user, favorite : !user.favorite}
         : user

   )
      setUsers(updateUsers)
   }

   const removeUser = (userId) => {

      //휴지통 아이콘 클릭한 요소 받아와서 id 받아와서
      // 전체 users 배열 데이터를 순회하면서 조건에 따라 필터링하는
      // 삭제할때는 filter () 이용해서 클릭한 요소의 아이디를 제외한 나머지 요소만  updateUsers 변수에 재배열
      //users의 setter 함수에  updateUser 변수

      const updateUsers = users.filter(user =>user.id !== userId )
      setUsers(updateUsers)
   }

   return (
      <div className="user_main">
         <UserHead showAddModal={showAddModal} users={users} />
         <UserList users={users} handleFavorite={handleFavorite} removeUser={removeUser}/>
         {addModal && <UserAdd addUser={addUser} hideAddModal={hideAddModal}/>}
      </div>
   );
}

export default UserMain;

