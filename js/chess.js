$(function () {

    function printBoard() {

        var columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for (var l = 8; l >= 1; --l) {

            for (var c = 0; c < columns.length; c++) {

                var sq = columns[c] + l;
            }
        }
    }

    printBoard();
});