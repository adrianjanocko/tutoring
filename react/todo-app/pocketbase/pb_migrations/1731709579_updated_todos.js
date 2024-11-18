/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0zrh7ta5y6mc57g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fdrxeu9",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0zrh7ta5y6mc57g")

  // remove
  collection.schema.removeField("7fdrxeu9")

  return dao.saveCollection(collection)
})
