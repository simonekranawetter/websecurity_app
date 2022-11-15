using backendAPI.DTO;
using backendAPI.Mappings;
using Microsoft.AspNetCore.Authorization;
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
        private string[] _tagsAllowed = new string[] { "<b>", "</b>", "<i>", "</i>" };

        public MessagesController(ILogger<MessagesController> logger, SqlContext context)
        {
            _logger = logger;
            _context = context;
        }
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<AddMessageDto>> CreateMessage(AddMessageDto messageDto)
        {
            var messageEntity = messageDto.MapToEntity();

            _context.Messages.Add(messageEntity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMessageById", new { id = messageEntity.Id }, messageEntity.MapToDto());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MessageDto>> GetMessageById(Guid id)
        {
            var entity = await _context.Messages
                .Where(m => m.Id == id)
                .FirstOrDefaultAsync();

            if (entity is null)
            {
                return NotFound();
            }
            var dto = entity.MapToDto();

            return Ok(dto);
        }

        [HttpGet(Name="GetAllMessages")]
        public async Task<ActionResult<IEnumerable<MessageDto>>> GetMessages()
        {
            var messageEntities = await _context.Messages.ToListAsync();

            var messagesDto = messageEntities.MapToDto();

            return Ok(messagesDto);
        }
    }
}
