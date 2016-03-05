module.exports = (robot) ->
  robot.hear /memes/i, (res) ->
    # your code here

  robot.respond /i love me some memes/i, (res) ->
    # your code here
    
    module.exports = (robot) ->
  robot.hear /badger/i, (res) ->
    res.send "y tho"

  robot.respond /jager/i, (res) ->
    res.reply "yaaaaayger lloyd"

  robot.hear /french horn/i, (res) ->
    res.reply "french horn = elitist"
    
  robot.hear /McEldowney/i, (res) ->
    res.reply "more like McBitchldowney"
