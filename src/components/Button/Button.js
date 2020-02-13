import React from 'react';
import styles from './Button.scss';
import ClassNames from 'classnames/bind';

const cx = ClassNames.bind(styles);

const Button = ({ children, ...rest }) => {
  return (
    <div className={cx('button')} {...rest}>
      {children}
    </div>
  );
};

export default Button;
