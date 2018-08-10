# AirPnP+ About - Service

> Project description

## Related Projects


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## CRUD

##### CREATE
```
  post('/listings', () {
    db.makeListing();
    });
```
##### READ
```
  get('/listings/:id', () {
    db.getListings();
    });
```
##### UPDATE
```
  put('listings/:id/update', () {
    db.updateListing();
    });
```
##### DELETE
```
  delete('listings/:id/delete', () {
    db.deleteListing();
    });
```

## Requirements

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm install express
```
