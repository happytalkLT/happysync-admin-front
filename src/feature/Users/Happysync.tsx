import styles from './styles.module.css';
import global_styles from '../featureGlobalStyles.module.css';
import { ChangeEvent, useState } from 'react';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { Select } from '@/modules';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import koLocale from 'date-fns/locale/ko';
import { Box, Button, ButtonGroup, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import * as React from 'react';
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import dayjs from 'dayjs';

export const HappysyncFeature = () => {
  const [rangeType, setRangeType] = useState('createdAt');
  const [searchType, setSearchType] = useState('id');
  const [paymentStatus, setPaymentStatus] = useState('all');
  const [settingType, setSettingType] = useState('all');
  const [serviceStatus, setServiceStatus] = useState('all');
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [searchTypeValue, setSearchTypeValue] = useState<string>('');

  const rangeTypeOptions = [
    {
      value: 'createdAt',
      label: '가입일'
    },
    {
      value: 'expiredAt',
      label: '서비스 만료일'
    }
  ];

  const searchTypeOptions = [
    {
      value: 'id',
      label: '아이디'
    },
    {
      value: 'businessName',
      label: '회사명'
    },
    {
      value: 'phoneNumber',
      label: '연락처'
    },
    {
      value: 'email',
      label: '이메일'
    }
  ];

  const settingTypeOptions = [
    {
      value: 'all',
      label: '전체'
    },
    {
      value: 'businessName',
      label: '가입 완료'
    },
    {
      value: 'phoneNumber',
      label: '신청 중'
    },
    {
      value: 'email',
      label: '세팅 중'
    },
    {
      value: 'email',
      label: '세팅 완료'
    },
    {
      value: 'email',
      label: '서비스 중'
    },
    {
      value: 'email',
      label: '서비스 중지'
    }
  ];


  const rows: GridRowsProp = [
    {
      id: 1,
      partner: '카페24',
      businessName: '엠비아이솔루션',
      userId: 'cafe24_mbi',
      phoneNumber: '1588-0011',
      email: 'happytalk@happytalk.io',
      channel: '카카오, 네이버',
      solution: '카페24',
      expiredAt: dayjs().add(1, 'year').format('YYYY-MM-DD'),
      serviceStatus: '서비스 사용중',
      settingStatus: '서비스 중',
      accountStatus: '승인 완료',
      createdAt: dayjs().subtract(1, 'month').add(12, 'day').format('YYYY-MM-DD HH:mm:ss')
    },
    {
      id: 2,
      partner: '카페24',
      businessName: 'AI블룸',
      userId: 'cafe24_aibloomn',
      phoneNumber: '1777-7777',
      email: 'aibloomn@aibloomn.io',
      channel: '카카오',
      solution: '카페24',
      expiredAt: dayjs().add(2, 'year').add(3, 'month').subtract(27, 'day').format('YYYY-MM-DD'),
      serviceStatus: '서비스 사용중',
      settingStatus: '가입 완료',
      accountStatus: '승인 완료',
      createdAt: dayjs().subtract(1, 'weeks').format('YYYY-MM-DD HH:mm:ss')
    }
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No.', width: 70 },
    { field: 'partner', headerName: '파트너사', width: 120 },
    { field: 'businessName', headerName: '회사명', width: 150 },
    { field: 'userId', headerName: '아이디', width: 140 },
    { field: 'phoneNumber', headerName: '연락처', width: 140 },
    { field: 'email', headerName: '이메일', width: 200 },
    { field: 'channel', headerName: '연동 채널', width: 120 },
    { field: 'solution', headerName: '연동 솔루션', width: 120 },
    { field: 'expiredAt', headerName: '서비스 만료일', width: 150 },
    { field: 'serviceStatus', headerName: '서비스 상태', width: 120 },
    { field: 'settingStatus', headerName: '세팅 상태', width: 120 },
    { field: 'accountStatus', headerName: '계정 상태', width: 120 },
    { field: 'createdAt', headerName: '가입 일시', width: 200 }
  ];


  const handleChange = (key: string): SelectInputProps<string>['onChange'] => (event) => {
    switch (key) {
      case 'rangeType':
        setRangeType(event.target.value);
        return;
      case 'searchType':
        setSearchType(event.target.value);
        return;
      case 'settingType':
        setSettingType(event.target.value);
        return;
    }
  };
  const radioHandleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>, value: string) => {
    switch (key) {
      case 'paymentStatus':
        setPaymentStatus(value);
        return;
      case 'serviceStatus':
        setServiceStatus(value);
        return;
    }
  };
  return (
    <div className={global_styles.container}>
      <div className={global_styles.block}>
        <Box display={'flex'} alignItems={'top'} justifyContent={'space-between'}>
          <Box display={'flex'} gap={3} flexDirection={'column'}>
            <div className={styles.search_block}>
              <div className={styles.search_label_block}>
                조회 기간
              </div>
              <div className={styles.search_parameter_block}>
                <Select
                  className={styles.search_select}
                  value={rangeType}
                  options={rangeTypeOptions}
                  onChange={handleChange('rangeType')}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={koLocale}>
                  <Box display={'flex'} gap={2} alignItems={'center'}>
                    <DatePicker
                      className={styles.search_date}
                      value={startDate}
                      slotProps={{ textField: { size: 'small', variant: 'standard' } }}
                      onChange={(newValue) => setStartDate(newValue)}
                    />
                    <span>~</span>
                    <DatePicker
                      className={styles.search_date}
                      value={endDate}
                      minDate={startDate || undefined}
                      slotProps={{ textField: { size: 'small', variant: 'standard' } }}
                      onChange={(newValue) => setEndDate(newValue)}
                    />
                  </Box>
                </LocalizationProvider>
              </div>
            </div>
            <div className={styles.search_block}>
              <div className={styles.search_label_block}>
                검색 조건
              </div>
              <div className={styles.search_parameter_block}>
                <Select
                  className={styles.search_select}
                  value={searchType}
                  options={searchTypeOptions}
                  onChange={handleChange('searchType')}
                />
                <TextField
                  className={styles.search_text}
                  variant={'standard'}
                  value={searchTypeValue}
                  onChange={(e) => {
                    setSearchTypeValue(e.target.value);
                  }} />
              </div>
            </div>
          </Box>
          <Box display={'flex'} gap={3} flexDirection={'column'}>
            <div className={styles.search_block}>
              <div className={styles.search_label_block}>
                결제 상태
              </div>
              <div className={styles.search_parameter_block}>
                <FormControl>
                  <RadioGroup
                    row={true}
                    value={paymentStatus}
                    onChange={radioHandleChange('paymentStatus')}>
                    <FormControlLabel value={'all'} control={<Radio />} label={'전체'} />
                    <FormControlLabel value={'waiting'} control={<Radio />} label={'결제 대기'} />
                    <FormControlLabel value={'service'} control={<Radio />} label={'결제 완료'} />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className={styles.search_block}>
              <div className={styles.search_label_block}>
                세팅 상태
              </div>
              <div className={styles.search_parameter_block}>
                <Select
                  className={styles.search_select}
                  value={settingType}
                  options={settingTypeOptions}
                  onChange={handleChange('settingType')}
                />
              </div>
            </div>
            <div className={styles.search_block}>
              <div className={styles.search_label_block}>
                서비스 상태
              </div>
              <div className={styles.search_parameter_block}>
                <FormControl>
                  <RadioGroup
                    row={true}
                    value={serviceStatus}
                    onChange={radioHandleChange('serviceStatus')}>
                    <FormControlLabel value={'all'} control={<Radio />} label={'전체'} />
                    <FormControlLabel value={'enabled'} control={<Radio />} label={'서비스 사용중'} />
                    <FormControlLabel value={'disabled'} control={<Radio />} label={'서비스 중지'} />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </Box>
          <Box display={'flex'} gap={3} flexDirection={'column'}>
            <div className={styles.search_block}>
              <ButtonGroup variant={'contained'}>
                <Button color={'inherit'}>
                  초기화
                </Button>
                <Button>
                  검색
                </Button>
              </ButtonGroup>
            </div>
          </Box>
        </Box>
      </div>
      <div className={global_styles.block}>
        <Box width={'100%'} height={570}>
          <DataGrid
            columns={columns}
            rows={rows}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                printOptions: { disableToolbarButton: true },
                csvOptions: { disableToolbarButton: true }
              }
            }} />
        </Box>
      </div>
    </div>
  );
};