function NewValue() {
    if (Math.random() > .5) {
        return Math.round(Math.random() * 100);
    } else {
        return (Math.random() * 100).toFixed(1);
    }
}

function setColor(config, percentage) {
    if (percentage < 25) {
      config.circleColor = "#FF7777";
      config.textColor = "#FF4444";
      config.waveTextColor = "#FFAAAA";
      config.waveColor = "#FFDDDD";
    }
    else if (percentage < 50) {
      config.circleColor = "rgb(255, 160, 119)";
      config.textColor = "rgb(255, 160, 119)";
      config.waveTextColor = "rgb(255, 160, 119)";
      config.waveColor = "rgba(245, 151, 111, 0.48)";
    }
  }

axios.get(`https://www.taiwanstat.com/waters/latest`)
    .then((response) => {
        var dataObject = response.data;
        const reservoirList = ['新山水庫', '翡翠水庫', '石門水庫', '永和山水庫', '寶山水庫', '寶山第二水庫', '明德水庫', '鯉魚潭水庫'
            , '德基水庫', '石岡壩', '日月潭水庫', '霧社水庫', '湖山水庫', '仁義潭水庫', '蘭潭水庫'
            , '白河水庫', '曾文水庫', '烏山頭水庫', '南化水庫', '阿公店水庫', '牡丹水庫'] //21個水庫



        //初始化圖表
        for (let i = 0; i < Object.keys(dataObject[0]).length; i++) {

            var e = document.createElement('div');
            e.innerHTML = `
            <h3 style="text-align: center;">${reservoirList[i]}</h3>
            <svg id="fillgauge${i}" width="100%" height="200px"></svg>
            <div>有效蓄水量：${dataObject[0][reservoirList[i]]['volumn']}萬立方公尺</div>
            <div>更新時間：${dataObject[0][reservoirList[i]]['updateAt']}</div>

            `;
            e.className = "reservoir";
            document.getElementById('content').append(e);

        }

        for (let i = 0; i < Object.keys(dataObject[0]).length; i++) {

            //圖像化數據
            console.log(reservoirList[i])
            console.log(dataObject[0][reservoirList[i]])

            var config = liquidFillGaugeDefaultSettings();
            config.circleThickness = 0.15;
            setColor(config, dataObject[0][reservoirList[i]]['percentage'])
          
            config.textVertPosition = 0.8;
            config.waveAnimateTime = 1000;
            config.waveHeight = 0.05;
            config.waveAnimate = true;
            config.waveRise = false;
            config.waveHeightScaling = false;
            config.waveOffset = 0.25;
            config.textSize = 0.75;
            config.waveCount = 3;
            var gauge = loadLiquidFillGauge("fillgauge"+i, dataObject[0][reservoirList[i]]['percentage'], config);
        }
    },
        (error) => {
            var message = error.response.data.message;
        }
    );
