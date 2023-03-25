import React from 'react';
import './GlobalStyle.module.scss';

interface IGlobalStyle extends IChildrenWrapped {}

const GlobalStyleWrapper = ({ children }: IGlobalStyle) => {
  return <div>{children}</div>;
};

export default GlobalStyleWrapper;
