export const randomization = () => {
  // 랜덤 숫자 배열 생성
  const randomNumList = (min: number, max: number, count: number) => {
    const randomList = Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min) + min)
    );
    return randomList;
  };
  return { randomNumList };
};
