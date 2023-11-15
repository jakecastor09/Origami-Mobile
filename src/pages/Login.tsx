import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  useIonRouter,
} from '@ionic/react';
import React, { FormEvent } from 'react';
import logo from '../assets/logo-sm.png';
import Container from '../components/Container';

const Login: React.FC = () => {
  const router = useIonRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if Successfully Login
    router.push('/app/home', 'root', 'replace');
  };
  return (
    <IonPage>
      <IonContent scrollY={false}>
        <Container>
          <div className='mt-10 py-10 flex flex-col items-center text-center'>
            <img src={logo} alt='Origami' width={'80px'} />
            <h1 className='mt-3 uppercase text-2xl text-gray900 font-bold'>
              Origami
            </h1>
            <p className='text-grey400 text-sm mt-2 max-w-[14rem] leading-relaxed'>
              Welcome Parent! Please Log In to Track Your Child's Progress
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <IonList>
              <IonItem className='ion-margin-bottom'>
                <IonInput
                  label='Username'
                  labelPlacement='stacked'
                  className='text-grey900'
                />
              </IonItem>
              <IonItem>
                <IonInput
                  label='Password'
                  labelPlacement='stacked'
                  className='text-grey900'
                />
              </IonItem>
            </IonList>
            <p className='text-xs font-bold text-grey600 my-6 text-right'>
              Forget Password?
            </p>
            <div>
              <IonButton type='submit' expand='block' className='mt-10'>
                Login
              </IonButton>
            </div>
          </form>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Login;
