# On UUIDs in this application
#### How to get a UUID
* all uuids are generated by our custom uuid helper.
* this helper takes a standard v1 uuid, and re arranges it os it will be semi sequential. This allows for faster mysql selects and inserts.
* The helper also compacts the uuid by removing unnecessary dashes.
* All uuid to be placed into redis WILL be compacted as described above.
#### How to store UUID into SQL
* All UUIDs will be stored in a binary(16), in its hex form.
* example given compacted hex "id" `var sqlFriendlyID = new Buffer(ic, 'hex')`
