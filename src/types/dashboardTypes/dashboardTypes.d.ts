type IconType = import('react-icons').IconType;

interface IStatisticItem {
    icon: IconType,
    name: string,
    numberStatistic: string,
    iconStatus: IconType,
    status: string,
};

interface IChartItem {
    numberAVG: string,
    percentStatistic: string,
    nameChart: string,
    nameStatistic: string,
    iconStatistic: IconType, 
};

interface ITableCountry {
    URLImg: string,
    nameCountry: string,
    numberProducts: number,
    percentProducts: string,
};

interface ITableTasks {
    URLImg: string,
    reportTitle: string,
};

interface ISalesChart {
    name: string,
    IdProduct: string,
    amount: number,
};

