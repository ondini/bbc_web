import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// import './chart.css'; 

const data = [
    {
      "id": "testData",
      "color": "hsl(0, 52%, 40%))",
      "data": [
        {
          "x": "2022-01-26",
          "y": 9.14
        },
        {
          "x": "2022-01-27",
          "y": 17.72
        },
        {
          "x": "2022-01-28",
          "y": 20.97
        },
        {
          "x": "2022-01-31",
          "y": 26.48
        },
        {
          "x": "2022-02-01",
          "y": 27.8
        },
        {
          "x": "2022-02-02",
          "y": 30.25
        },
        {
          "x": "2022-02-03",
          "y": 33.97
        },
        {
          "x": "2022-02-04",
          "y": 36.06
        },
        {
            "x": "2022-02-07",
            "y": 37.71
        },
        {
            "x": "2022-02-08",
            "y": 33.39
        },
        {
            "x": "2022-02-09",
            "y": 34.05
        },
        {
            "x": "2022-02-10",
            "y": 37.04
        },
        {
            "x": "2022-02-11",
            "y": 42.37
        },
        {
            "x": "2022-02-14",
            "y": 43.66
        },
        {
            "x": "2022-02-15",
            "y": 45.93
        },
        {
            "x": "2022-02-16",
            "y": 46.8
        },
        {
            "x": "2022-02-17",
            "y": 48.64
        },
        {
            "x": "2022-02-18",
            "y": 50.35
        },
        {
            "x": "2022-02-21",
            "y": 50.71
        },
      ]
    },
]

  // for (let num = 30; num >= 0; num--) {
  //   data.data.push({
  //     "x": subDays(new Date(), num).toISOString().substr(0, 10),
  //     "y": 1 + Math.random(),
  //   });
  // }

const theme = {
    "background": "rgba(0, 0, 0, 0)",
    "textColor": "#ffffff",
    "fontSize": 12,
    "axis": {
        "domain": {
            "line": {
                "stroke": "#ffffff",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 13,
                "fill": "#ffffff"
            }
        },
        "ticks": {
            "line": {
                "stroke": "#ffffff",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 12,
                "fill": "#ffffff"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#353535",
            "strokeWidth": 1,
            "strokeOpacity": 0.8
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#ffffff",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#ffffff",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#ffffff",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#ffffff",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "crosshair": {
      "line": {
          "stroke": '#ffffff',
          "strokeWidth": 1,
          "strokeOpacity": 0.8,
      },
    }

}
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Chart2 = ({color}) => (
    <ResponsiveLine
        data={data}
        tooltip={({ point }) => {
            return (
                <div className="tooltip">
                    <p>{point.data.xFormatted} : {point.data.y}%</p>
                </div>
            )
        }} 
        margin={{ top: 10, right: 10, bottom: 50, left: 60 }}
        xScale={{ format: "%Y-%m-%d", type: "time" }}
        xFormat="time:%d. %m. %Y"
        yScale={{ type: 'linear', stacked: true }}
        curve="monotoneX"
        theme={theme}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 9,
            tickPadding: 9,
            tickRotation: -40,
            format: "%d.%m.",
            legend: '',
            legendOffset: 55,
            legendPosition: 'middle'

        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: 'Zisk [%]',
            legendOffset: -46,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={[color]}
        lineWidth={2}
        enablePoints={false}
        enableArea={true}
        areaOpacity={0.5}
        useMesh={true}
        crosshairType="cross"
        legends={[]}
 
    />
)

// function CustomTooltip({ active, payload, label }) {
//   if (active) {
//     return (
//       <div className="tooltip">
//         <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
//         <p>${payload[0].value.toFixed(2)} CAD</p>
//       </div>
//     );
//   }
//   return null;
// }
// const Chart2 = () => {
//   return (
//     <div>Chart2</div>
//   )
// }

export default Chart2

