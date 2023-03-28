import {
  AiOutlineGlobal,
  AiOutlineCalendar,
  AiFillPlusCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { TbClockHour9 } from 'react-icons/tb';
import { HiInformationCircle } from 'react-icons/hi2';

//Images
const usaImgURL =
  'https://demos.creative-tim.com/paper-dashboard-2-pro/assets/img/flags/US.png';
const germanyImgURL =
  'https://demos.creative-tim.com/paper-dashboard-2-pro/assets/img/flags/DE.png';
const australiaImgURL =
  'https://demos.creative-tim.com/paper-dashboard-2-pro/assets/img/flags/AU.png';

//Images Backend Dev
const BeDev1ImgURL =
  'https://demos.creative-tim.com/paper-dashboard-2-pro/assets/img/faces/ayo-ogunseinde-2.jpg';

//Data of Statistic item
export const dataStatisticItem: IStatisticItem[] = [
  {
    icon: AiOutlineGlobal,
    name: 'Capacity',
    numberStatistic: '150GB',
    iconStatus: GrUpdate,
    status: 'Update Now',
  },
  {
    icon: AiOutlineGlobal,
    name: 'Revenue',
    numberStatistic: '$1,345',
    iconStatus: AiOutlineCalendar,
    status: 'Last day',
  },
  {
    icon: AiOutlineGlobal,
    name: 'Errors',
    numberStatistic: '23',
    iconStatus: TbClockHour9,
    status: 'In the last hour',
  },
  {
    icon: AiOutlineGlobal,
    name: 'Followers',
    numberStatistic: '+45K',
    iconStatus: GrUpdate,
    status: 'Update Now',
  },
];

//Data of chart item
export const dataChartItem: IChartItem[] = [
  {
    numberAVG: '$34,657',
    percentStatistic: '+18%',
    nameChart: 'total earnings in last ten quarters',
    nameStatistic: 'Financial Statistics',
    iconStatistic: AiFillPlusCircle,
  },
  {
    numberAVG: '169',
    percentStatistic: '-14%',
    nameChart: 'total subscriptions in last 7 days',
    nameStatistic: 'View all members',
    iconStatistic: AiFillPlayCircle,
  },
  {
    numberAVG: '$34,657',
    percentStatistic: '~51%',
    nameChart: 'total earnings in last ten quarters',
    nameStatistic: 'Financial Statistics',
    iconStatistic: HiInformationCircle,
  },
];

//Tabel Country Product
export const dataCountryProduct: ITableCountry[] = [
  {
    URLImg: usaImgURL,
    nameCountry: 'USA',
    numberProducts: 2920,
    percentProducts: '53.23%',
  },
  {
    URLImg: germanyImgURL,
    nameCountry: 'Germany',
    numberProducts: 1300,
    percentProducts: '20.43%',
  },
  {
    URLImg: australiaImgURL,
    nameCountry: 'Australia',
    numberProducts: 760,
    percentProducts: '10.35%',
  },
  {
    URLImg: usaImgURL,
    nameCountry: 'United Kingdom',
    numberProducts: 2920,
    percentProducts: '7.87%',
  },
  {
    URLImg: usaImgURL,
    nameCountry: 'United Kingdom',
    numberProducts: 2920,
    percentProducts: '7.87%',
  },
];

//Table Tasks
export const dataTableTasks: ITableTasks[] = [
  {
    URLImg: BeDev1ImgURL,
    reportTitle:
      'Sign contract for "What are conference organizers afraid of?"',
  },
  {
    URLImg: BeDev1ImgURL,
    reportTitle:
      'Lines From Great Russian Literature? Or E-mails From My Boss?',
  },
  {
    URLImg: BeDev1ImgURL,
    reportTitle:
      'Using dummy content or fake information in the Web design process can result in products with unrealistic"',
  },
  {
    URLImg: BeDev1ImgURL,
    reportTitle:
      'But I must explain to you how all this mistaken idea of denouncing pleasure',
  },
];

//Sales Chart
export const dataSalesChart: ISalesChart[] = [
  {
    name: 'Tesla Model S',
    IdProduct: '0',
    amount: 100,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '1',
    amount: 120,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '2',
    amount: 120,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '3',
    amount: 80,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '4',
    amount: 100,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '5',
    amount: 90,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '6',
    amount: 90,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '7',
    amount: 90,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '8',
    amount: 90,
  },
  {
    name: 'Tesla Model S',
    IdProduct: '9',
    amount: 90,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '0',
    amount: 80,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '1',
    amount: 140,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '2',
    amount: 50,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '3',
    amount: 120,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '4',
    amount: 50,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '5',
    amount: 150,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '6',
    amount: 70,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '7',
    amount: 120,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '8',
    amount: 80,
  },
  {
    name: 'BMW 5 Series',
    IdProduct: '9',
    amount: 100,
  },
];
