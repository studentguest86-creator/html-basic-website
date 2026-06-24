function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // যদি উপাদানটি মিলে যায়, তবে তার পজিশন (ইন্ডেক্স) রিটার্ন করো
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; // না পাওয়া গেলে -1
}

// ব্যবহার:
const data1 = [12, 45, 67, 8, 99]; // এলোমেলো ডেটা হলেও সমস্যা নেই
console.log(linearSearch(data1, 8)); // আউটপুট: 3 (কারণ 8 আছে 3 নম্বর ইন্ডেক্সে)






function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // মাঝখানের পজিশন

        if (arr[mid] === target) {
            return mid; // মিলে গেলে ইন্ডেক্স রিটার্ন
        }
        else if (arr[mid] < target) {
            start = mid + 1; // target বড় হলে ডান দিকের অর্ধেক অংশে খোঁজো
        } 
        else {
            end = mid - 1; // target ছোট হলে বাম দিকের অর্ধেক অংশে খোঁজো
        }
    }
    return -1; 
}

// ব্যবহার:
const data2 = [10, 20, 30, 40, 50, 60, 70]; // অবশ্যই সাজানো ডেটা
console.log(binarySearch(data2, 60)); // আউটপুট: 5







function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n)); // কত ঘর করে লাফ দিব (যেমন: ৯টা উপাদানের জন্য ৩ ঘর)
    let prev = 0;

    // লাফিয়ে লাফিয়ে সামনে যাওয়া, যতক্ষণ না target-এর চেয়ে বড় উপাদান পাচ্ছি
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }

    // সঠিক ব্লক পাওয়ার পর ওই ব্লকের ভেতর একটা একটা করে (Linear Search) খোঁজা
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }

    // মিলে গেলে রিটার্ন
    if (arr[prev] === target) return prev;
    
    return -1;
}

// ব্যবহার:
const data3 = [5, 10, 15, 20, 25, 30, 35, 40, 45]; // সাজানো ডেটা
console.log(jumpSearch(data3, 35)); // আউটপুট: 6




function interpolationSearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    // ডেটা সাজানো এবং target সীমার মধ্যে থাকলে লুপ চলবে
    while (start <= end && target >= arr[start] && target <= arr[end]) {
        
        // এটিই হচ্ছে পজিশন অনুমান করার ফর্মুলা (ডিকশনারি ট্রিক)
        let pos = start + Math.floor(((target - arr[start]) * (end - start)) / (arr[end] - arr[start]));

        if (arr[pos] === target) {
            return pos;
        }
        if (arr[pos] < target) {
            start = pos + 1; // ডান দিকে খোঁজো
        } else {
            end = pos - 1; // বাম দিকে খোঁজো
        }
    }
    return -1;
}

// ব্যবহার:
const data4 = [10, 12, 14, 16, 18, 20, 22, 24]; // সাজানো এবং সমান ব্যবধানের ডেটা
console.log(interpolationSearch(data4, 18)); // আউটপুট: 4


