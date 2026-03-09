/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select245846248",
    "maxSelect": 1,
    "name": "label",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "today",
      "inbox"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // remove field
  collection.fields.removeById("select245846248")

  return app.save(collection)
})
