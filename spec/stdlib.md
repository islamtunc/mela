Bismillahirrahmanirahim

# Mela Standard Library Specification

This document describes the modules and functions provided by the Mela standard library. All modules follow the coding conventions and naming rules defined in the project.

## Modules

### array
- build(size, value): Build an array of given size, filled with value.
- set(array, index, value): Set the value at the given index.
- get(array, index): Get the value at the given index.
- fill(array, value, count): Fill the first count elements with value.
- copy(src, dst, count): Copy count elements from src to dst.
- find(array, value, count): Return index of value or -1 if not found.

### math
- add(a, b): Return the sum of a and b.
- subtract(a, b): Return the difference of a and b.
- multiply(a, b): Return the product of a and b.
- divide(a, b): Return the quotient of a and b.

### string
- length(str): Return the length of the string.
- concat(str1, str2): Concatenate two strings.
- substring(str, start, length): Return a substring.

### io
- print(value): Print value to the standard output.
- input(prompt): Read input from the user.

### datetime
- now(): Return the current date and time.
- format(date, format_str): Format a date as a string.

### random
- randint(min, max): Return a random integer between min and max.
- choice(array): Return a random element from the array.

... (add more modules as needed)

## Usage Example

```mela
لن arr = array.build(5, 0)
array.set(arr, 2, 42)
لن x = array.get(arr, 2)
print(x)
```

Elhamdulillahirabbulalemin
