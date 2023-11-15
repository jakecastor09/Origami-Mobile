import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const OverviewCardContainer: React.FC<Props> = ({ children }: Props) => {
  return <div className='mt-8 flex flex-col gap-4'>{children}</div>;
};

export default OverviewCardContainer;


