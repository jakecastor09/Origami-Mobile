import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='container mx-auto overflow-hidden px-4 py-6'>
      {children}
    </div>
  );
};

export default Container;
