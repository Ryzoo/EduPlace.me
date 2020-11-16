import { Affix, Button, Col, Grid, Input, Row } from 'antd';
import { BoardItems } from '../../components/shared/boardItems/BoardItems';
import { Container } from '../../components/shared/container/Container';
import { Icon } from '../../components/shared/icon/Icon';
import { Tag } from '../../components/shared/tag/Tag';
import React, { useState } from 'react';
import URLService from '../../services/URLService';

import StringService from '../../services/StringService';
import './SearchPage.scss';

const { Search } = Input;
const { useBreakpoint } = Grid;

const tags = [
  {
    name: 'LED strip',
  },
  {
    name: 'RGB lights',
  },
  {
    name: 'Arduino RGB stripe',
  },
  {
    name: 'LED lamp',
  },
  {
    name: 'led zeppelin',
  },
  {
    name: 'LED strip',
  },
  {
    name: 'RGB lights',
  },
  {
    name: 'Arduino RGB stripe',
  },
  {
    name: 'LED lamp',
  },
  {
    name: 'led zeppelin',
  },
];
const boards = [
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: false,
    viewed: false,
  },
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: true,
    viewed: false,
  },
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: false,
    viewed: false,
  },
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: false,
    viewed: false,
  },
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: false,
    viewed: true,
  },
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: false,
    viewed: false,
  },
  {
    img: 'https://via.placeholder.com/400x235?text=Jakis+random+tekst',
    name: 'Random nazwa',
    views: '9451',
    likes: '568',
    liked: true,
    viewed: true,
  },
];

export const SearchPage = () => {
  const [searchedText, setSearchedText] = useState('');
  const screen = useBreakpoint();

  const onSearching = (e) => {
    setSearchedText(e.target.value);
  };

  return (
    <Container block fluid className="pt-6 b-white search-page">
      <Row justify="center">
        <Col lg={9} md={12} sm={16}>
          <Search
            size="large"
            allowClear
            placeholder="Type to find knowledge"
            onChange={onSearching}
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
                <Button type="primary" shape="round" onClick={() => URLService.goTo('#')}>
                  All boards
                </Button>
                <Button className="btn-white" shape="round" onClick={() => URLService.goTo('#')}>
                  My boards
                </Button>
              </div>
            )}
          </Row>
        </Col>
      </Row>
      {searchedText.length > 0 ? (
        <BoardItems className="b-gray pt-6" boards={boards} />
      ) : (
        <>
          <BoardItems
            className="b-gray"
            boards={boards}
            showItems={6}
            heading="Recently opened boards"
            moreUrl={() => URLService.goTo('#')}
          />
          <BoardItems
            boards={boards}
            showItems={6}
            heading="Recommended boards"
            moreUrl={() => URLService.goTo('#')}
          />
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
