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