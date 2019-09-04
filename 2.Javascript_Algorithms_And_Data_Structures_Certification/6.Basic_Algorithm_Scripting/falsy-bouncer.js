function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(
      (ele) => {
        return ele;
      }
    );
}

bouncer([7, "ate", "", false, 9]);