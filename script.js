document.addEventListener("DOMContentLoaded",()=>{let n=document.getElementById("obfuscateBtn"),e=document.getElementById("resetBtn"),t=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function a(){let n="abcdefghijklmnopqrstuvwxyz";return n.charAt(Math.floor(Math.random()*n.length))}function l(n){let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="_";for(let r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function o(n){if(!n.trim())return"-- Please paste a valid script first!";let e=Math.floor(100*Math.random())+30,t="";for(let r=0;r<n.length;r++)t+=n.charCodeAt(r)+e+a(),r<n.length-1&&(t+=",");let o=l(7),i=l(6),d=l(8),s=l(5),u=l(8),c=l(5),E=l(6),g=l(6),f=l(6),m=`-- ==========================================
`;return m+=`--  PROTEGER CON ENCRYPT X (NEXUS ENGINE v3) 
`,m+=`--  STATUS: BY DIOS CON NOSOTROS       
`,m+=`-- ==========================================

`,m+=`local ${o} = {
`,m+=`    [1] = loadstring,
`,m+=`    [2] = setfenv,
`,m+=`    [3] = error,
`,m+=`    [4] = getfenv,
`,m+=`    [5] = string.char,
`,m+=`    [6] = string.gmatch,
`,m+=`    [7] = string.match
`,m+=`}

`,m+=`local ${i} = setmetatable({}, {
`,m+=`    __index = function(t, k)
`,m+=`        if ${o}[k] then return ${o}[k] end
`,m+=`        return _G[k] or ${o}[4]()[k]
`,m+=`    end,
`,m+=`    __newindex = function(t, k, v)
`,m+=`        ${o}[3]("Nexus Protection: Anti-Tamper Triggered")
`,m+=`    end,
`,m+=`    __metatable = "Protected by Nexus Matrix Engine v3"
`,m+=`})

`,m+=`-- [ CADENA DE BYTES TOTALMENTE MEZCLADA CON LETRAS ALEATORIAS ] --
`,m+=`local ${d} = "${t}"
`,m+=`local ${s} = ${e}
`,m+=`local ${u} = ""

`,m+=`-- Extractor ultra r\xe1pido: Remueve las letras basura y revierte la matem\xe1tica
`,m+=`for ${c} in ${o}[6](${d}, "([^,]+)") do
`,m+=`    -- Filtramos usando patrones de Lua para extraer \xdaNICAMENTE los n\xfameros, ignorando las letras pegadas
`,m+=`    local ${E} = tonumber(${o}[7](${c}, "%d+"))
`,m+=`    if ${E} then
`,m+=`        ${u} = ${u} .. ${o}[5](${E} - ${s})
`,m+=`    end
`,m+=`end

`,m+=`local ${g}, ${f} = ${i}[1](${u})
`,m+=`if ${g} then
`,m+=`    ${i}[2](${g}, ${i})
`,m+=`    ${g}()
`,m+=`else
`,m+=`    ${i}[3]("Nexus Integrity Fault: " .. tostring(${f}))
`,m+=`end
`}n.addEventListener("click",()=>{let n=t.value,e=o(n);r.value=e}),e.addEventListener("click",()=>{t.value="",r.value=""})});
