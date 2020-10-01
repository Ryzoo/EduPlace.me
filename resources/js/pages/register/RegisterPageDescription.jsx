import React, { useContext } from 'react';
import { ServerDataContext } from '../../context';
import { Typography, Space } from 'antd';

const { Text, Title } = Typography;

export default function RegisterPageDescription() {
  const { t } = useContext(ServerDataContext);

  return (
    <Space direction="vertical">
      <Title>{t['What does having an account in our platform give?']}</Title>
      <Text>
        {t['Very much so, but you will learn about it only after you create your account.']}
      </Text>
    </Space>
  );
}
