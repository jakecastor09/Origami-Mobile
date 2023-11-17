import { IonAlert, IonButton } from '@ionic/react';
import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  id: string;
}
const Alert: React.FC<Props> = ({ children, id }) => {
  return (
    <>
      {children}
      <IonAlert
        header='Alert!'
        trigger={id}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            },
          },
        ]}
        onDidDismiss={({ detail }) =>
          console.log(`Dismissed with role: ${detail.role}`)
        }
      ></IonAlert>
    </>
  );
};

export default Alert;
