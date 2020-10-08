import { Alert } from 'antd';
import { ServerDataContext } from '../../context';
import { authUser } from '../../store/features/user/user';
import { useSelector } from 'react-redux';
import React, { useContext } from 'react';
import URLService from '../../services/URLService';

export const EmailNotVerifiedBanner = () => {
  const user = useSelector(authUser);
  const { routes, t } = useContext(ServerDataContext);

  const handleBannerClose = () => {
    URLService.goTo(routes.verification.send);
  };

  return (
    !user.isVerified && (
      <Alert
        message={t['Your email are not verified. Please use button in email that was sent to you.']}
        banner
        closeText={t['Resend verification email.']}
        onClose={handleBannerClose}
      />
    )
  );
};
