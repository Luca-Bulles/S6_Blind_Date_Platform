using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly DataContext _context;
        public AnswerController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Answer>>> Get()
        {
            return Ok(await _context.Answers.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Answer>> Get(Guid id)
        {
            var answer = await _context.Answers.FindAsync(id);
            if (answer == null)
                return BadRequest("Answer");
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult<List<Answer>>> Add(Answer hero)
        {
            _context.Answers.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.Answers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Answer>>> UpdateHero(Answer request)
        {
            var answermodel = await _context.Answers.FindAsync(request.Id);
            DateTime time = DateTime.Now;
            if (answermodel == null)
                return BadRequest("Anser not found.");

            answermodel.Id = request.Id;
            answermodel.QuestionId = request.QuestionId;
            time = request.CreatedAt;
            answermodel.Content = request.Content;
            answermodel.Reported = request.Reported;

            await _context.SaveChangesAsync();

            return Ok(await _context.Answers.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Answer>>> Delete(Guid id)
        {
            var anser = await _context.Answers.FindAsync(id);
            if (anser == null)
                return BadRequest("Answer not found.");

            _context.Answers.Remove(anser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Answers.ToListAsync());
        }

    }
}
