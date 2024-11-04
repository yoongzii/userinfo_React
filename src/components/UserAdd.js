//UserAdd.js
import { useState } from 'react';
// import UserMain from './UserMain'


function UserAdd(props) {
   const {hideAddModal, addUser} = props;
   const [user, setUser] = useState({
         //users.length 사용하기 위해 변수 처리 할 필요
         id: Math.random(), //무작위
         name: '',
         tel: '',
         pic:'./img/user1.jpg',
         birth:'',
         group:'default',
         favorite: false
   })

   const handleChange = (e) => {
      //input 요소는 입력된 value 값을 가져오는 동일한 이벤트

      // setUser(e.target.value)
      // setUser(e.target.name)
      const {name, value} = e.target

      setUser({
         ...user,
         [name] : value
       })
   }

   const onSubmit = (e) =>{
      addUser(user);
      hideAddModal();
   }


   return (
      <div className="user_add">
         <form onSubmit={onSubmit}>
            {/* 이름, 전화번호, 생일, 그룹,  */}
            <dl>
               <dt>이름</dt>
               <dd>
                  <input
                     type="text"
                     name='name'
                     onChange={handleChange}
                     placeholder="이름을 입력"/>
               </dd>
               <dt>연락처</dt>
               <dd>
                  <input
                  type="text"
                  name='tel'
                  required ='required'
                  onChange={handleChange} placeholder="전화번호 입력" />
               </dd>
               <dt>생일</dt>
               <dd>
                  <input
                  type="date"
                  name='birth'
                  onChange={handleChange}
                  />
               </dd>
               <dt>그룹</dt>
               <dd>
                  <div>
                     <select name='group'>
                        <option value="default">기본 그룹</option>
                     </select>
                     <button>그룹 추가</button>
                  </div>
               </dd>
            </dl>
            <button type = "submit" className="default_btn">추가</button>
         </form>
      </div>
   );
}

export default UserAdd;
