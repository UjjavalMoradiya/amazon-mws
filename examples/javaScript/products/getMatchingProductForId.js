'use strict';

var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';

var amazonMws = require('../../../lib/amazon-mws')(accessKey, accessSecret);

var productRequest = function () {
    amazonMws.products.search({
        Version: '2011-10-01',
        Action: 'GetMatchingProductForId',
        SellerId: 'SELLER_ID',
        MWSAuthToken: 'MWS_AUTH_TOKEN',
        MarketplaceId: 'MARKET_PLACE_ID',
        IdType: 'SellerSKU',
        'IdList.Id.1': 'SKU'
    }, function (error, response) {
        if (error) {
            console.log('error products', error);
            return;
        }
        console.log('response', response);
    });
};

productRequest();
