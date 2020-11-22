import { Container } from '../../components/shared/container/Container';
import { ServerDataContext } from '../../context';
import React, { useContext } from 'react';

export const AutopromotionPage = () => {
  const { t } = useContext(ServerDataContext);

  return (
    <Container>
      <h1>{t['For Autopromotion']}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html:
            t[
              'Do you have a product that solves a problem? Here you can easily present it and patent it as the first given solution to the problem. You can become a moderator: subject, problem, field. EduPlace.me has a statistical background that allows you to verify and evaluate added content, which other tools do not have.'
            ],
        }}
      />
    </Container>
  );
};
