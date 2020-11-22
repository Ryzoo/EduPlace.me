import { Alert } from 'antd';
import { ServerDataContext } from '../../context/index';
import { URLService } from '../../services';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/features/selectors';
import React, { useContext } from 'react';

export const EmailNotVerifiedBanner = (props) => {
  const user = useSelector(userSelectors.authUser);
  const { routes, t } = useContext(ServerDataContext);

  const handleBannerClose = () => {
    URLService.goTo(routes.verification.send);
  };

  const warningTitle = t['Warning'];
  const warningDescription =
    t['Your email are not verified. Please use button in email that was sent to you.'];

  return (
    !user.isVerified && (
      <Alert
        message={props.onlyInfo ? warningDescription : warningTitle}
        description={props.onlyInfo ? null : warningDescription}
        banner
        closeText={t['Resend verification email.']}
        onClose={handleBannerClose}
      />
    )
  );
};
