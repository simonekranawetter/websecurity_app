using System.ComponentModel.DataAnnotations;

namespace backendAPI.DTO
{
    public class AddMessageDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public string ImgUrl { get; set; }
    }
}
