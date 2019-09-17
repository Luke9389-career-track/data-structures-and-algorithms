# Reverse an Array
<!-- Short summary or background information -->

## Challenge
This code challenge demands that we reverse the elements of an input array without using any built-in array methods except for array.length.

## Approach & Efficiency
The approach I took for this problem was to keep the solution simple. I made a new array. Then I scrolled backwards through the old array, putting each value into the new array. Lastly, I return that new array. The only hiccup was that the length gives a value that is *one more than the last index of the array*, so when scrolling backwards through the old array, we actually subtract one from the length. 

## UML Diagram
<img src="./assets/Array-Reverse-WhiteBoarding.png">