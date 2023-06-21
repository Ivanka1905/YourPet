import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getNoticeByCategory } from 'redux/notices/noticesOperations';
import { getIsLoading, getNotices } from 'redux/notices/noticesSelectors';

export const NoticesPagination = () => {
  const { total } = useSelector(getNotices);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (categoryName !== 'owner') {
      dispatch(
        getNoticeByCategory({
          category: categoryName,
          page: page,
          limit: 12,
        })
      );
    }
  }, [categoryName, dispatch, page]);

  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  return (
    <>
      {total > 12 && !isLoading ? (
        <PaginationControl
          page={page}
          between={4}
          total={total}
          limit={12}
          last={true}
          changePage={page => {
            setPage(page);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};
