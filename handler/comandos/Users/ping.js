module.exports.info = {
    cmd: ['ping', 'p'],
    roles: [],
    users: [],
    deleted: true,
    dm: true
}

module.exports.comando = async (client, msg, args) => {
    msg.channel.send(`**Pong!** ${Math.round(client.ping)}ms`).then(m => m.delete(3000))
}
