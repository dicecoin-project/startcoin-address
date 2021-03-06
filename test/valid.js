var address = require('..');
var assert = require('assert');

test('valid', function() {
    function validate(addr, type) {
        assert.ok(address.validate(addr, type));
    };

    validate('DN6AfLiLrdEa5WaGGEuihu1skP76Xgp5Lh');
    validate('DZAAfemxiUp8VvagRcJUD7G84Xus3vwFEq', 'prod');
    validate('TQnt1DSjgAnVB3ZKECrAKUjmbhcUbUkpm7', 'testnet');



    // p2sh addresses
    validate('32PAANQEVLN9pYig1zCxFUSAiuLowbLaSW');
    validate('3Q7DLeQQNLVzMKRGctt1WHdR5nbp6gijxv', 'prod');

});

