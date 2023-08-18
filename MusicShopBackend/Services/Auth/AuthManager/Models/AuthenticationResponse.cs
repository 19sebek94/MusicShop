namespace AuthManager.Models
{
    public class AuthenticationResponse
    {
        public string? UserName { get; set; }
        public double ExpiresIn { get; set; }
        public string? JwtToken { get; set; }
    }
}
