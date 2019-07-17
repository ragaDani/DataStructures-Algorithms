class reverseString{
    reverseStringRecursive(text){
        // Function to reverse a string using recursion
        if(text.length === 0)
        {
            return "";
        }
        return (text.charAt(text.length-1)+ this.reverseStringRecursive(text.slice(0,text.length-1)));
    }
    reverseStringIterative(text){
        // Function to reverse a string using iteration
        let revStr = '';
        for(let i=text.length-1;i>=0;i--){
            revStr+=(text[i]);
        }
        return revStr;
    }
}
module.exports = reverseString;