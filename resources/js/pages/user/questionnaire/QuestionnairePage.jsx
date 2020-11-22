import { Alert, Steps } from 'antd';
import { FormService, URLMethod } from '../../../services';
import { InterestsQuestionnaire } from '../../../components/pages/user/questionnaire/interests-questionnaire/InterestsQuestionnaire';
import { ProfileQuestionnaire } from '../../../components/pages/user/questionnaire/profile-questionnaire/ProfileQuestionnaire';
import { ServerDataContext } from '../../../context/index';
import React, { useContext, useState } from 'react';

const { Step } = Steps;

export const QuestionnairePage = () => {
  const { routes, t } = useContext(ServerDataContext);
  const QuestionnaireSteps = {
    PROFILE: 0,
    INTERESTS: 1,
  };

  const [isLoading, setLoading] = useState(false);
  const [current, setCurrent] = useState(QuestionnaireSteps.PROFILE);
  const [profile, setProfile] = useState();
  const [interests, setInterests] = useState([]);

  const handleEndQuestionnaire = (values) => {
    setLoading(true);
    FormService.submit(routes.action.processQuestionnaire, URLMethod.POST, {
      profile: profile.id,
      interests: values,
    });
  };

  const handleGoBack = (values) => {
    setInterests(values);
    setCurrent(QuestionnaireSteps.PROFILE);
  };

  const handleGoNext = (selectedProfile) => {
    if (profile !== selectedProfile) {
      setProfile(selectedProfile);
      setInterests([]);
    }
    setCurrent(QuestionnaireSteps.INTERESTS);
  };

  const errorMessage =
    FormService.getValidateError('profile') || FormService.getValidateError('interests') || null;

  return (
    <section className="w-100 w-max-md">
      <Steps current={current} className="my-3">
        <Step key={QuestionnaireSteps.PROFILE} title={t['Profile']} />
        <Step key={QuestionnaireSteps.INTERESTS} title={t['Interests']} />
      </Steps>
      {errorMessage && errorMessage.length && <Alert message={errorMessage} type="error" />}
      {current === QuestionnaireSteps.PROFILE && (
        <ProfileQuestionnaire default={profile} onGoNext={handleGoNext} />
      )}
      {current === QuestionnaireSteps.INTERESTS && (
        <InterestsQuestionnaire
          default={interests}
          profile={profile}
          isLoading={isLoading}
          onGoBack={handleGoBack}
          onEndQuestionnaire={handleEndQuestionnaire}
        />
      )}
    </section>
  );
};
