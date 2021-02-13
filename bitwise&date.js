// Bitwise Operators
function getMaxLessThanK(n,k) {
    let max = 0;
    for(let i = 1; i < n; i++ ) {
        for (let j = i+1; j < n+1; j++) {
            let total = i & j;
            if(total < k && total > max) {
                max = total;
            }
        }
    }
    return max;
}

// Javascript date
function getDayName(dateString) {
    // Write your code here
    let date = new Date(dateString);
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayName[date.getUTCDay()];
}