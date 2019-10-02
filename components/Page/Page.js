import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.module.sass';

import ParticleStars from "../ParticleStars/ParticleStars";

const Page = ({ children, stars }) => (
  <div className={styles['page']}>
    {stars && <ParticleStars />}
    {children}
  </div>
);

Page.defaultProps = {
  stars: false,
};

Page.propTypes = {
  stars: PropTypes.bool,
};

export default Page;
