# Unexpected Behavior of Conditional Statement with 0 as Input

This repository demonstrates a subtle bug in a JavaScript function that handles null, positive, and negative numbers. The function unexpectedly returns 0 when the input is 0, instead of throwing an error or returning NaN, which might be expected based on the behavior of the function for other numeric inputs. This edge case can lead to unexpected program behavior and should be addressed to ensure robustness.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version which more accurately reflects the desired behavior and handles all edge cases.