# Node.js HTTP Server Bug: Missing Content-Length Header

This repository demonstrates a common yet subtle bug in Node.js HTTP servers: omitting the `Content-Length` header in the response. This can lead to incomplete or delayed responses on the client-side.

## Bug Description

The `bug.js` file contains a simple HTTP server that sends a 'Hello, world!' response. However, it fails to set the `Content-Length` header, causing potential issues for clients expecting a complete response.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle the response, explicitly setting the `Content-Length` header to indicate the size of the response body. This ensures that clients receive complete and timely responses.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Observe the client behavior (you can use curl or a browser). A client may wait indefinitely or only receive part of the response. 
5. Run `node bugSolution.js`. This fixed version will correctly send the complete response.
