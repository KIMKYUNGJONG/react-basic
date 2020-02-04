import React from 'react';

import './myComponent.scss';
import classNames from 'classnames/bind';
import styles from './MyStyles.module.scss';

const cx = classNames.bind(styles);
const MyScssComponent = () => {
  const isBlue = true;
  return (
    <>
      <div className="MyComponent">
        <div className="something-inside">content with RCA V2</div>
      </div>
      <div className={cx('box', { blue: isBlue })}>
        <div className={cx('box-inside')} />
      </div>
    </>
  );
};
export default MyScssComponent;
