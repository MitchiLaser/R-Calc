/*jslint browser: true */
/*global window */
'use strict';

window.addEventListener("DOMContentLoaded", function(){
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
	// The precision of floating point variables decreases with higher numbers. Therefore, keeping the range of resistors smaller
	// and compensating the range with a pseudo-prefix by writing "k" or "M" in the UI increases the precision of the calculation.
	var prefixes = Object.freeze([...Array(8).keys()].map(e => Math.pow(10, e-3))); // 10e-3 to 10e4

	// buffers to store the selected options
	var ActiveSeries = undefined;
	var prefix = undefined;

	// lookup tables for the possible combinations of 2 resistors » speed up computation by reusing this lookup
	var r2_series, r2_parallel;

	// define the two function for the available combinators
	const series = (a,b) => a+b;
	const parallel = (a,b) => (a*b)/(a+b);

	// create a data structure (unsorted binary tree) to store computation results with the necessary information to reconstruct the calculation
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
			return this;
		}

		comb2str() { // return a string representation of the combinator
			switch (this.combinator) {
				case series: return '+';
				case parallel: return '||';
				default: return 'ERR';
			}
		}

		unit(value) {
			return value.toFixed(3) + prefix + 'Ω';
		}

		repr() { // return a string representation of the tree
			this.simplify(); // simplify the tree before generating the string representation. This removes problems which might occur 5 lines below this comment
			// if the other branch is not defined than the node is a leaf
			if (this.combinator === undefined) return this.unit(this.self); // trim after second decimal point

			// get string representation of the two branches and add brackets if the combinator is different
			if (this.self instanceof b_node) {
				var self_str = (this.combinator == this.self.combinator || this.self.combinator == undefined)?this.self.repr():`(${this.self.repr()})`;
			} else {
				var self_str = this.unit(this.self);
			}
			if (this.other instanceof b_node) {
				var other_str = (this.combinator == this.other.combinator || this.other.combinator == undefined)?this.other.repr():`(${this.other.repr()})`;
			} else {
				var other_str = this.unit(this.other);
			}

			return `${self_str} ${this.comb2str()} ${other_str}`;
		}

		simplify() { // recursively simplify the tree by trying to replace branches of b_nodes with single values by the value itself
			if (this.combinator === undefined) return; // if the node is a leaf containing only one resistor value
			// check the 'self' branch
			if (this.self instanceof b_node) {
				if (this.self.combinator === undefined)
					this.self = this.self.self;
				else
					this.self.simplify();
			}
			// check the 'other' branch
			if (this.other instanceof b_node) {
				if (this.other.combinator === undefined)
					this.other = this.other.self;
				else
					this.other.simplify();
			}
		}
	}

	var deviation = (target, result) => Math.abs(target-result);
	var rdeviation = (target, result) => ((deviation(target, result) / target) * 100).toFixed(3);
	var float_equal = (deviation) => deviation <= Number.EPSILON;

	// the function to perform all search operations for the different number of resistors
	function searches(resistors, target) {
		// 1 resistor: start looking for the closes value in the list
		var res = search1(resistors, target);
		var res_dev = rdeviation(target, res.intermediate);
		add_to_table(res, res_dev);
		if (float_equal(res_dev)) return; // found the exact value

		// 2 resistors: make a binary search in the lookup table and then compare all matches
		var res = search2(resistors, target);
		var res_dev = rdeviation(target, res.intermediate);
		add_to_table(res, res_dev);
		if (float_equal(res_dev)) return; // found the exact value

		// TODO continue with 3 and 4 resistors
		search3(resistors, target);
	}

	// perform a binary search on an array to find the closest value to the target and return the corresponding index
	function binsearch(resistors, target) {
		// assign borders to the whole search space
		var smaller = 0;
		var larger = resistors.length-1;
		// binary search
		while (larger - smaller > 1) {
			var middle = Math.floor((larger+smaller)/2);
			if (resistors[middle] < target)
				smaller = middle;
			else
				larger = middle;
		}
		return (deviation(target,resistors[smaller]) < deviation(resistors[larger],target))?smaller:larger; // return index in array with closest match
	}

	// perform binsearch and wrap result into the right data structure
	function search1(resistors, target) {
		return new b_node(resistors[binsearch(resistors, target)]);
	}

	function search2(resistors, target) {
		// create lookup tables for 2 resistors. Since '+' is a commutative operation only half the results are needed » triu
		r2_series = resistors.map((e,i) => resistors.slice(i).map(r => series(e,r)));
		r2_parallel = resistors.map((e,i) => resistors.slice(i).map(r => parallel(e,r)));

		var series_poss = r2_series.slice(
			0, r2_series.findIndex(e => e[0] > target) // row with first element larger than target » cut at this upper bound
		).map(e => binsearch(e, target)); // perform binary search on each row to get possible candidates
		// TODO: theoretically it should be possible to perform a second binary search instead of the line below.
		var series_best = series_poss.reduce((accu, curr_val, index, arr) => (deviation(r2_series[index][curr_val], target) < deviation(r2_series[accu][arr[accu]], target))?index:accu, 0); // compare deviations to get index of best candidate
		var series_res = new b_node(resistors[series_best]).attach(resistors[series_poss[series_best] + series_best], series); // parse to wrapper class

		var parallel_poss = r2_parallel.slice(
			0, r2_parallel.findIndex(e => e[0] > target) // row with first element larger than target » cut at this upper bound
		).map(e => binsearch(e, target)); // perform binary search on each row to get possible candidates
		// TODO: theoretically it should be possible to perform a second binary search instead of the line below.
		var parallel_best = parallel_poss.reduce((accu, curr_val, index, arr) => (deviation(r2_parallel[index][curr_val], target) < deviation(r2_parallel[accu][arr[accu]], target))?index:accu, 0); // compare deviations to get index of best candidate
		var parallel_res = new b_node(resistors[parallel_best]).attach(resistors[parallel_poss[parallel_best] + parallel_best], parallel); // parse to wrapper class

		// return value with smaller deviation
		return (deviation(series_res.intermediate, target) < deviation(parallel_res.intermediate, target))?series_res:parallel_res;
	}

	function search3(resistors, target) {
		var best_matches = [];
		// first possibility: 3 resistors in series R1+R2+R3
		var table = r2_series.map((e,i) => e.map((f,j) => resistors.slice(i+j).map(g => series(f,g)))); // lookup table with all values, cutting by permutations, no cut by value (skill issue)
		var results_poss = table.map(e => e.map(f => binsearch(f, target)));
		var results_fav = results_poss.map((e,i) => e.reduce((accu, curr_val, index, arr) => (deviation(table[i][index][curr_val], target) < deviation(table[i][accu][arr[accu]], target))?index:accu, 0));
		var best_match = results_fav.reduce((accu, curr_val, index, arr) => { // do the same thing as for r2_series but twice
			var d_new = deviation(table[index][curr_val][results_poss[index][curr_val]], target); 
			var d_acc = deviation(table[accu][arr[accu]][results_poss[accu][arr[accu]]], target);
			return (d_new < d_acc)?index:accu;
		}, 0);
		// normalize result by creating a b_node object with correct indices
		var ind2 = results_fav[best_match] + best_match;
		var ind3 = ind2 + results_poss[best_match][results_fav[best_match]];
		var result = new b_node(resistors[best_match]).attach(new b_node(resistors[ind2]).attach(resistors[ind3], series), series);
		// add to list of possible results
		best_matches.push(result);
		
		// TODO
		// second possibility: 2 resistors in series with 1 in parallel (R1+R2)||R3
		// third possibility: 1 resistor in series after 2 in parallel R1+(R2||R3)
		// fourth possibility: 3 resistors in parallel R1||R2||R3
		//
		// TODO
		// return the best result from result list
	}

	function add_to_table (result, deviation) {
		var table = document.getElementById('results_container');
		var row = document.createElement('tr');
		[ // create all 3 entries in a table row
			Object.assign(document.createElement('td'), {innerText: `${result.repr()}`}),
			Object.assign(document.createElement('td'), {innerText: `${result.intermediate.toFixed(3)}${prefix}Ω`}),
			Object.assign(document.createElement('td'), {innerText: (float_equal(deviation))?"Exact":`${deviation}%`}),
		].forEach(e => row.appendChild(e) )
		table.appendChild(row);
	}

	// user-interface setup
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
			var localprefix = e.target.getAttribute('prefix');
			return function() {
				prefix = localprefix;
			} ();
		});
		if (e.hasAttribute('checked')) {
			prefix = e.getAttribute('prefix'); // find the default prefix in the HTML
			e.click(); // make sure the default checkbox - browsers might not reset this after reloading the page
		}
	});

	// add event listener to 'calculate' button to start the calculation
	document.getElementById('submitbutton').addEventListener('click', function() {
		document.querySelector('#results').style.setProperty('visibility', 'collapse'); // make the results section invisible
		document.getElementById('results_container').innerHTML = ''; // clear table containing results
		// get user input and check for validity
		var resistance = parseFloat(document.getElementById('resistance').value);
		if (ActiveSeries === undefined || prefix === undefined || isNaN(resistance)) {
			console.error("Invalid input");
			return;
		}
		//console.log(`Resistance: ${resistance}${prefix}Ω, Series: E${ActiveSeries.length}`); // useful for debugging purposes
		const start = performance.now();
		searches(
			Object.freeze(prefixes.flatMap(p => ActiveSeries.map(r => r*p))), // create a list of all available resistors. By definition the list is sorted in ascending order
			resistance
		);
		const stop = performance.now();
		console.log(`${stop - start}ms`);
		document.querySelector('#results').style.setProperty('visibility', 'visible'); // make the results section visible
	})

})
