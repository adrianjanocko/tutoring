/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0zrh7ta5y6mc57g")

  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0zrh7ta5y6mc57g")

  collection.viewRule = ""

  return dao.saveCollection(collection)
})
