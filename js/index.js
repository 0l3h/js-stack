'use strict';

class Node {
    constructor(data, next) {
        this._data = data;
        this._next = next;
    }
}

class Stack {
    constructor(maxSize = 10) {
        this._maxSize = maxSize;
        this._size = 0;
        this._top = null;
    }
    
    /**
     * Creates a new peak node in the stack and assigns value to data property of the node.
     * @param {any} value
     */
    push(value) {
        if(this._size === this._maxSize) {
            throw new RangeError('Maximum stack size exceeded');
        }
        this._top = new Node(value, this._top);
        this._size++;
    }

    /**
     * Removes a peak node of the stack and returns it.
     * @returns {Node} The peak node. 
     */
    pop() {
        if (!this.isEmpty) {
            const value = this._top._data;
            this._top = this._top._next;
            this._size--;
            return value;
        }
    }
    
    get peek() {
        return this._top?._data;
    }
    
    get isEmpty() {
        return this._size === 0;
    }
}

/**
 * Checks if the text or sentence is palindrome.
 * @param {String} value Any string value.
 * @returns {Boolean} Result of the check.
 */
function isPalindrome(value) {
    const stack = new Stack(100);
    const text = [...value.toLowerCase()]
    .filter(element => {
        return element !== ' ';
    }); 

    for(let i = 0; i < text.length; i++) {
        stack.push(text[i]);
    }

    for(let i = 0; i < text.length; i++) {
        if(text[i] === stack.peek) {
            stack.pop();
        }
    }

    return stack.isEmpty; 
}

const str = 'а роза упала на лапу Азора';
try {
    console.log(isPalindrome(str));
} catch(error) {
    console.error(error);
}