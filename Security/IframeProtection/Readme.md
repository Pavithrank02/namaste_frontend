# Iframe Protection
  - Vulnerability
    - click hijacking
    - data theft
    - session and cookie theft
  - Mitigation
    - Use `X-Frame-Options`- 'Deny'
    - `frame-ancestors` directive or `self`
    - sandbox: `allow-same-origin`
    - cookie: 
      - httpOnly: `true`
      - secure: `true`
      - samedite: `true`