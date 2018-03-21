angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productsSrvc){
    if( $stateParams.id === 'shoes'){
       productsSrvc.getShoeData().then(function(res){
           $scope.productData = res.data;
       });
       
    }
    if( $stateParams.id === 'socks'){
        productsSrvc.getSockData().then(function(res){
            $scope.productData = res.data;
        });
    }
});