using System.ComponentModel.DataAnnotations;

namespace backendAPI.DTO
{
    public class AddMessageDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Message { get; set; }
        [Required]
        public string Img { get; set; }
    }
}
