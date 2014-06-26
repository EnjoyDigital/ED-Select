/**
 * Creates an overlay for select boxes that can be styled
 * how we want.
 * @param  array options Options array
 * @return mixed
 */
$.fn.simpleSelect = function(options){

	var settings = $.extend({
		'customClass': ''
	}, options);

	return this.each(function(){

		var $select = $(this);

		// Create a container for all the elements
		var $selectWrapper = $('<div/>', {
			'class': 'simpleSelect-box-wrapper'
		});

		// Create the box wrapper and put the select box inside it
		$selectWrapper.insertAfter($select);
		$select.appendTo($selectWrapper);

		// Build up the structure of the custom select box
		$selectBox = $('<div/>', {
			'class': 'simpleSelect-box ' + settings.customClass
		}).appendTo($selectWrapper);

		$selectValue = $('<div/>', {
			'class': 'box-value'
		}).appendTo($selectBox).text( $('option:selected', $select).text() );

		$selectArrow = $('<div/>', {
			'class': 'box-arrow'
		}).appendTo($selectBox);

		// Create event triggers
		$select.on('change', function(){
			$selectValue.text( $('option:selected', $select).text() );
		});

	});
};
