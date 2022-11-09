using backendAPI.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly SqlContext _context;

        public MessagesController(ILogger<MessagesController> logger, SqlContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name="GetAllMessages")]
        public async Task<ActionResult<IEnumerable<MessageDto>>> GetMessages()
        {
            var messageEntities = await _context.Messages.ToListAsync();

            List<MessageDto> messagesDto = new List<MessageDto>();

            foreach (var messageEntity in messageEntities)
            {
                var messageDto = new MessageDto
                {
                    Id = messageEntity.Id,
                    Message = messageEntity.Message,
                    Img = messageEntity.Img,
                };
                
                messagesDto.Add(messageDto);
            }
            return Ok(messagesDto);
        }
    }
}
