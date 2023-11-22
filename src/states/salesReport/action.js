import api from '../../constants/api';
import { setReportPaginationActionCreator } from '../salesReportPagination/action';

const ActionType = {
  GET_ALL_REPORT: 'GET_ALL_REPORT',
};

function getAllReportActionCreator(reports) {
  return {
    type: ActionType.GET_ALL_REPORT,
    payload: { reports },
  };
}

function asyncGetReports({
  name,
  page,
  perPage,
  sortBy,
  orderBy,
  WH,
  category,
  productName,
  startDate,
  endDate,
} = {}) {
  return async (dispatch) => {
    try {
      const nameQ = name ? `name=${encodeURIComponent(name)}&` : '';
      const sortByQ = sortBy ? `sortBy=${encodeURIComponent(sortBy)}&` : '';
      const orderByQ = orderBy ? `orderBy=${encodeURIComponent(orderBy)}&` : '';
      const pageQ = page ? `page=${encodeURIComponent(page)}&` : '';
      const perPageQ = perPage ? `perPage=${encodeURIComponent(perPage)}&` : '';
      const WHQ = WH ? `WH=${encodeURIComponent(WH)}&` : '';
      const productNameQ = productName
        ? `productName=${encodeURIComponent(productName)}&`
        : '';
      const categoryQ = category
        ? `category=${encodeURIComponent(category)}&`
        : '';
      const startDateQ = startDate
        ? `startDate=${encodeURIComponent(startDate)}&`
        : '';
      const endDateQ = endDate ? `endDate=${encodeURIComponent(endDate)}&` : '';

      const allQuery = `?${nameQ}${sortByQ}${orderByQ}${pageQ}${perPageQ}${WHQ}${categoryQ}${productNameQ}${startDateQ}${endDateQ}`;

      const { data } = await api.get(`/sales-reports${allQuery}`);

      dispatch(getAllReportActionCreator(data?.data?.data?.result));
      dispatch(
        setReportPaginationActionCreator(data?.data?.data?.paginationInfo)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export { ActionType, getAllReportActionCreator, asyncGetReports };
