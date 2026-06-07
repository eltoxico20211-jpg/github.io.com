document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),t=document.getElementById("resetBtn"),n=document.getElementById("luaInput"),r=document.getElementById("luaOutput");function l(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function o(e){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="_";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function a(e){if(!e.trim())return"-- Error";let t=Math.floor(100*Math.random())+30,n="";for(let r=0;r<e.length;r++)n+=e.charCodeAt(r)+t+l()+(r<e.length-1?",":"");let a=o(7),d=o(6),u=o(8),c=o(5),i=o(8),f=o(5),s=o(6),g=o(6),h=o(6),m=`-- NexusOfuscator
`;return m+=`local ${a} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}
`,m+=`local ${d} = setmetatable({},{__index=function(t,k) if ${a}[k] then return ${a}[k] end return _G[k] or ${a}[4]()[k] end,__newindex=function(t,k,v) ${a}[3]("Error") end,__metatable="NexusOfuscator"})
`,m+=`local ${u}="${n}" local ${c}=${t} local ${i}=""
`,m+=`for ${f} in ${a}[6](${u}, "([^,]+)") do
`,m+=`local ${s}=tonumber(${a}[7](${f}, "%d+"))
`,m+=`if ${s} then ${i}=${i}..${a}[5](${s}-${c}) end
`,m+=`end
`,m+=`local ${g},${h}=${d}[1](${i})
`,m+=`if ${g} then ${d}[2](${g},${d}) ${g}() else ${d}[3](tostring(${h})) end`}e.addEventListener("click",()=>{r.value=a(n.value)}),t.addEventListener("click",()=>{n.value="",r.value=""})});
