using backendquestions.Interfaces;
using backendquestions.Models;

namespace backendquestions.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly DataContext _context;

        public QuestionRepository(DataContext context)
        {
            _context = context;
        }
        async Task<List<Question>> IQuestionRepository.AddQuestion(Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return await _context.Questions.ToListAsync();
        }

        async Task<List<Question>> IQuestionRepository.DeleteQuestion(Guid id)
        {
            var dbQuestion = await _context.Questions.FindAsync(id);
            if(dbQuestion != null)
            {
                _context.Questions.Remove(dbQuestion);
                await _context.SaveChangesAsync();

                return _context.Questions.ToList();
            }

            return null;
        }

        async Task<List<Question>> IQuestionRepository.GetAllQuestions()
        {
            return await _context.Questions.ToListAsync();
        }

        async Task<Question> IQuestionRepository.GetQuestionById(Guid id)
        {
            var question = await _context.Questions.FindAsync(id);
            if(question != null)
            {
                return question;
            }
            return null;
        }

        async Task<List<Question>> IQuestionRepository.UpdateQuestion(Question request)
        {
            var dbQuestion = await _context.Questions.FindAsync(request.Id);
            if(dbQuestion != null)
            {
                dbQuestion.Content = request.Content;
                dbQuestion.AddedOn = request.AddedOn;
                dbQuestion.UserId = request.UserId;
                dbQuestion.FileName = request.FileName;
                dbQuestion.NumberOfAnswers = request.NumberOfAnswers;
                dbQuestion.Deleted = request.Deleted;
                dbQuestion.LinkedInterest = request.LinkedInterest;
                dbQuestion.Language = request.Language;

                await _context.SaveChangesAsync();

                return await _context.Questions.ToListAsync();
            }

            return null;
        }
    }
}
