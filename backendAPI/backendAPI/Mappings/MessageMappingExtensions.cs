﻿using backendAPI.DTO;
using backendAPI.Entities;

namespace backendAPI.Mappings
{
    public static class MessageMappingExtensions
    {
        public static MessageEntity MapToEntity(this AddMessageDto dto)
        {
            var entity = new MessageEntity
            {
                Id = new Guid(),
                Title = dto.Title,
                Body = dto.Body,
                ImgUrl = dto.ImgUrl,
            };

            return entity;
        }

        public static MessageDto MapToDto(this MessageEntity entity)
        {
            var dto = new MessageDto
            {
                Id = entity.Id,
                Title = entity.Title,
                Body = entity.Body,
                ImgUrl = entity.ImgUrl,
            };
            
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