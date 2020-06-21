function destroyer(arr, ...toDelete) {
    // Remove all the values
    for(let x = 0; x < toDelete.length; x++) {
      arr = arr.filter(
        (ele) => {
          return ele !== toDelete[x];
        }
      )  
    }
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);
  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");