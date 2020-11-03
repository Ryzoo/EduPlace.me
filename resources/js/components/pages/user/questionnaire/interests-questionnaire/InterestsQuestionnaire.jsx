import { Button, Row, Tag, Typography } from 'antd';
import { ServerDataContext } from '../../../../../context/index';
import Form from '../../../../form/Form';
import FormItem from '../../../../form/FormItem';
import React, { useContext, useState } from 'react';

const { Paragraph } = Typography;
const { CheckableTag } = Tag;

export const InterestsQuestionnaire = (props) => {
  const { t } = useContext(ServerDataContext);
  const [interests, setInterests] = useState(props.default);

  const handleSelectTag = (id, checked) => {
    setInterests(checked ? [...interests, id] : interests.filter((x) => x !== id));
  };

  return (
    <Form title={t['Interests']} isLoading={props.isLoading}>
      <Paragraph>{t['Mark the interests you are interested in.']}</Paragraph>
      <Row>
        {props.profile.interests.map((tag) => (
          <CheckableTag
            key={tag.id}
            checked={interests.indexOf(tag.id) > -1}
            onChange={(checked) => handleSelectTag(tag.id, checked)}
          >
            {tag.name}
          </CheckableTag>
        ))}
      </Row>
      <FormItem>
        <div className="text-right mt-3">
          <Button
            size="large"
            type="default"
            onClick={() => {
              props.onGoBack(interests);
            }}
          >
            {t['Previous']}
          </Button>
          <Button
            size="large"
            type="primary"
            disabled={!interests.length}
            onClick={() => {
              props.onEndQuestionnaire(interests);
            }}
          >
            {t['Finish']}
          </Button>
        </div>
      </FormItem>
    </Form>
  );
};
