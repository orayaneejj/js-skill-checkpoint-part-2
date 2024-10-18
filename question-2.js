const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function totalScore(students) {
  let over50scores = students.filter((student) => student.score > 50);
  let updateScores = over50scores.map(
    (student) => (student.score += student.score * 0.1)
  );
  let totalScore = updateScores.reduce((acc, cur) => acc + cur);
  return `Total score is ${totalScore}`;
}
console.log(totalScore(students));
