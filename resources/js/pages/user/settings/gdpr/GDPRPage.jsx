import React, { useContext } from 'react';
import { Popconfirm, Button, Card } from 'antd';
import { ServerDataContext } from '../../../../context';
import { Container } from '../../../../components/shared/container/Container';
import URLService, { URLMethod } from '../../../../services/URLService';

export default function GDPRPage() {
  const { routes, t } = useContext(ServerDataContext);

  const handleConfirmDeleteAccount = () => {
    URLService.goTo(routes.action.deleteUser, URLMethod.DELETE);
  };

  return (
    <Container className="my-10">
      <Card title={t['Rodo options']} className="mx-a w-100" style={{ maxWidth: 450 }}>
        <Popconfirm
          onConfirm={handleConfirmDeleteAccount}
          title={t['Are you sure?']}
          okText={'Delete'}
          cancelText={'Cancel'}
        >
          <Button size="large" type="primary">
            {t['Delete my account']}
          </Button>
        </Popconfirm>
      </Card>
    </Container>
  );
}
