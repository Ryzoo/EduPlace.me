import { Affix, Button, Col, Grid, Input, Row } from 'antd';
import { Container } from '../../components/shared/container/Container';
import { DisplayedBoardsType } from '../../enums';
import { Icon } from '../../components/shared/icon/Icon';
import { SearchContent } from '../../components/pages/search/SearchContent';
import { SearchFooter } from '../../components/pages/search/SearchFooter';
import { ServerDataContext } from '../../context';
import { StringService, URLService } from '../../services';
import { searchActions, searchAsyncActions } from '../../store/features/search';
import { searchSelectors } from '../../store/features/selectors';
import { useDispatch, useSelector } from 'react-redux';
import React, { useContext } from 'react';
import './SearchPage.scss';

const { Search } = Input;
const { useBreakpoint } = Grid;

export const SearchPage = () => {
  const screen = useBreakpoint();
  const dispatch = useDispatch();
  const { t } = useContext(ServerDataContext);
  const searchText = useSelector(searchSelectors.getSearchText);

  const searchByText = () => {
    if (searchText.length) {
      dispatch(searchAsyncActions.searchByText(searchText));
    }
  };
  const onChangeSearchText = (e) => {
    const text = e.target.value;

    dispatch(searchActions.setSearchedText(text));

    if (!searchText.length)
      dispatch(searchActions.setDisplayedBoardsType(DisplayedBoardsType.Recommended));
  };

  return (
    <Container block fluid className="pt-6 b-white search-page">
      <Row justify="center">
        <Col lg={9} md={12} sm={16}>
          <Search
            defaultValue={searchText}
            size="large"
            allowClear
            placeholder={t['Type to find knowledge']}
            onChange={onChangeSearchText}
            onSearch={searchByText}
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
