let handler = async (m, { conn, command, text }) => {

let love = `

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

【..≼قــســم الاعــضااء≽..】

*⋄━───═◞⬪⋇⬪◟═───━⋄*

❐..👥╎❯ .اختفاء⌉

❐..👥╎❯ .ابلاغ⌉

❐..👥╎❯ .تحدث⌉*

❐..👥╎❯ .بوت⌉

❐..👥╎❯ .بينغ⌉

❐..👥╎❯ .بروفايل⌉

❐..👥╎❯ .سرعه⌉

❐..👥╎❯ .خط⌉

❐..👥╎❯ .هل⌉

❐..👥╎❯ .منشني⌉

❐..👥╎❯ .توب⌉

❐..👥╎❯ .تصاميم⌉

❐..👥╎❯ .تصميم⌉

❐..👥╎❯ .المطور⌉

❐..👥╎❯ .تعليق⌉

❐..👥╎❯ .ايديت⌉

❐..👥╎❯ .الاستماره⌉

❐..👥╎❯ .الدعم⌉

❐..👥╎❯ .الطقس⌉

❐..👥╎❯ .بوست⌉

❐..👥╎❯ .عبارات⌉

❐..👥╎❯ .رابطي⌉

❐..👥╎❯ .السورس⌉

❐..👥╎❯ .قوانين⌉

❐..👥╎❯ .المعرف⌉

❐..👥╎❯ .المستخدمين⌉

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

 `.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = [ 'love' ]

handler.tags = [ 'fun' ]

handler.command = /^(الاعضاء)$/i

export default handler
