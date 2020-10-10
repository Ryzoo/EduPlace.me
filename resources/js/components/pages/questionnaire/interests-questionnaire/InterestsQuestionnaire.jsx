import { Button } from 'antd';
import { ServerDataContext } from '../../../../context';
import Form from '../../../form/Form';
import FormItem from '../../../form/FormItem';
import React, { useContext } from 'react';

export default function InterestsQuestionnaire(props) {
  const { t } = useContext(ServerDataContext);
  return (
    <Form title={t['Interests']} isLoading={props.isLoading}>
      <FormItem>
        <div className="text-right mt-3">
          <Button size="large" type="default" onClick={props.onGoBack}>
            {t['Previous']}
          </Button>
          <Button size="large" type="primary" onClick={props.onEndQuestionnaire}>
            {t['Finish']}
          </Button>
        </div>
      </FormItem>
    </Form>
  );
}
