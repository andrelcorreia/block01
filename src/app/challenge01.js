class Challenge01 {
  async execute(req, res) {
    // const { value } = req.body;

    const value = [3862301];

    const separateValue = value.flatMap((bruteValue) => {
      return bruteValue.toString().split("").map(Number);
    });

    const uniqueValues = Array.from(new Set(separateValue));

    const sortedValue = uniqueValues.sort((a, b) => a - b);

    console.log(sortedValue); // [1, 2, 3, 4, 7, 8]
  }
}
