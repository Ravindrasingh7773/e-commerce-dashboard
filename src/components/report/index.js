import React, { useEffect, useState } from 'react';
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import image1 from "../../assets/images/report1.png";
import image2 from "../../assets/images/report2.png";
import image3 from "../../assets/images/report3.png";
import img1 from "../../assets/images/table1.png";
import img2 from "../../assets/images/table2.png";
import img3 from "../../assets/images/table3.png";
import img4 from "../../assets/images/table4.png";
import ReactECharts from "echarts-for-react";
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { MapChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, VisualMapComponent } from 'echarts/components';
import { registerMap } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
// import 'echarts/map/js/world'; // Import the world map

echarts.use([MapChart, TitleComponent, TooltipComponent, LegendComponent, VisualMapComponent, CanvasRenderer]);

const option = {
  title: {
    text: "Customer Growth",  
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Returning customers", "New custo  mers"],
    orient: "horizontal",
    left: 200,
    top: 0,
  },

  grid: {
    left: 20,
    top: 50,
    right: 50,
    bottom: 20,
    containLabel: true,
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar", "stack"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  xAxis: [
    {
      axisLine: {
        show: true,
        lineStyle: {
          color: ["#cccccc"],
          type: "dashed",
          width: 1,
        },
      },
      type: "category",
      axisTick: { show: false },
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#cccccc"],
          type: "dashed",
          width: 1,
        },
      },
    },
  ],
  series: [
    {
      name: "Returning customers",
      type: "bar",
      barGap: 0,
      color: "#D7DBEC",
      emphasis: {
        focus: "series",
      },
      data: [450, 370, 330, 420, 460, 360, 405, 415, 440, 400, 425, 425],
      itemStyle: {
        emphasis: {
          barBorderRadius: [50, 50],
        },
        normal: {
          barBorderRadius: [50, 50],
        },
      },
      barWidth: "10",
      barGap: "30%",
    },
    {
      barWidth: "10",
      color: "#1E5EFF",

      name: "New customers",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [345, 260, 175, 265, 200, 250, 195, 150, 190, 240, 150, 110],
      itemStyle: {
        emphasis: {
          barBorderRadius: [50, 50],
        },
        normal: {
          barBorderRadius: [50, 50, 50, 50],
        },
      },

      barGap: "30%",
    },
  ],
};

const saleOption = {
  title: {
    text: "Sales Goals",
  },
  
  series: [
    {
      name: "Progress",
      type: "pie",
      radius: ["70%", "90%"],
      startAngle: 90,
      endAngle: -270,
      hoverAnimation: false,
      label: {
        show: true,
        position: "center",
        formatter: "{d}%",
        fontSize: 20,
        fontWeight: "bold",
      },
      data: [
        {
          value: 75,
          name: "Progress",
          itemStyle: {
            color: "#FFD700",
          },
          emphasis: {
            itemStyle: {
              color: "#FFD700",
            },
          },
        },
        {
          value: 25,
          name: "Remainder",
          itemStyle: {
            color: "#E5E7EB",
          },
          emphasis: {
            itemStyle: {
              color: "#E5E7EB",
            },
          },
        },
      ],
    },
  ],
};
const conversationOption = (progressValue) => ({
  title: {
    text: "Conversation Rate",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c}%",
  },
  series: [
    {
      name: "Progress",
      type: "pie",
      radius: ["70%", "90%"],
      startAngle: 90,
      endAngle: -270,
      hoverAnimation: false,
      label: {
        show: true,
        position: "center",
        formatter: () => `${progressValue}%`, // Always show the progress value
        fontSize: 20,
        fontWeight: "bold",
      },
      labelLine: {
        show: true,
      },
      data: [
        {
          value: progressValue,
          name: "Progress",
          itemStyle: {
            color: "#1FD286",
          },
          emphasis: {
            itemStyle: {
              color: "#1FD286",
            },
          },
          label: {
            show: true,
            formatter: () => `${progressValue}%`, // Show progress value
          },
        },
        {
          value: 100 - progressValue,
          name: "Remainder",
          itemStyle: {
            color: "#E5E7EB",
          },
          emphasis: {
            itemStyle: {
              color: "#E5E7EB",
            },
          },
          label: {
            show: false, // Hide by default
            formatter: () => `${100 - progressValue}%`, // Show remainder value on hover
          },
        },
      ],
    },
  ],
});

 

