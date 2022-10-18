namespace backend.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public Guid QuestionId{ get; set; }
        public string? Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool Reported { get; set; }
    }
}
