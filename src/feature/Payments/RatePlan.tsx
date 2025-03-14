import styles from './styles.module.css';
import global_styles from '../featureGlobalStyles.module.css';
import { Box, Switch } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import dayjs from 'dayjs';

export const RatePlanFeature = () => {
  const ratePlanColumns: GridColDef[] = [
    { field: 'title', headerName: '서비스 이용권 명', width: 200, filterable: false, hideable: false },
    {
      field: 'amount', headerName: '이용권 금액 (원)', width: 170, renderCell: (params) => {
        return params.value.toLocaleString() + '원';
      }, editable: true, filterable: false, hideable: false
    },
    {
      field: 'discount', headerName: '할인율 (%)', width: 170, renderCell: (params) => {
        return params.value.toLocaleString() + '%';
      }, editable: true, filterable: false, hideable: false
    },
    {
      field: 'price', headerName: '할인된 금액', width: 170, valueGetter: (value, row) => {
        return Math.round(row.amount * (1 - row.discount / 100)).toLocaleString() + '원';
      }, filterable: false, hideable: false
    }
  ];
  const ratePlanData: GridRowsProp = [
    {
      id: 1,
      title: '1개월 이용권',
      amount: 30000,
      discount: 0
    },
    {
      id: 2,
      title: '3개월 이용권',
      amount: 50000,
      discount: 0
    },
    {
      id: 3,
      title: '6개월 이용권',
      amount: 90000,
      discount: 0
    },
    {
      id: 4,
      title: '12개월 이용권',
      amount: 120000,
      discount: 0
    }
  ];

  const planListColumns: GridColDef[] = [
    { field: 'index', headerName: 'No.', width: 90 },
    { field: 'editorName', headerName: '작성자', width: 130 },
    {
      field: 'createdAt', headerName: '등록일', width: 190, valueGetter: (value) => {
        return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    {
      field: 'effectiveDate', headerName: '사용 시작일', width: 190, valueGetter: (value) => {
        if (!value) return '사용 전';
        return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    {
      field: 'isUse', headerName: '상태', width: 120, renderCell: (params) => {
        console.log(params);
        switch (params.row.status) {
          case 'used':
            return '사용완료';
          case 'saved':
          case 'inuse':
            return <Switch onChange={() => {
            }} checked={params.value} />;
        }
      }
    }
  ];

  const planListData: GridRowsProp = [
    {
      id: 1,
      index: 1,
      editorName: '엘티',
      createdAt: new Date(2025, 2, 9),
      effectiveDate: undefined,
      isUse: false,
      status: 'saved'
    },
    {
      id: 2,
      index: 2,
      editorName: '엘티',
      createdAt: new Date(2025, 1, 12),
      effectiveDate: new Date(2025, 2, 8),
      isUse: true,
      status: 'inuse'
    },
    {
      id: 3,
      index: 3,
      editorName: '엘티',
      createdAt: new Date(2024, 11, 22),
      effectiveDate: new Date(2024, 11, 30),
      isUse: false,
      status: 'used'
    }
  ];
  return (
    <div className={global_styles.container}>
      <div className={global_styles.block}>
        <Box display={'flex'} gap={5} justifyContent={'space-between'} alignItems={'top'}>
          <Box>
            <DataGrid columns={ratePlanColumns} rows={ratePlanData} hideFooter={true} />
          </Box>
          <Box maxHeight={700}>
            <DataGrid
              columns={planListColumns}
              rows={planListData}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  printOptions: { disableToolbarButton: true },
                  csvOptions: { disableToolbarButton: true }
                }
              }} />
          </Box>
        </Box>
      </div>
    </div>
  );
};