const orderChart = {
  xAxis: {
    type: "category",
    data: ["4am", "8am", "12am", "4pm", "8pm", "12pm"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: (value) => `$${value} `,
    }, 
    splitLine: {
      show: true, 
      lineStyle: {
        color: ["#cccccc"],
        type: "dashed",
        width: 1,
      },
    },
  },
  grid: {
    top: 30,
    right: 30,
    left: 40,
    bottom: 30,
  },
  series: [
    {
      name: "May 21",
      itemStyle: { normal: { color: "#1E5EFF" } },
      data: [20, 10, 40, 20, 30, 70, 27, 38],
      type: "line",
    },
  ],
};
const Report = () => {
   const [wordmapOption, setWordmapOption] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json');
        const worldJson = await response.json();
        registerMap('world', worldJson);  
 
        setWordmapOption({
          title: {
            text: 'World Map',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
          },
         legend: {
        orient: 'vertical',
        left: 20,
        top:10, 
        data: [
          { name: 'United States', icon: 'diamond' },      
          { name: 'Europe', icon: 'diamond' },          
          { name: 'Australia', icon: 'diamond' },        
          { name: 'India', icon: 'diamond' },            
          { name: 'Other', icon: 'diamond' },          
        ],
        formatter: function (name) {  
          const data = {
            'United States': 29.051,
            'Europe': 18.041,
            'Australia': 10.430,
            'India': 5.420,
            'Other': 3.210,
          };
          return `${name}: ${data[name]}`;   
        },
        textStyle: {
          fontSize: 12,
        },
      }, 
      grid:{
        left: 40,
        right: 40,
        bottom: 30,
        containLabel: true,
      },
          series: [
            {
              type: 'map',
              map: 'world',
              label: {
                show: false,
              },
          roam: true, 
              emphasis: {
                label: {
                  show: true,
                },
              }, data: [
             { name: 'United States of America', value: 29.051, itemStyle: { areaColor: '#336DFF' } }, // Blue4682B4 
             { name: 'Ukraine', value: 29.051, itemStyle: { areaColor: '#FEC600' } }, // Blue4682B4 
            { name: 'Australia', value: 10.430, itemStyle: { areaColor: '#33466A' } }, // Dark Blue1E90FF
            { name: 'India', value: 5.420, itemStyle: { areaColor: '#FF8A00' } }, // Green
            { name: 'Pakistan', value: 5.320, itemStyle: { areaColor: '#FF8A00' } }, // Green
            { name: 'Other', value: 3.210, itemStyle: { areaColor: '#FF8A00' } }, // Grayd3d3d3
          ],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching the world map data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className={styles.report}>
      <MainDashboardHeading
        title={"Reports"}
        fillBtn={true}
        title2={"Export"}
      />
      <div className={styles.r_customer_growth}>
        <div className={styles.rcg_wrapper}>
          <div className={styles.rcgw_growth}>
            <div className={styles.rcgwg_month}>
              {/* <h5>Customer Growth</h5> */}
              <span>Last 12 Months</span>
            </div>
            <div className={styles.return_new_customer}></div>
            <ReactECharts option={option} />
          </div>
          <div className={styles.rcgw_totleUsers}>
            <div className={styles.rcgwt_existing}>
              <span>Existing Users</span>
              <h6>5.653</h6>
              <p>22.45%</p>
            </div>
            <div className={styles.rcgwt_existing1}>
              <span>New Users</span>
              <h6>1.650</h6>
              <p>15.34%</p>
            </div>
            <div className={styles.rcgwt_totle}>
              <span>Total Visits</span>
              <h6>9.504</h6>
              <p>18.25%</p>
            </div>
            <div className={styles.rcgwt_unique}>
              <span>Unique Visits</span>
              <h6>5.423</h6>
              <p>10.24%</p>
            </div>
          </div>
          <div className={styles.rcgw_conversion}>
            <div className={styles.rcgwc_salesgoal}>
              {/* <h5>Sales Goal</h5> */}
              <ReactECharts option={saleOption} />
              <div className={styles.rcgwcs_sold}>
                <span>Sold for:</span>
                <p>$15.000</p>
              </div>
              <div className={styles.rcgwcs_sold}>
                <span>Month goal:</span>
                <p>$20.000</p>
              </div>
              <div className={styles.rcgwcs_sold}>
                <span>Left:</span>
                <p>$5.000</p>
              </div>
            </div>
            <div className={styles.rcgwc_rate}>
              <div className={styles.rcgwc_salesgoal}>
                {/* <h5>Conversion Rate</h5> */}
                <ReactECharts option={conversationOption(25)} />
                <div className={styles.rcgwcs_sold}>
                  <span>Cart:</span>
                  <p>35%</p>
                </div>
                <div className={styles.rcgwcs_sold}>
                  <span>Checkout:</span>
                  <p>29%</p>
                </div>
                <div className={styles.rcgwcs_sold}>
                  <span>Purchase:</span>
                  <p>25%</p>
                </div>
              </div>
            </div>
            <div className={styles.rcgwc_value}>
              <h5>Average Order Value</h5>
              <div className={styles.rcgwcv_month}>
                <p>This Month</p>
                <span>$48.90</span>
                <p>Previous Month</p>
                <span>$48.90</span>
              </div>
              <div>
                <ReactECharts option={orderChart} />
              </div>
            </div>
          </div>
          <div className={styles.rcgw_demographi}>
            <div className={styles.rcgwd_image}> 
            <ReactEcharts option={wordmapOption} /> 
            </div>
            <div className={styles.rcgwd_visits}>
              <div className={styles.rcgwdv_visits}>
                <img src={image2} />
              </div>
              <div className={styles.rcgwdv_visits}>
                <img src={image3} />
              </div>
            </div>
          </div>
          <div className={styles.rcgw_topCustomer}>
            <div className={styles.drt_recent}>
              <h5>Top Customers</h5>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Orders</th>
                  <th>Spent</th>
                </tr>
                <tr>
                  <td>
                    <div className={styles.lee_henry}>
                      <span>A</span>
                      <span>Lee Henry</span>
                    </div>
                  </td>
                  <td>52</td>
                  <td>$969.37</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.lee_henry}>
                      <span>M</span>
                      <span>Myrtie McBride</span>
                    </div>
                  </td>
                  <td>24.05.2023</td>
                  <td>$124.97</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.lee_henry}>
                      <span>T</span>
                      <span>Tommy Walker</span>
                    </div>
                  </td>
                  <td>24.05.2023</td>
                  <td>$124.97</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.lee_henry}>
                      <span>K</span>
                      <span>Lela Cannon</span>
                    </div>
                  </td>
                  <td>24.05.2023</td>
                  <td>$124.97</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.lee_henry}>
                      <span>S</span>
                      <span>Jimmy Cook</span>
                    </div>
                  </td>
                  <td>24.05.2023</td>
                  <td>$124.97</td>
                </tr>
              </table>
            </div>
            <div className={styles.drt_productSold}>
              <div className={styles.drt_recent}>
                <h5>Top Products</h5>
                <table className={styles.drtr_table}>
                  <tr>
                    <th>Name</th>
                    <th>Clicks</th>
                    <th>Units Sold</th>
                  </tr>
                  <tr>
                    <td className={styles.t_row_img}>
                      <span>
                        <img src={img1} />
                      </span>
                      Men Grey Hoodie
                    </td>
                    <td>$49.90</td>
                    <td>204</td>
                  </tr>
                  <tr>
                    <td className={styles.t_row_img}>
                      <span>
                        <img src={img2} />
                      </span>
                      Men Grey Hoodie
                    </td>
                    <td>$49.90</td>
                    <td>204</td>
                  </tr>
                  <tr>
                    <td className={styles.t_row_img}>
                      <span>
                        <img src={img3} />
                      </span>
                      Men Grey Hoodie
                    </td>
                    <td>$49.90</td>
                    <td>204</td>
                  </tr>
                  <tr>
                    <td className={styles.t_row_img}>
                      <span>
                        <img src={img4} />
                      </span>
                      Men Grey Hoodie
                    </td>
                    <td>$49.90</td>
                    <td>204</td>
                  </tr>
                  <tr>
                    <td className={styles.t_row_img}>
                      <span>
                        <img src={img1} />
                      </span>
                      Men Grey Hoodie
                    </td>
                    <td>$49.90</td>
                    <td>204</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.store_funnel_row}></div>
        </div>
      </div>
    </div>
  );
};
export default Report;
