# Server Side Events
  - the connection will be persisted during a long period and throughtout the connection estbaishment the data will be sent from the server at regular intervals
  - Long live connection with unidirectional communication
  - single HTTP connection
  - Example 
    - feeds
    - notification
    - monitoring
  - Challenges
    - browser compatibility
    - one domain can only have around 6-8 connection at a time
    - connection timeout
    - background tab behaviour
    - resource utilization
    - load balancer
    - sticky connection
    - proxy/ firewa;; 
    - testing
    - broadcasting