using backendquestions.Interfaces;
using backendquestions.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backendquestions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionRepository _questionRepository;

        public QuestionController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Question>>> GetAllQuestions()
        {
            return Ok(await _questionRepository.GetAllQuestions());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestionById(Guid id)
        {
            var response = await _questionRepository.GetQuestionById(id);
            if (response != null)
            {
                return Ok(response);
            }
            return NotFound("Question not found with given id");
        }

        [HttpPost]
        public async Task<ActionResult<List<Question>>> PostQuestion(Question Question)
        {
            return Ok(await _questionRepository.AddQuestion(Question));
        }

        [HttpPut]
        public async Task<ActionResult<List<Question>>> UpdateQuestion(Question request)
        {
            var response = await _questionRepository.UpdateQuestion(request);
            if (response != null)
            {
                return Ok(response);
            }
            return BadRequest("Question not found with given id");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Question>>> DeleteQuestion(Guid id)
        {
            var Response = await _questionRepository.DeleteQuestion(id);
            if (Response != null)
            {
                return Ok(Response);
            }

            return NotFound("Question not found with given id");
        }
    }
}
