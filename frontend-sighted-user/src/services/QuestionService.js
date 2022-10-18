import BaseHttpService from './BaseHttpService';


const MyFeedQuestionList = [

]



export default class QuestionService extends BaseHttpService {
  GetMyFeedQuestionList() {
    // Need Real Data
    return MyFeedQuestionList;
  }
}