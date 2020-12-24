import low = require('lowdb')
import FileSync from 'lowdb/adapters/FileSync'
const adapter = new FileSync('db.json')
const db: any = low(adapter)

export default db
