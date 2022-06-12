// Select color input
// Select size input

let height, width, color

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
})

/**
 * @description create a grid of squares
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 * 
 */

function makeGrid(h, w) {
	$('tr').remove();

	// Your code goes here!
	for (let i = 1; i <= h; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (let j = 1; j <= w; j++) {
			$('#table' + i).append('<td></td>');
		}
	}
	/**
	 *@description creates color for grid of squares 
	 *@param color - Allows user to pick a background color to paint squares
	 */

	$('td').click(function addColor() {
		color = $('#colorPicker').val();

		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);
		}
	})
}