import { Button } from 'antd';
import { Icon } from '../icon/Icon';
import { ServerDataContext } from '../../../context';
import React, { useContext } from 'react';
import './SocialLogin.scss';

export const SocialLogin = () => {
  const { t, routes } = useContext(ServerDataContext);
  return (
    <section className="pa-5 mb-5">
      <Button
        className="social-button-google"
        type="primary"
        href={routes.auth.social.google}
        block
        icon={<Icon name="fab fa-google" />}
      >
        {t['Login with google']}
      </Button>
      <Button
        className="social-button-facebook"
        type="primary"
        href={routes.auth.social.facebook}
        block
        icon={<Icon name="fab fa-facebook-f" />}
      >
        {t['Login with facebook']}
      </Button>
    </section>
  );
};
