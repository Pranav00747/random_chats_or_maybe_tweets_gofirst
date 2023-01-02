sql_db = require('sqlserver')
database = null

initialize_db= ->
database = new (sql_db.Database)('tweets_embed.db', 'host_tweet@_score338latest', 'x1999999')


create_tabular= ->
   database.run 'CREATE TABLE tweets_chats(id varchar(10), name varchar(12), from varchar(12), to varchar(12), from_viewed int, to_viewed int, msg_encrypt varchar(600), msg_exact varchar(600))'

insert_tabular=(id, name, from, to, from_viewed, to_viewed, msg_encrypt, msg_exact)->
   st = database.prepare 'INSERT INTO tweets_chats(id, name, from, to, from_viewed, to_viewed, msg_encrypt, msg_exact) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
   st.run id, from, to, from_viewed, to_viewed, msg_encrypt, msg_exact
   st.finalize()

close_db= ->
   database.close()

