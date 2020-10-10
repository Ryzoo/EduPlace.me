import { ServerDataContext } from '../../../context';
import { Steps } from 'antd';
import { URLMethod } from '../../../services/URLService';
import FormService from '../../../services/FormService';
import InterestsQuestionnaire from '../../../components/pages/questionnaire/interests-questionnaire/InterestsQuestionnaire';
import ProfileQuestionnaire from '../../../components/pages/questionnaire/profile-questionnaire/ProfileQuestionnaire';
import React, { useContext, useState } from 'react';

const { Step } = Steps;

export default function QuestionnairePage() {
  const { routes, t } = useContext(ServerDataContext);
  const QuestionnaireSteps = {
    PROFILE: 0,
    INTERESTS: 1,
  };

  const [isLoading, setLoading] = useState(false);
  const [current, setCurrent] = useState(QuestionnaireSteps.PROFILE);
  const [profile, setProfile] = useState();

  const handleEndQuestionnaire = (interests) => {
    setLoading(true);
    FormService.submit(routes.action.processQuestionnaire, URLMethod.POST, {
      profile,
      interests,
    });
  };

  const handleGoBack = () => {
    setCurrent(QuestionnaireSteps.PROFILE);
  };

  const handleGoNext = (selectedProfile) => {
    setProfile(selectedProfile);
    setCurrent(QuestionnaireSteps.INTERESTS);
  };

  return (
    <section className="w-100 w-max-md">
      <Steps current={current} className="my-3">
        <Step key={QuestionnaireSteps.PROFILE} title={t['Profile']} />
        <Step key={QuestionnaireSteps.INTERESTS} title={t['Interests']} />
      </Steps>
      {current === QuestionnaireSteps.PROFILE && <ProfileQuestionnaire onGoNext={handleGoNext} />}
      {current === QuestionnaireSteps.INTERESTS && (
        <InterestsQuestionnaire
          profile={profile}
          isLoading={isLoading}
          onGoBack={handleGoBack}
          onEndQuestionnaire={handleEndQuestionnaire}
        />
      )}
    </section>
  );
}
