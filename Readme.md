# R-Calc

[Try R-Calc on Github Pages](https://mitchilaser.github.io/R-Calc/)

R-Calc is a tool designed to calculate resistor networks aiming to approximate a given equivalent resistance as closely as possible.

## Example

Suppose you require a 608kΩ resistor, but the closest available option in the E24 resistor series is 604kΩ. R-Calc can help find combinations of resistors to achieve a resistance close to 608kΩ:

| Resistor combination |     =     | deviation |
|:--------------------:|:---------:|:---------:|
|         620kΩ        |   620kΩ   |    1,9%   |
|    620kΩ ∥ 30000kΩ   | 607,446kΩ |   0,091%  |
|  1kΩ + 47kΩ + 560kΩ  |   608kΩ   |   Exact   |

R-Calc iteratively combines two and later on three resistors, trying to find the closest value to approximate a target resistor. Once an exact approximation is reached, further calculations are unnecessary as additional resistors will not improve the approximation.

## Future

Maybe, some time, this tool will also be able to calculate on networks with 4 resistors but this might take a while to implement and currently 3 resistors seem to be good enough for most purposes.
