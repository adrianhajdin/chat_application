import { useState } from 'react';
import axios from 'axios';
import { T, useTranslate } from '@tolgee/react';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
  const { t } = useTranslate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError(
t('incorrect-credentials-error'));
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
<T keyName="chat-application-title" /></h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder={
t('username-input-placeholder')} required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder={
t('password-input-placeholder')} required />
          <div align="center">
            <button type="submit" className="button">
              <span>
<T keyName="start-chatting-button" /></span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
