# Network Optimization
- Critical Rendering path
  - CSS rendering blocking
  - JS parsing blocking
  - first packet - 14kb
- Minimizing the network request
  - Challenges
    - connection time
    - browser limit per domain
  - Solution
    - Inline css
    - inline js
    - base 64 for image
- Async Javascript
  -  ![image](/Networking/assets/images/async.JPG)
- Resource Hinting
-  ![image](/Networking/assets/images/reso.JPG)
-  ![image](/Networking/assets/images/reso2.JPG)
- Fetch Priority 
  - ![image](/Networking/assets/images/prior.JPG)
- HTTP Upgrades
  - ![image](/Networking/assets/images/httpU.JPG) 
  - both http2 and http3 protocol will be using https and it will not work in http
  - ![image](/Networking/assets/images/httpU2.JPG)
  - spdy is a package to setup the https protocol with certificate
    - ![image](/Networking/assets/images/cert.JPG)
  - Compression
    - brotli/gzip tools