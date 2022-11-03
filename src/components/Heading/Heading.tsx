import React from 'react';
import { LargeHeading, MediumHeading, SmallHeading } from './Heading.style';
export {
  LargeHeading,
  MediumHeading,
  SmallHeading,
} from "./Heading.style";

export interface IHeading {
  size: 'L' | 'M' | 'S';
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Heading: React.FC<IHeading> = ({
  size,
  children,
  color,
  className = ''
}) => {
  switch (size) {
    case 'L':
      return (
        <LargeHeading color={color} className={`${className}`}>
          {children}
        </LargeHeading>
      );
    case 'M':
      return (
        <MediumHeading color={color} className={` ${className}`}>
          {children}
        </MediumHeading>
      );
    case 'S':
      return (
        <SmallHeading color={color} className={` ${className}`}>
          {children}
        </SmallHeading>
      );
  }
};

export default Heading;