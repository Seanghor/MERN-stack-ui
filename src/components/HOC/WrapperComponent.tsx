import  { FC, ReactNode } from 'react';


interface WrapperComponentProps {
  children: ReactNode; 
}


export const WrapperComponent: FC<WrapperComponentProps> = ({ children }) => {
  return (
    <div className='bg- px-[3%] md:px-[4%] lg:px-[5%] large:px-0 min-w-[341px] max-w-[1440px] mx-auto items-center '>
      {children}
    </div>
  )
};



