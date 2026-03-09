/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date3105530224",
    "max": "",
    "min": "",
    "name": "from",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "date3616002756",
    "max": "",
    "min": "",
    "name": "to",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // remove field
  collection.fields.removeById("date3105530224")

  // remove field
  collection.fields.removeById("date3616002756")

  return app.save(collection)
})
