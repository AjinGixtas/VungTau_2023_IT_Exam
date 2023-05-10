function question1(input) {
    console.time("q1")
    let result = [1, input]
    if (input === 1) {
        return result;
    }

    var mod = 2;
    while (mod * mod <= input) {
        if (input % mod == 0) {
            result[result.length] = mod
            if (mod * mod < input) {
                result[result.length] = input / mod
            }
        }
        mod++;
    }
    console.timeEnd("q1")
    return result;
}

function question2(costArr, pageArr, budget) {
    console.time("q2")
    let ratioArr = []
    let result = 0
    for (let i = 0; i < costArr.length; i++) {
        ratioArr[i] = costArr[i] / pageArr[i]
    }

    ratioArrSortedByIndex = sortAndGetIndexes(ratioArr)

    let budgetLeft = budget
    for (let i = 0; i < ratioArrSortedByIndex.length; i++) {

        if (budgetLeft - costArr[ratioArrSortedByIndex[i]] >= 0) {
            budgetLeft -= costArr[ratioArrSortedByIndex[i]]
            result += pageArr[ratioArrSortedByIndex[i]]
        } else { break }

    }
    console.timeEnd("q2")
    return result
}

function sortAndGetIndexes(arr) {
    const n = arr.length;
    const sortedIndexes = Array.from({ length: n }, (_, i) => i);

    //Bubble sort
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[sortedIndexes[j]] > arr[sortedIndexes[j + 1]]) {
                [sortedIndexes[j], sortedIndexes[j + 1]] = [sortedIndexes[j + 1], sortedIndexes[j]];
            }
        }
    }
    return sortedIndexes;
}
function question3(arr, num) {
    console.time("q3")
    let result = 0
    let initSum = 0
    for (let i = 0; i < arr.length; i++) {
        initSum += arr[i]
        let sum = initSum
        if (Math.abs(sum) > num) {
            result++
        }
        for (let j = i + 1; j < arr.length; j++) {
            sum = sum + arr[j] - arr[j - i - 1]
            if (Math.abs(sum) > num) {
                result++
            }
        }
    }
    console.timeEnd("q3")
    return result
}
console.log(question1(6))
console.log(question2([5, 8, 4, 3], [6, 12, 8, 2], 13))
console.log(question3([5, -2, 8, -6], 4))
