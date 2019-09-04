function chunkArrayInGroups(arr, size) {
    // Break it up.
    let finalArr = [];

    for (let x = 0; x < arr.length; x += size) {
      console.log(x + ' - ' + (x + size));
      debugger;
      finalArr.push(
        arr.slice(x, size + x)
      );
    }
    console.log(finalArr);
    return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);