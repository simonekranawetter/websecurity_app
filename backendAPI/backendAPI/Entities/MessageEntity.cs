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
        public string Body { get; set; } = string.Empty;

        [Required]
        public string ImgUrl { get; set; } = string.Empty;

    }
}

