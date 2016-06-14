(function() {

    function _init() {
        var button = document.getElementById('calculate');
        button.addEventListener('click', _submitHandler);
    }

    function _submitHandler() {
        var number = _readInput();
        var result = FactorialService.calculate(number);
        _displayResult(result);
    }

    function _readInput() {
        var input = document.getElementById('number');
        return input.value;
    }

    function _displayResult(text) {
        var span = document.getElementById('result');
        if(text == null) {
           span.innerHTML = 'Invalid input.';
        } else {
            span.innerHTML = text;
        }
    }

    _init();

})();