import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { signIn} from './AuthSlice';


function SignIn(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [tarif, setTearif] = useState('');
  const [sign, setSign] = useState(false);
  const [status, setStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const errorUser = useSelector((store: RootState) => store.auth.error);
  const service = useSelector((store: RootState) => store.auth.service);
  const navigate = useNavigate();

  const onHandlePlayerAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch(signIn({ password, email }));
  };

  const onHandleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setPhone(phone.replace(/-/g, ''));
    dispatch(signUp({ name, password, phone, email }));
  };
  const fontSelectClick = function (): void {
    const select = document.getElementById('selectClick');
    select?.addEventListener('change', () => {
      const { value }: any = select;
      if (value === 'Service') {
        setStatus(false);
      } else {
        setStatus(true);
      }
    });
  };
  const fontService = function (): void {
    const select = document.getElementById('selectClickService');
    select?.addEventListener('change', () => {
      const { value } = select;
      if (value) {
        
        setTearif(value);
      }
    });
  };
  useEffect(() => {
    if (user || service) {
      navigate('/');
    }
    fontSelectClick();
    fontService();
  }, [user, status, tarif, sign]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      
        <>
          <h1>Вход администратора</h1>
          <div>
            <form
              style={{ display: 'flex', flexDirection: 'column' }}
              onSubmit={(e) => void onHandlePlayerAdd(e)}
            >
             
              <label className='itemrow' htmlFor="a">
                <p className='itemName'>Email</p>
                <p className='iteminfo'>   <input
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required
                  /> </p>
                 
               
                </label>

                <label className='itemrow' htmlFor="d">
                <p className='itemName'>Пароль</p>
                <p className='iteminfo'>
                <input
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    required
                  /> </p>
                  
                
                </label>
              <button className='btn' type="submit" onClick={() => setSubmitted(true)}>
                Войти
              </button>
         
              {submitted === true && errorUser && <h3>{errorUser}</h3>}
            </form>
         
          </div>
        </>
     
    </>
  );
}

export default SignIn;
