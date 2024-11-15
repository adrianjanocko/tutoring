/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0zrh7ta5y6mc57g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0qwhme4p",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0zrh7ta5y6mc57g")

  // remove
  collection.schema.removeField("0qwhme4p")

  return dao.saveCollection(collection)
})
