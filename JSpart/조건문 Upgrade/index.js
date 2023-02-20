const meal = {
  한식: "불고기",
  양식: "파스타",
  일식: "초밥",
  중식: "짜장면",
};

const getMeal = (mealType) => {
  return meal[mealType || "굶기"];
};

console.log(getMeal("한식"));
