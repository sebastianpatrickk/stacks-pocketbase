/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1655102503",
    "maxSelect": 1,
    "name": "priority",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "p0",
      "p1",
      "p2",
      "p3"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1655102503",
    "maxSelect": 1,
    "name": "priority",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "low",
      "medium",
      "high",
      "urgent"
    ]
  }))

  return app.save(collection)
})
