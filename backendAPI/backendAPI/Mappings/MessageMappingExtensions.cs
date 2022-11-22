using Azure;
using backendAPI.DTO;
using backendAPI.Entities;
using System.Web;

namespace backendAPI.Mappings
{
    public static class MessageMappingExtensions
    {
            public static MessageEntity MapToEntity(this AddMessageDto dto)
        {
            var _tagsAllowed = new string[] { "<b>", "</b>", "<i>", "</i>" };
            var entity = new MessageEntity
            {
                Id = new Guid(),
                Title = dto.Title,
                Body = HttpUtility.HtmlEncode(dto.Body),
                ImgUrl = dto.ImgUrl,
            };

            foreach (var tag in _tagsAllowed)
            {
                var encodedTag = HttpUtility.HtmlEncode(tag);
                entity.Body = entity.Body.Replace(encodedTag, tag);
            }
            return entity;
        }

        public static MessageDto MapToDto(this MessageEntity entity)
        {
            var _tagsAllowed = new string[] { "<b>", "</b>", "<i>", "</i>" };
            var dto = new MessageDto
            {
                Id = entity.Id,
                Title = entity.Title,
                Body = HttpUtility.HtmlEncode(entity.Body),
                ImgUrl = entity.ImgUrl,
            };
            foreach (var tag in _tagsAllowed)
            {
                var encodedTag = HttpUtility.HtmlEncode(tag);
                dto.Body = dto.Body.Replace(encodedTag, tag);
            }
            return dto;
        }

        public static List<MessageDto> MapToDto(this IEnumerable<MessageEntity> entities)
        {
            var dtos = new List<MessageDto>();
            foreach (var entity in entities)
            {
                dtos.Add(entity.MapToDto());
            }

            return dtos;
        }
    }
}
