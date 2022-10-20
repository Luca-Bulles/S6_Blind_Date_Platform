using backend.Interfaces;
using backend.Models;

namespace backend.Services
{
    public class AnswerService : IAnswerService
    {
        private readonly IAnswerRepository _answerRepository;

        public QuestionService(IAnswerRepository answerrepository)
        {
            _questionRepository = answerrepository;
        }
        public Task<List<Answer>> AddAnswer(Answer answer)
        {
            throw new NotImplementedException();
        }

        public Task<List<Answer>> DeleteAnswer(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Answer>> GetAllAnswers()
        {
            throw new NotImplementedException();
        }

        public Task<Answer> GetAnswerById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Answer>> UpdateAnswer(Answer answer)
        {
            throw new NotImplementedException();
        }
    }
}
