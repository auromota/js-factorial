var FactorialService = (function () {

    var _results = [1, 1];

    function _isNumberValid(number) {
       if(!isNaN(number)) {
            number = parseInt(number);
            if(number >= 0) return true;
            return false;
        }
        return false;
    }
    
    function calculate(number) {
        if(!_isNumberValid(number)) return null;
        while(number >= _results.length) {
            _results.push(_results.length * calculate(_results.length - 1));
        }
        return _results[number];
    }

    //public api
    return {
        "calculate": calculate
    }

})();
