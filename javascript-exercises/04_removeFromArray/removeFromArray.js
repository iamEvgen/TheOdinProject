const removeFromArray = function(list, ...needToDelete) {
    result = [];
    for (item of list) {
        if (!needToDelete.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
