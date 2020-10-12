import { Button, Col, Row, Typography } from 'antd';
import { ServerDataContext } from '../../../../context';
import Form from '../../../form/Form';
import FormItem from '../../../form/FormItem';
import React, { useContext, useState } from 'react';
import StringService from '../../../../services/StringService';
import './ProfileQuestionnaire.scss';

const { Paragraph } = Typography;

export default function ProfileQuestionnaire(props) {
  const [profile, setProfile] = useState(props.default);
  const { t, additional } = useContext(ServerDataContext);
  const { profiles } = additional;

  const getProfilesToSelect = () => {
    return profiles.map((x) => (
      <Col key={x.id} sm={24} md={12} lg={8}>
        <div
          role="button"
          className={StringService.logicConcat('profile-item', {
            'profile-active': profile && x.id === profile.id,
          })}
          onClick={() => {
            setProfile(x);
          }}
        >
          <div className="profile-name">{x.name}</div>
        </div>
      </Col>
    ));
  };

  return (
    <Form title={t['Profile']}>
      <Paragraph>{t['Select profile that can represent you.']}</Paragraph>
      <Row gutter={[10, 10]}>{getProfilesToSelect()}</Row>
      <FormItem>
        <div className="text-right mt-3">
          <Button
            size="large"
            type="primary"
            disabled={!profile}
            onClick={() => {
              props.onGoNext(profile);
            }}
          >
            {t['Next']}
          </Button>
        </div>
      </FormItem>
    </Form>
  );
}
