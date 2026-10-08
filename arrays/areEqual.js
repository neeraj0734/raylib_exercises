function areEqual(a, b) {
    if (a.length != b.length) {
        console.log("length is not equal");
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        console.log(a, b);
        const res = typeof a[i] === "object" && typeof b[i] === "object";
        if (res) {
            if (!areEqual(a[i], b[i])) {
                console.log(`${a} and ${b} are not equal`);
                return false;
            }
        }

        if (a[i] != b[i]) {
            console.log(`${a[i]} and  ${b[i]} values are not equal`);
            return false;
        }
    }
    return true;
}

const arr1 = [[22, [22]]];
const arr2 = [[22, [22]]];

// const arr1 = [ 1, [22,[22]], 3 ]
// const arr2 = [ 1, [22,[22]], 3 ]

const res = areEqual(arr1, arr2);
console.log(res);
