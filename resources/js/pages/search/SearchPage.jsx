import { Affix, Button, Col, Grid, Input, Row } from 'antd';
import { Container } from '../../components/shared/container/Container';
import { DisplayedBoardsType } from '../../enums';
import { Icon } from '../../components/shared/icon/Icon';
import { SearchContent } from '../../components/pages/search/SearchContent';
import { SearchFooter } from '../../components/pages/search/SearchFooter';
import { ServerDataContext } from '../../context';
import { StringService, URLService } from '../../services';
import { searchActions, searchAsyncActions } from '../../store/features/search';
import { useDispatch } from 'react-redux';
import React, { useContext, useState } from 'react';
import './SearchPage.scss';

const { Search } = Input;
const { useBreakpoint } = Grid;

export const SearchPage = () => {
  const screen = useBreakpoint();
  const dispatch = useDispatch();
  const { t } = useContext(ServerDataContext);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const searchByText = (text) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
      setSearchTimeout(null);
    }

    if (text.length) {
      setSearchTimeout(
        setTimeout(() => {
          dispatch(searchAsyncActions.searchByText(text));
          clearTimeout(searchTimeout);
          setSearchTimeout(null);
        }, 1000)
      );
    } else if (!text.length) {
      dispatch(searchActions.setDisplayedBoardsType(DisplayedBoardsType.Recommended));
    }
  };
  const onChangeSearchText = (e) => {
    const text = e.target.value;
    dispatch(searchActions.setSearchedText(text));
    searchByText(text);
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
      <SearchFooter />
      <SearchContent />
      <Affix
        className={StringService.logicConcat('fixed-button', {
          'd-none': !screen.md,
        })}
        offsetBottom={25}
      >
        <Button shape="circle" type="primary" onClick={() => URLService.goTo('#')}>
          <Icon name="fa-plus" />
        </Button>
      </Affix>
    </Container>
  );
};
