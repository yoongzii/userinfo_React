//UserListItem.js

//children -> 컴포넌트 와 컴포넌트 사이에 작성할때
import { useState } from 'react'



function UserListItem(props) {
   /* 하트 아이콘 토글
      const [iconFav, setIconFav] = useState(false)
      const handleIcon = () => {
      setIconFav(!iconFav)
      }

   */

   const {user, handleFavorite ,removeUser} = props;
   const favClick = () => handleFavorite(user.id)
   const removeClick = () => removeUser(user.id)

   return (
      <div className="user_info_wrap">
         <li>
            <div className="user_info_story">
               <div className="user_info_pic">
                  <img src={user.pic} alt="" />
               </div>

               <div className="user_info_text">
                  <strong>{user.name}</strong>
                  <p>{user.birth}</p>
                  <p>{user.tel}</p>
                  <p>{user.group}</p>
               </div>
            </div>

            <div className="icon_wrap">

               {/* <button className="ico_fav" onClick={onClick}> */}
               {/* <button className="ico_fav" onClick={() => handleFavorite()}> */}
               {/* <button className="ico_fav fav_choice"> */}
               {/*
               하트 아이콘 토글
               <button onClick={handleIcon} className={`ico_fav ${ iconFav ? 'fav_choice' : 'ico_fav'}`}>
               */}

               <button onClick={favClick} className={`ico_fav ${ user.favorite ? 'fav_choice' : ''}`}>
                  <i className="ri-heart-fill"></i>
               </button>
               <button className="ico_more">
                  <i className="ri-more-2-line"></i>
               </button>

            <div className="ico_modi">
               <button><i className="ri-edit-2-line"></i></button>
               <button onClick={removeClick}><i className="ri-delete-bin-5-line"></i></button>
            </div>

            </div>
         </li>
      </div>
   );
}

export default UserListItem;
