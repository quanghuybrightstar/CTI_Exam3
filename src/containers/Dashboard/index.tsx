// import { Column as Column2 } from '@ant-design/plots';
// import ColumnChart from '@ant-design/plots/es/components/column';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Utils from '@/src/utils';
import styles from './styles.module.scss';
import { Layout, Row, Col, Card, Image, Input } from 'antd';
import * as data from '@/src/store/data/dashboardData';
import { TfiRulerPencil } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { MdDone } from 'react-icons/md';
import { FooterContainer } from '../app-containers';
import Link from 'next/link';

const { Content } = Layout;

const DashboardContainer = () => {
  const DynamicColumn = dynamic(
    () => import('@ant-design/plots/es/components/column')
  );

  const [config] = useState({
    data: data.dataSalesChart,
    isGroup: true,
    xField: 'IdProduct',
    yField: 'amount',
    seriesField: 'name',
    dodgePadding: 2,
    // label: {
    //   position: 'middle',
    //   layout: [
    //     {
    //       type: 'interval-adjust-position',
    //     },
    //     {
    //       type: 'interval-hide-overlap',
    //     },
    //     {
    //       type: 'adjust-color',
    //     },
    //   ],
    // },
  });

  return (
    <div className="container">
      <Content className={styles.content_container}>
        <Row gutter={16} className={styles.dashboard_row}>
          {data.dataStatisticItem.map((data: IStatisticItem, index: number) => {
            const Icon = data.icon;
            const IconStatus = data.iconStatus;
            return (
              <Col key={`statistic_${index}`} span={6}>
                <Card>
                  <div className={styles.statistic_content}>
                    <Icon className={styles.statistic_icon}></Icon>
                    <div className={styles.statistic_text}>
                      <div className={styles.statistic__name}>{data.name}</div>
                      <div className={styles.statistic__number}>
                        {data.numberStatistic}
                      </div>
                    </div>
                  </div>

                  <div className={styles.statistic_footer}>
                    <IconStatus
                      className={styles.statistic_iconStatus}
                    ></IconStatus>
                    <div className={styles.statistic_status}>{data.status}</div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row gutter={16} className={styles.dashboard_row}>
          {data.dataChartItem.map((data: IChartItem, index: number) => {
            const IconStatisticChart = data.iconStatistic;
            return (
              <Col key={`chart_${index}`} span={8}>
                <Card>
                  <div className={styles.chart_header}>
                    <h3
                      style={{
                        fontWeight: 400,
                      }}
                    >
                      {data.numberAVG}
                    </h3>
                    <div className={styles.chart__percent}>
                      {data.percentStatistic}
                    </div>
                  </div>

                  <div className={styles.chart_content}>
                    <h6 className={styles.chart__name}>{data.nameChart}</h6>
                    <canvas
                      id="emailsCampaignChart"
                      className="chartjs-render-monitor"
                    ></canvas>
                  </div>

                  <div className={styles.chart_footer}>
                    <p>{data.nameStatistic}</p>
                    <IconStatisticChart
                      className={styles.chart_icon__statistic}
                    />
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row gutter={16} className={styles.dashboard_row}>
          <Col span={24}>
            <Card className={styles.globalSales_card}>
              <div className={styles.globalSales_header}>
                <h3 className={styles.globalSales__title}>
                  Global Sales by Top Locations
                </h3>
                <p className={styles.globalSales__desc}>
                  All products that were shipped
                </p>
              </div>

              <Col span={12}>
                <div className={styles.table_wrapper}>
                  <table className={styles.globalSales__table}>
                    <tbody>
                      {data.dataCountryProduct.map(
                        (data: ITableCountry, index) => (
                          <tr key={`country_${index}`}>
                            <td>
                              <Image
                                src={data.URLImg}
                                alt={data.nameCountry}
                              ></Image>
                            </td>
                            <td>{data.nameCountry}</td>
                            <td>
                              {Utils.convertNumberValueType(
                                data.numberProducts
                              )}
                            </td>

                            <td>{data.percentProducts}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </Col>

              <Col span={12}></Col>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} className={styles.dashboard_row}>
          <Col span={12}>
            <Card>
              <div className={styles.card_header}>
                <h3 className={styles.card__title}>Task</h3>
                <p className={styles.card__desc}>Backend Development</p>
              </div>
              <div className={styles.table_wrapper}>
                <table className={styles.tasks__table}>
                  <tbody>
                    {data.dataTableTasks.map((data: ITableTasks, index) => (
                      <tr key={`task_${index}`}>
                        <td>
                          <Input type="checkbox"></Input>
                        </td>
                        <td>
                          <Image
                            src={data.URLImg}
                            alt={'Image Dev'}
                            className={styles.task__devImg}
                          ></Image>
                        </td>
                        <td>{data.reportTitle}</td>
                        <td>
                          <TfiRulerPencil
                            className={styles.task__icon_edit}
                          ></TfiRulerPencil>
                        </td>
                        <td>
                          <AiOutlineClose
                            className={styles.task__icon_delete}
                          ></AiOutlineClose>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.tasks_footer}>
                <GrUpdate className={styles.statistic_iconStatus}></GrUpdate>
                <div className={styles.statistic_status}>
                  Update 3 minutes ago
                </div>
              </div>
            </Card>
          </Col>

          <Col span={12}>
            <Card>
              <div className={styles.card_header}>
                <h3 className={styles.card__title}>2020 Sales</h3>
                <p className={styles.card__desc}>
                  All Products Including Taxes
                </p>
              </div>
              <div className={styles.chart_sales}>
                <DynamicColumn {...config} />
              </div>
              <div className={styles.sales_footer}>
                <MdDone className={styles.statistic_iconStatus}></MdDone>
                <div className={styles.statistic_status}>
                  Data information certificed
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} className={styles.dashboard_row}>
          {data.dataStatisticItem.map((data: IStatisticItem, index: number) => {
            const Icon = data.icon;
            const IconStatus = data.iconStatus;
            return (
              <Col key={`statistic_${index}`} span={6}>
                <Card>
                  <div className={styles.statistic_content}>
                    <Icon className={styles.statistic_icon}></Icon>
                    <div className={styles.statistic_text}>
                      <div className={styles.statistic__name}>{data.name}</div>
                      <div className={styles.statistic__number}>
                        {data.numberStatistic}
                      </div>
                    </div>
                  </div>

                  <div className={styles.statistic_footer}>
                    <IconStatus
                      className={styles.statistic_iconStatus}
                    ></IconStatus>
                    <div className={styles.statistic_status}>{data.status}</div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>

        <FooterContainer></FooterContainer>
      </Content>
    </div>
  );
};

export default DashboardContainer;
