#include <cstdlib>
#include <iostream>
#include <cmath>
#include <chrono>
using namespace std;

#define series_max_power 7

typedef long double resistor_type;

resistor_type parallel_original(resistor_type r1, resistor_type r2) {
	return 1 / ( (1 / r1) + (1 / r2)  );
}

resistor_type parallel_alternative(resistor_type r1, resistor_type r2) {
	return (r1 * r2) / (r1 + r2);
}

void runtime_measurement(resistor_type *Series, resistor_type (*test_function)(resistor_type, resistor_type)) {
	resistor_type calc_results[series_max_power * 96][series_max_power * 96]; // allocate memory first
	chrono::steady_clock::time_point begin = chrono::steady_clock::now(); // start time measurement
	for(int i = 0; i < 96; i++) {
		for (int j = 0; j < 96; j++) {
			calc_results[i][j] = test_function(Series[i], Series[j]);
		}
	}
	chrono::steady_clock::time_point end = chrono::steady_clock::now(); // stop time measurement
	// print time difference
	cout << "Runtime  = " << chrono::duration_cast<chrono::nanoseconds> (end - begin).count() << "[ns]" << endl;
}

int main(int argc, char **argv) {
	// generate E-Series first
	resistor_type E96[] = {1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 2.05, 2.10, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55, 2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49, 5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32, 7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76};

	resistor_type Series[series_max_power * 96];
	for(int i = 0; i < series_max_power; i++) {
		for(int j = 0; j < 96; j++) {
			Series[i * 96 + j] = E96[j] * pow(10, i);
		}
	}

	// try out all calculation methods
	cout << "Time for the original method: ";
	runtime_measurement(Series, &parallel_original);

	cout << "Time for the alternative method: ";
	runtime_measurement(Series, &parallel_original);

	exit(EXIT_SUCCESS);
}
