import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201129003230', '🌩️ ẉa.me//𝑀𝐸𝐺𝛩‖.peị!‽ 👑', true], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['201129003230']
global.suittag = ['201129003230']
global.mods = []
global.prems = []

global.packname = '『 +201129003230 』'
global.author = '『 ميــجــو بــ☠️ـوت 』'
global.wm = '『ميــجــؤؤ بــ🐍ـؤؤت 』'
global.wm2 = '『 ميــجــو بــ💎ـوت 』'
global.azami = '『ميــجــؤؤ بــ💀ـؤؤ 』'
global.cb = '『 ميــجــو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© MEGO_BOT'
global.devnum = '+201012531172'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
