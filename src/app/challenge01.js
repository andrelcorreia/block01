class Challenge01 {
  async execute(req, res) {
    const { value } = req.body;

    const mockedValue = [387421];

    const separateValue = mockedValue.flatMap((bruteValue) => {
      return bruteValue.toString().split("").map(Number);
    });

    const sortedValue = separateValue.sort((a, b) => a - b);

    console.log(sortedValue); // [1, 2, 3, 4, 7, 8]
  }
}
