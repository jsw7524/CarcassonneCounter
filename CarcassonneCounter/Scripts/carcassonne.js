var stack = [];

function countTotal() {
    var total = 0;
    $('table td').each(function () {

        var el = $(this).find('span');
        var n = parseInt($(el).html());
        if (n === 0) {
            $(this).css('opacity', '0.25');
        }
        else {
            $(this).css('opacity', '1');
        }
        total += n;
    });
    $('#total').html(total);
}

$(document).ready(function () {
    countTotal();
    $('td').on('click', function (e) {
        var el = $(this).find('span');
        var old = el.html();
        var newv = old - 1;
        if (newv > -1) {
            el.html(newv);
            stack.push(this)
        }
        countTotal();
    });

    $('#button_undo').on('click', function (e) {
        if (stack.length === 0) {
            return;
        }
        var elmtd = stack.pop();
        var el = $(elmtd).find('span');
        var old = el.html();
        var newv = parseInt(old) + 1;
        el.html(newv);
        countTotal();
    });
});