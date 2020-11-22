import { Container } from '../../components/shared/container/Container';
import { ServerDataContext } from '../../context';
import React, { useContext } from 'react';

export const EducationPage = () => {
  const { t } = useContext(ServerDataContext);

  return (
    <Container>
      <h1>{t['For Education']}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html:
            t[
              "EduPlace.me Gives the group the opportunity to work out their answers: <b>questioned question, problems, interesting topics</b>, by the group's search for materials adequate to their level of knowledge. <br/> The group can work with the method of research station stages. It is based on the fact that a given group tries to answer the following stages of work in cycles of 5-10 minutes: <ul> <li>First: the group creates questions to the topic, what would it like to know about the topic? </li> <li> Second stage: the group checks the correctness of the questions and determines whether the formulated questions are clear, measurable, meaningful. Do they contain questions: how? What for? Why. </li> <li> Third stage: the participants look for answers to the formulated questions either individually (everyone works alone) or in small 2-3 person subgroups. Fourth stage: we check the prepared answer boards and choose the one which is best developed and most appropriate for the group level. </li> </ul>"
            ],
        }}
      />
    </Container>
  );
};
