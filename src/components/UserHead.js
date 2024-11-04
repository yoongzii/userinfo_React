//UserHead.js


function UserHead(props) {
   const {showAddModal, users} = props;
   const onClick = () => showAddModal()
   return (
      <header>
         <h1>사용자 관리</h1>
         <div>
            <p>{users.length}명</p>
            <button onClick={onClick} className="btn_add">
               <i className="ri-user-add-line"></i>
            </button>
         </div>
      </header>
   );
}

export default UserHead;
