using backend.Models;

namespace backend.Interfaces
{
    public interface IAnswerRepository
    {
        async Task<List<Answer>?>GetAllAnswers();
        async Task<Answer> GetAnswerbyId();
        async Task<List<Answer>?> AddAnswer(Answer answer);
        async Task<List<Answer>?> UpdateAnswer(Answer answer);
        async Task<List<Answer>?> DeleteAnswer(Guid id);

    }
}
