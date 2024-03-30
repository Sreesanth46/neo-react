import type React from 'react';
import { Children, type ReactElement } from 'react';

interface WhenProps {
  isTrue: boolean;
  children: React.ReactNode;
}

interface ElseProps {
  render?: React.ReactNode;
  children: React.ReactNode;
}

export const Show = (props: React.PropsWithChildren) => {
  let when: React.ReactNode | null = null;
  let otherwise: React.ReactNode | null = null;

  Children.forEach(props.children, child => {
    if ((child as ReactElement<WhenProps>).props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && (child as ReactElement<WhenProps>).props.isTrue) {
      when = child;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }: WhenProps) => isTrue && children;

Show.Else = ({ render, children }: ElseProps) => render || children;
