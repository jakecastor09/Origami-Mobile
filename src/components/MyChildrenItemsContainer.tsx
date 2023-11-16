import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const MyChildrenItemsContainer: React.FC<Props> = ({ children }: Props) => {
  return <div className='grid grid-cols-1 divide-y'>{children}</div>;
};

export default MyChildrenItemsContainer;
