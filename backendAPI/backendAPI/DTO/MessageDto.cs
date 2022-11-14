namespace backendAPI.DTO
{
    public class MessageDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string ImgUrl { get; set; }
    }
}
