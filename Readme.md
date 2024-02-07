# R-Calc

R-Calc is a tool designed to calculate resistor networks aiming to approximate a given equivalent resistance as closely as possible.

## Example

Suppose you require a 608kΩ resistor, but the closest available option in the E96 resistor series is 604kΩ. R-Calc can help find combinations of resistors to achieve a resistance close to 608kΩ:

|         Resistor combination         | deviation |
|:------------------------------------:|:---------:|
|         150kΩ + 470kΩ = 620kΩ        |    1,9%   |
|   330kΩ + (470kΩ ∥ 680kΩ) = 607,9kΩ  |   0,014%  |
| 68kΩ + 100kΩ + 220kΩ + 220kΩ = 608kΩ |   Exact   |

R-Calc iteratively combines two, three, or four resistors until it achieves a network with an acceptably close approximation to the specified replacement resistance. Once an exact approximation is reached, further calculations are unnecessary as additional resistors will not improve the approximation.
