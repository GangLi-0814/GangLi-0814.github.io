var data = [{
        name: '武汉',
        value: ['2019.09～now', '🎓🐱💕🐯🏸🎒']
    },
    {
        name: '宜昌',
        value: ['2020.11', '⛰️🏞🫓']
    },
    {
        name: '咸宁',
        value: ['2020.11', '📝🏆💰']
    },
    {
        name: '威海',
        value: ['2021.01', '🐱🏠🚗🌊🦐🐟']
    },
    {
        name: '潜江',
        value: ['2021.04', '🦞🐔🍹🧁']
    }
];
var geoCoordMap = {
    '武汉': [114.412, 30.544],
    '宜昌': [111.435, 30.530],
    '咸宁': [114.299, 29.853],
    '威海': [122.058, 37.194],
    '潜江': [112.899, 30.401]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + name
                + '</div>'
                + time
                + '<br>'
                + describe;
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series : [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d4d4d',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);