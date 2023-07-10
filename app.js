var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {


    $scope.submitForm = function() {

        $http.post('/api/create/jcic', {
            nationalId: $scope.nationalId,
            typeCode: $scope.typeCode,
            regionCode: $scope.regionCode,
            region: $scope.region,
            birthday: $scope.birthday,
            issueDate: $scope.issueDate,
            z21: $scope.z21,
            z22: $scope.z22
        }).then(function(response) {
            console.log('表單提交成功');
        }, function(error) {
            console.log('表單提交失敗：', error);
        });
    };

    $scope.openCount = 1;

    $scope.typeCodeList = [{
        id: "1",
        name: '初發'
    }, {
        id: "2",
        name: '補發'
    }, {
        id: "3",
        name: '換發'
    }];

    $scope.reginCodeList = [{
        id: "09007000",
        name: '連江'
    }, {
        id: "09020000",
        name: '金門'
    }, {
        id: "10017000",
        name: '基市'
    }, {
        id: "10018000",
        name: '竹市'
    }, {
        id: "10020000",
        name: '嘉市'
    }, {
        id: "10001000",
        name: '北縣'
    }, {
        id: "10002000",
        name: '宜縣'
    }, {

        id: "10003000",
        name: '桃縣'
    }, {
        id: "10004000",
        name: '竹縣'
    }, {
        id: "10005000",
        name: '苗縣'
    }, {
        id: "10006000",
        name: '中縣'
    }, {
        id: "10007000",
        name: '彰縣'
    }, {
        id: "10008000",
        name: '投縣'
    }, {
        id: "10009000",
        name: '雲縣'
    }, {
        id: "10010000",
        name: '嘉縣'
    }, {
        id: "10011000",
        name: '南縣'
    }, {
        id: "10012000",
        name: '高縣'
    }, {
        id: "10013000",
        name: '屏縣'
    }, {
        id: "10014000",
        name: '東縣'
    }, {
        id: "10015000",
        name: '花縣'
    }, {
        id: "10016000",
        name: '澎縣'
    }, {
        id: "63000000",
        name: '北市'
    }, {
        id: "64000000",
        name: '高市'
    }, {
        id: "65000000",
        name: '新北市'
    }, {
        id: "66000000",
        name: '中市'
    }, {
        id: "67000000",
        name: '南市'
    }, {
        id: "68000000",
        name: '桃市'
    }];

    $scope.Z21List = [{
            id: "Y與檔存資料相符",
            name: 'Y與檔存資料相符'
        },
        {
            id: "N查無紀錄",
            name: 'N查無紀錄'
        },
        {
            id: "C舊證已停用",
            name: 'C舊證已停用'
        },
        {
            id: "L登陸掛失",
            name: 'L登陸掛失'
        },
        {
            id: "D已停止使用",
            name: 'D已停止使用'
        },
        {
            id: "I輸入不完整或有誤",
            name: 'I輸入不完整或有誤'
        },
        {
            id: "X本中心資料不完整",
            name: 'X本中心資料不完整'
        },
        {
            id: "R限制驗證",
            name: 'R限制驗證'
        }
    ];

    $scope.Z22List = [{
            id: true,
            name: '通過'
        },
        {
            id: false,
            name: '非通過'
        }
    ];
});
