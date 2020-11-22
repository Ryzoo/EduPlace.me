import { Badge, Empty, List } from 'antd';
import { ServerDataContext } from '../../context';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/features/selectors';
import React, { useContext } from 'react';

export const CurrentUserNotificationsList = () => {
  const { isAnyNotifications, notifications } = useSelector(userSelectors.userNotifications);
  const { t } = useContext(ServerDataContext);

  return isAnyNotifications ? (
    <List
      itemLayout="horizontal"
      dataSource={notifications}
      renderItem={(notification) =>
        !notification.isNew ? (
          <List.Item key={notification.id}>
            <List.Item.Meta title={notification.message} description={notification.created} />
          </List.Item>
        ) : (
          <Badge.Ribbon key={notification.id} text={t['New']}>
            <List.Item className="pt-8">
              <List.Item.Meta title={notification.message} description={notification.created} />
            </List.Item>
          </Badge.Ribbon>
        )
      }
    />
  ) : (
    <Empty description={false} />
  );
};
