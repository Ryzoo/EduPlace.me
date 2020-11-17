import { Affix, Button, Col, Grid, Input, Row } from 'antd';
import { BoardGrid } from '../../components/shared/boardGrid/BoardGrid';
import { Container } from '../../components/shared/container/Container';
import { Icon } from '../../components/shared/icon/Icon';
import { ServerDataContext } from '../../context';
import { Tag } from '../../components/shared/tag/Tag';
import React, { useContext, useState } from 'react';
import URLService from '../../services/URLService';

import StringService from '../../services/StringService';
import './SearchPage.scss';

const { Search } = Input;
const { useBreakpoint } = Grid;

export const SearchPage = () => {
  const [searchedText, setSearchedText] = useState('');
  const [isUserBoards, setUserBoards] = useState(false);
  const screen = useBreakpoint();
  const { t, boards, tags } = useContext(ServerDataContext);
  const { userBoards, recommended, recentlyOpened, searchResults } = boards;

  const onChangeSearchText = (e) => {
    setSearchedText(e.target.value);
  };

  return (
    <Container block fluid className="pt-6 b-white search-page">
      <Row justify="center">
        <Col lg={9} md={12} sm={16}>
          <Search
            size="large"
            allowClear
            placeholder={t['Type to find knowledge']}
            onChange={onChangeSearchText}
          />
        </Col>
      </Row>
      <Row justify="center" className="my-6">
        <Col md={12}>
          <Row justify="center">
            {searchedText.length > 0 ? (
              tags.map((tag) => (
                <Col key={tag.name}>
                  <Tag>
                    <a href="#">{tag.name}</a>
                  </Tag>
                </Col>
              ))
            ) : (
              <div className="connected-pill-buttons">
                <Button
                  className={StringService.logicConcat({
                    'btn-white': isUserBoards,
                  })}
                  type={StringService.logicConcat({
                    primary: !isUserBoards,
                  })}
                  shape="round"
                  onClick={() => setUserBoards(false)}
                >
                  {t['All boards']}
                </Button>
                <Button
                  className={StringService.logicConcat({
                    'btn-white': !isUserBoards,
                  })}
                  type={StringService.logicConcat({
                    primary: isUserBoards,
                  })}
                  shape="round"
                  onClick={() => setUserBoards(true)}
                >
                  {t['My boards']}
                </Button>
              </div>
            )}
          </Row>
        </Col>
      </Row>
      {searchedText.length > 0 ? (
        <BoardGrid className="b-gray pt-6" boards={searchResults} />
      ) : (
        <>
          {isUserBoards ? (
            <BoardGrid
              className="b-gray"
              boards={userBoards}
              showItems={6}
              heading={t['My boards']}
              moreUrl={() => URLService.goTo('#')}
            />
          ) : (
            <>
              <BoardGrid
                className="b-gray"
                boards={recentlyOpened}
                showItems={6}
                heading={t['Recently opened boards']}
                moreUrl={() => URLService.goTo('#')}
              />
              <BoardGrid
                boards={recommended}
                showItems={6}
                heading={t['Recommended boards']}
                moreUrl={() => URLService.goTo('#')}
              />
            </>
          )}
        </>
      )}
      <Affix
        className={StringService.logicConcat('fixed-button', {
          'd-none': !screen.md,
        })}
        offsetBottom={80}
      >
        <Button shape="circle" type="primary" onClick={() => URLService.goTo('#')}>
          <Icon name="fa-plus" />
        </Button>
      </Affix>
    </Container>
  );
};
