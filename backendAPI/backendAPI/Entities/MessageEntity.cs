using System.ComponentModel.DataAnnotations;

namespace backendAPI.Entities
{
    public class MessageEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;

        [Required]
        public string Img { get; set; } = string.Empty;

    }
}

