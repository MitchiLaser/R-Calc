/*jslint browser: true */
/*global window */
'use strict';

window.addEventListener("load", function(){
	// generate E-Series as object and fill in the missing fields in the UI
	var Series = Object.freeze( // freezing prevents editing of object
		[
			// E3
			[1.0, 2.2, 4.7],

			// E6
			[1.0, 1.5, 2.2, 3.3, 4.7, 6.8],

			// E12
			[1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2],

			// E24
			[1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1],

			// E48
			[1.00, 1.05, 1.10, 1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01, 3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 5.90, 6.19, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 9.09, 9.53],

			// E96
			[1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 2.05, 2.10, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55, 2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49, 5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32, 7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76],

			// E192
			[1.00, 1.01, 1.02, 1.04, 1.05, 1.06, 1.07, 1.09, 1.10, 1.11, 1.13, 1.14, 1.15, 1.17, 1.18, 1.20, 1.21, 1.23, 1.24, 1.26, 1.27, 1.29, 1.30, 1.32, 1.33, 1.35, 1.37, 1.38, 1.40, 1.42, 1.43, 1.45, 1.47, 1.49, 1.50, 1.52, 1.54, 1.56, 1.58, 1.60, 1.62, 1.64, 1.65, 1.67, 1.69, 1.72, 1.74, 1.76, 1.78, 1.80, 1.82, 1.84, 1.87, 1.89, 1.91, 1.93, 1.96, 1.98, 2.00, 2.03, 2.05, 2.08, 2.10, 2.13, 2.15, 2.18, 2.21, 2.23, 2.26, 2.29, 2.32, 2.34, 2.37, 2.40, 2.43, 2.46, 2.49, 2.52, 2.55, 2.58, 2.61, 2.64, 2.67, 2.71, 2.74, 2.77, 2.80, 2.84, 2.87, 2.91, 2.94, 2.98, 3.01, 3.05, 3.09, 3.12, 3.16, 3.20, 3.24, 3.28, 3.32, 3.36, 3.40, 3.44, 3.48, 3.52, 3.57, 2.61, 3.65, 3.70, 3.74, 3.79, 3.83, 3.88, 3.92, 3.97, 4.02, 4.07, 4.12, 4.17, 4.22, 4.27, 4.32, 4.37, 4.42, 4.48, 4.53, 4.59, 4.64, 4.70, 4.75, 4.81, 4.87, 4.93, 4.99, 5.05, 5.11, 5.17, 5.23, 5.30, 5.36, 5.42, 5.49, 5.56, 5.62, 5.69, 5.76, 5.83, 5.90, 5.97, 6.04, 6.12, 6.19, 6.26, 6.34, 6.42, 6.49, 6.57, 6.65, 6.73, 6.81, 6.90, 6.98, 7.06, 7.15, 7.23, 7.32, 7.41, 7.50, 7.59, 7.68, 7.77, 7.87, 7.79, 8.06, 8.16, 8.25, 8.35, 8.45, 8.56, 8.66, 8.76, 8.87, 8.98, 9.09, 9.20, 9.31, 9.42, 9.53, 9.65, 9.76, 9.88]
		]
	);
	Series.forEach(e => Object.freeze(e)); // freeze all arrays in this series

	// generate the list of prefixes to multiply the resistor values with
	var prefixes = Object.freeze([...Array(7).keys()].map(e => Math.pow(10, e))); // 10e0 to 10e6

	// buffers to store the selected options
	var ActiveSeries = undefined;
	var prefix = undefined;

	// define the two function for the available combinators
	const series = (a,b) => a+b;
	const parallel = (a,b) => (a*b)/(a+b);

	// create a data structure (binary tree) to store computation results with the necessary information to reconstruct the calculation
	class b_node {
		constructor(self) {
			this.self = self;							// the resistor value or a combination
			this.other = undefined;				// the other resistor value or combination
			this.combinator = undefined;	// the combinator used to combine the two objects (series or parallel)
			this.intermediate = (self instanceof b_node)?self.intermediate:self; // the intermediate result of the combination for a quick lookup
		}

		attach(other, combinator) { // insert other branch or leaf into the tree
			this.other = other;
			this.combinator = combinator;
			// update intermediate with the newly attached value (possibly overwrite old intermediate value)
			this.intermediate = combinator((this.self instanceof b_node)?this.self.intermediate:this.self, (other instanceof b_node)?other.intermediate:other);
		}

		comb2str() { // return a string representation of the combinator
			switch (this.combinator) {
				case series: return '+';
				case parallel: return '||';
				default: return 'ERR';
			}
		}

		repr() { // return a string representation of the tree
			// if the other branch is not defined than the node is a leaf
			if (this.other === undefined) return this.self.toString(); // TODO: maybe trim to a decimal point, also at the other places

			// get string representation of the two branches and add brackets if the combinator is different
			if (this.self instanceof b_node) {
				var self_str = (this.combinator == this.self.combinator || this.self.combinator == undefined)?this.self.repr():`(${this.self.repr()})`;
			} else {
				var self_str = this.self.toString();
			}
			if (this.other instanceof b_node) {
				var other_str = (this.combinator == this.other.combinator || this.other.combinator == undefined)?this.other.repr():`(${this.other.repr()})`;
			} else {
				var other_str = this.other.toString();
			}

			return `${self_str} ${this.comb2str()} ${other_str}`;
		}
	}

	Series.forEach( function(e) { // create selection button for each series
		var new_node = document.getElementsByClassName("selection_row")[0].appendChild(Object.assign(document.createElement("li"), { // append new node (list-entry) to list
			innerText: `E${e.length}`,
			onclick: function() {
				var series_entry = e;
				var this_node = new_node;
				return function() {
					ActiveSeries = series_entry; // set active series to selection
					Array.from(this_node.parentNode.children).forEach(node => (node.classList.remove("selected")) ); // remove 'selected' class from all list entries
					this_node.classList.add("selected"); // set selected class attribute for current object
				} (); // execute returned callback
			}
		}));
	});

	// add event listener to all radio buttons to change the prefix
	document.querySelectorAll('input[type="radio"]').forEach(e => {e.addEventListener('click', function(e){
			var localprefix = parseInt(e.target.getAttribute('prefix'));
			return function() {
				prefix = localprefix;
			} ();
		});
		if (e.hasAttribute('checked')) {
			prefix = parseInt(e.getAttribute('prefix')); // find the default prefix in the HTML
			e.click(); // make sure the default checkbox - browsers might not reset this after reloading the page
		}
	});

	// add event listener to 'calculate' button
	document.getElementById('submitbutton').addEventListener('click', function() {
		// make the results section invisible
		document.querySelector('#results').style.setProperty('visibility', 'collapse');

		// clear table containing results
		document.getElementById('results_container').innerHTML = '';

		// get user input
		var resistance = parseFloat(document.getElementById('resistance').value);
		if (ActiveSeries === undefined || prefix === undefined || isNaN(resistance)) {
			console.error("Invalid input");
			return;
		}
		console.log(`Resistance: ${resistance}${(Math.log10(prefix) != 0)?'e'+Math.log10(prefix):''}Ω, Series: E${ActiveSeries.length}`);

		var resistors = Object.freeze(prefixes.flatMap(p => ActiveSeries.map(r => r*p))); // create a list of all available resistors
		
		// TODO call the function to calculate the closest resistor value

		// last step: make the results section visible
		document.querySelector('#results').style.setProperty('visibility', 'visible');
	})

})
