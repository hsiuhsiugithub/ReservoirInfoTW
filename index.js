

function NewValue() {
    if (Math.random() > .5) {
        return Math.round(Math.random() * 100);
    } else {
        return (Math.random() * 100).toFixed(1);
    }
}

axios.get(`https://www.taiwanstat.com/waters/latest`)
    .then((response) => {
        var dataObject = response.data;
        const reservoirList = ['新山水庫', '翡翠水庫', '石門水庫', '永和山水庫', '寶山水庫', '寶山第二水庫', '明德水庫', '鯉魚潭水庫'
            , '德基水庫', '石岡壩', '日月潭水庫', '霧社水庫', '湖山水庫', '仁義潭水庫', '蘭潭水庫'
            , '白河水庫', '曾文水庫', '烏山頭水庫', '南化水庫', '阿公店水庫', '牡丹水庫'] //21個水庫

        for (let i = 0; i < Object.keys(dataObject[0]).length; i++) {
            console.log(reservoirList[i])
            console.log(dataObject[0][reservoirList[i]])
        }
    },
        (error) => {
            var message = error.response.data.message;
        }
    );

window.onload = function () {

    
    var config = liquidFillGaugeDefaultSettings();
    config.circleThickness = 0.15;
    config.circleColor = "#808015";
    config.textColor = "#555500";
    config.waveTextColor = "#FFFFAA";
    config.waveColor = "#AAAA39";
    config.textVertPosition = 0.8;
    config.waveAnimateTime = 1000;
    config.waveHeight = 0.05;
    config.waveAnimate = true;
    config.waveRise = false;
    config.waveHeightScaling = false;
    config.waveOffset = 0.25;
    config.textSize = 0.75;
    config.waveCount = 3;
    var gauge = loadLiquidFillGauge("fillgauge", 60.44, config);
}