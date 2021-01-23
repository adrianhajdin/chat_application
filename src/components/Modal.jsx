import { useState } from 'react';
import { getMyData, getChats } from 'react-chat-engine';

const chatID = 165;
const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');

  const handleSubmit = (e) => {
    // e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    };

    // fetch('https://api.chatengine.io/chats/')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((e) => console.log(e));

    // console.log(authObject);

    getMyData(authObject, (data) => console.log(data));

    // const callback = (data) => console.log(data);

    // getChats(authObject, callback);

    // getMessages({ projectID, 'User-Name': username, 'User-Secret': password }, chatID, (chatID, data) => {
    //   console.log(chatID, data);
    // });
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit} className="form__group">
          <input value={username} onChange={(e) => setUsername(e.target.value)} className="form__input first" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form__input" placeholder="Password" required />
          <div className="button_cont" align="center">
            <button type="submit" className="example_f">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Modal;
