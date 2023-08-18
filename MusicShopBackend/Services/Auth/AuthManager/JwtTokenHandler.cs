using AuthManager.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthManager
{
    public class JwtTokenHandler
    {
        public const string secureToken = "dsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdf";
        public const int validity = 20;
        private readonly List<UserAccount> _users;

        public JwtTokenHandler()
        {
            _users = new List<UserAccount>
            {
                new UserAccount{ UserName = "Adam", Password = "1234", Role = "admin"},
                new UserAccount{ UserName = "Marek", Password = "1234", Role = "user"}
            };
        }

        public AuthenticationResponse? GenerateJwtToken(AuthenticationRequest request)
        {
            if (string.IsNullOrEmpty(request.UserName) || string.IsNullOrEmpty(request.Password))
            {
                return null;
            }

            var user = _users.Where(x => x.UserName == request.UserName &&
            x.Password == request.Password).FirstOrDefault();

            if (user == null) return null;

            var tokenExpiryTimeStamp = DateTime.Now.AddMinutes(validity);
            var tokenKey = Encoding.ASCII.GetBytes(secureToken);
            var claimsIdentity = new ClaimsIdentity(new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Name, request.UserName),
                new Claim(ClaimTypes.Role, user.Role)
            });

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature);

            var securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Expires = tokenExpiryTimeStamp,
                SigningCredentials = signingCredentials
            };

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);
            var token = jwtSecurityTokenHandler.WriteToken(securityToken);

            return new AuthenticationResponse
            {
                UserName = user.UserName,
                ExpiresIn = (int)tokenExpiryTimeStamp.Subtract(DateTime.Now).TotalSeconds,
                JwtToken = token
            };
        } 
    }
}