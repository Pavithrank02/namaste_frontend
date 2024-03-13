# Cross-Site Request Forgery (CSRF)
- a security vulnerability allowing unauthorized commands by exploiting user trust in authenticated sessions.
  -  ![image](/Security/assets/images/CSRF.JPG)   
  - Vulnerability
    - get API call to update and perform actions
  - Mitigations
    - Anti-CSRF tokens
    - same-site-cookies
    - `set Cookie: Samesite=strict; secure` also can use lax= `allow cross origin`,
    use none= `for allowing all sites` .
    - referer based validation
    - use captcha
    - CSP headers
    - dont use get method to update