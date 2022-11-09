using backendAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace backendAPI
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base(options) { }

        public DbSet<MessageEntity> Messages => Set<MessageEntity>();
    }
}
