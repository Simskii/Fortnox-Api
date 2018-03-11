# Fortnox Javascript API wrapper

Unofficial Javascript wrapper for Fortnox API
http://developer.fortnox.se/getting-started/

## Installation

    $ npm install or yarn install

## Get a developer account

First of all you need to register as a developer.

To register you just need to fill out [this form](http://developer.fortnox.se/register/).

## Get your Access Token

You’ve got your Authorization-Code and your Client-Secret. These will be the keys to get the final Access-Token.

The Authorization-Code is valid for seven days before becoming invalid and can only be used once to retrieve the Access-Token.

If the Authorization-Code is used again after an Access-Token has been retrieved the Authorization-Code will become 
invalid and the integration will become deactivated.

The Access-Token combined with the Client-Secret is unique for your application and connects to a specific Fortnox account.

To retrieve your Access-Token you simply send a request to our API using the headers “Authorization-Code” and “Client-Secret”.

Here’s an example using cURL

```
curl -X "GET" "https://api.fortnox.se/3/" \
     -H "Authorization-Code: YOUR_AUTHORIZATION_CODE" \
     -H "Client-Secret: YOUR_CLIENT_SECRET" \
     -H "Content-Type: application/json" \
     -H "Accept: application/json"
```
