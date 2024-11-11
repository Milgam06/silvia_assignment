// interface IStepData {
//   stepQuestion: number;
//   questionAnswer: number;
//   isCorrect: boolean;
//   reactionTime: number;
// }

// export class TestStore {
//   static stepData: IStepData[] = [];
//   constructor(answer: number) {

//   }
// }

// export class StepData {
//   //   stepQuestions: number[];
//   //   constructor() {
//   //     const { randomNumList } = randomization();
//   //     const questionList = randomNumList(1, 10);
//   //     this.stepQuestions = questionList;
//   //   }
// }

import { randomization } from "@/utils";

interface IStepData {
  stepQuestion: number;
  questionAnswer: number;
  isCorrect: boolean;
  reactionTime: number;
}

export class TestStore {
  static stepData: IStepData[] = [];

  // StepData 추가
  static addStepData(stepData: IStepData) {
    this.stepData.push(stepData);
  }

  // StepData 초기화
  static initializeSteps() {
    this.stepData = [];
  }

  // Step 15개 생성
  static generateSteps() {
    this.initializeSteps();
    for (let i = 0; i < 15; i++) {
      const stepData = new StepData();
      this.addStepData({
        stepQuestion: stepData.stepQuestion,
        questionAnswer: stepData.questionAnswer,
        isCorrect: stepData.isCorrect,
        reactionTime: stepData.reactionTime,
      });
    }
  }
}

export class StepData {
  stepQuestion: number;
  questionAnswer: number = 0;
  isCorrect: boolean = false;
  reactionTime: number = 0;

  constructor() {
    // 1~9 사이의 랜덤 숫자 생성
    const { randomNumList } = randomization();
    this.stepQuestion = randomNumList(1, 9, 1)[0];
  }

  setAnswer(answer: number, reactionTime: number) {
    this.questionAnswer = answer;
    this.reactionTime = reactionTime;
    this.isCorrect = this.stepQuestion === answer;
  }
}
