import { Button, Image } from 'antd';
import { ServerDataContext } from '../../../../context';
import Form from '../../../form/Form';
import FormItem from '../../../form/FormItem';
import React, { useContext, useState } from 'react';
import StringService from '../../../../services/StringService';

export default function ProfileQuestionnaire(props) {
  const [profile, setProfile] = useState();
  const { t, additional } = useContext(ServerDataContext);
  const { profiles } = additional;

  const getProfilesToSelect = () => {
    profiles.map((x) => (
      <div
        role="button"
        key={x.id}
        className={StringService.logicConcat('profile-item', {
          'profile-active': x.id === profile,
        })}
        onClick={() => {
          setProfile(x.id);
        }}
      >
        <div className="profile-image">
          <Image src={x.image} />
        </div>
        <div className="profile-name">{t[`Profile ${x.name}`]}</div>
      </div>
    ));
  };

  return (
    <Form title={t['Profile']}>
      {getProfilesToSelect()}

      <FormItem>
        <div className="text-right mt-3">
          <Button size="large" type="primary" onClick={props.onGoNext}>
            {t['Next']}
          </Button>
        </div>
      </FormItem>
    </Form>
  );
}
