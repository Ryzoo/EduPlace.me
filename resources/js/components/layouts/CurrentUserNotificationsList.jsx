import { Badge, Empty, List } from 'antd';
import { ServerDataContext } from '../../context';
import { authUser } from '../../store/features/user/user';
import { useSelector } from 'react-redux';
import React, { useContext } from 'react';

export const CurrentUserNotificationsList = () => {
  const { notifications } = useSelector(authUser);
  const { t } = useContext(ServerDataContext);

  return notifications.list.length ? (
    <List
      itemLayout="horizontal"
      dataSource={notifications.list}
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
