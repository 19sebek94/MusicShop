using AuthManager;
using AuthManager.Models;
using Microsoft.AspNetCore.Mvc;

namespace Auth.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly JwtTokenHandler _jwtTokenHandler;

        public AuthController(JwtTokenHandler jwtTokenHandler)
        {
            _jwtTokenHandler = jwtTokenHandler;
        }

        [HttpPost]
        public ActionResult<AuthenticationResponse?> Authenticate (AuthenticationRequest request)
        {
            var response = _jwtTokenHandler.GenerateJwtToken(request);
            if (response == null)
            {
                return Unauthorized();
            }
            return Ok(response);
        }
    }
}