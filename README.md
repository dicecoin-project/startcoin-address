Functions for working with dicecoin addresses

## install ##

```
npm install dicecoin-project/dicecoin-address
```

## API ##

### validate (address [, type]) ###

> returns true if the address (string) is a valid dicecoin address
> optionally, you can specify 'prod' or 'testnet' for the type to limit validation that that subset of addresses

### get_address_type (address) ###

> returns address type if valid base58 address, otherwise null