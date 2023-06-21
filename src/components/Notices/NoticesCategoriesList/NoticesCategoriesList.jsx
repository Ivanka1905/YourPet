import React from 'react';
import { Container, List } from '@mui/material';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

function NoticesCategoriesList({ data, categoryName }) {
  const dataArray = Array.isArray(data) ? data : [data];

  return (
    <Container sx={{
    mr: 'auto',
    ml: 'auto',
    width: { mobile: '320px', tablet: '768px', desktop: '1248px' },
    pr: { mobile: '20px', tablet: '32px', desktop: '16px' },
    pl: { mobile: '20px', tablet: '32px', desktop: '16px' },
  }}>
      <List
        spacing={2}
        sx={{
          display: 'flex',
          alingItems: 'center',
          justifyContent: 'stretch',
          flexWrap: 'wrap',
          p: 0,
          gap: { mobile: '20px' },
        }}
      >
        {dataArray
          .slice()
          .reverse()
          .filter(
            item =>
              item &&
              item.category &&
              (item.category === categoryName ||
                categoryName === 'owner' ||
                categoryName === 'favorite')
          )
          .map(item => (
            <li key={item._id}>
              <NoticeCategoryItem data={item} categoryName={categoryName} />
            </li>
          ))}
      </List>
    </Container>
  );
}

export default NoticesCategoriesList;
