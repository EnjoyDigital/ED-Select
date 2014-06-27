Simple Select
=========

Simple select is a basic plugin that allows you to override the default look and feel of select boxes. It uses 3 divs to build up the look and feel of a select box.

Tested down to IE8.

###How to use

Include Simple Select

```html
<script src="js/simpleSelect.min.js"></script>
```

###Create your select box

```html
<div class="field">
    <select name="my-select" class="simple-select">
      <option value="Value 1">Value 1</option>
      <option value="Value 2">Value 2</option>
    </select>
</div>
```

###Initialise the plugin

```html
<script>
$(function(){
	$('.simple-select').simpleSelect();
});
</script>
```

###Options

<table>
	<tr>
		<td><strong>Option</strong></td>
		<td><strong>Default</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td>customClass</td>
		<td></td>
		<td>Apply a custom class to a set of select objects</td>
	</tr>
</table>

###Notes

If the select box doesn't display correctly, check the width of the box wrapper - it is set to fill the full width of the surrounding element.
