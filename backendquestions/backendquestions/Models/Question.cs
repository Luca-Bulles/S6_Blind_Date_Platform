namespace backendquestions.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public string Content { get; set; } = String.Empty;
        public DateTime AddedOn { get; set; }
        public Guid UserId { get; set; }
        public string FileName { get; set; } = String.Empty;
        public int NumberOfAnswers { get; set; }
        public string Deleted { get; set; } = String.Empty;
        public string LinkedInterest { get; set; } = String.Empty;
        public string Language { get; set; } = String.Empty;

    }
}
