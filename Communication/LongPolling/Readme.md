# Long Polling
  - long polling will keep the next request pending untill the data is updated or it gets closed. 
  - The server keeps a connection open and sends updates
    - single long lived connection
    - connection will increased the load.
  - Example
      - real time system
      - payment processing