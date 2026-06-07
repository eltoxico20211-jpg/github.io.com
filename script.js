document.addEventListener("DOMContentLoaded", () => {
    const obfuscateBtn = document.getElementById("obfuscateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const luaInput = document.getElementById("luaInput");
    const luaOutput = document.getElementById("luaOutput");

    // Generador de caracteres basura aleatorios (letras minúsculas)
    function getRandomJunkChar() {
        const junk = "abcdefghijklmnopqrstuvwxyz";
        return junk.charAt(Math.floor(Math.random() * junk.length));
    }

    // Generador de nombres de variables aleatorias para la estructura Lua
    function generateRandomName(length) {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "_";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    function obfuscateEngine(originalCode) {
        if (!originalCode.trim()) {
            return "-- Please paste a valid script first!";
        }

        // 1. Clave matemática dinámica para el desplazamiento numérico
        const cryptoKey = Math.floor(Math.random() * 100) + 30; 
        
        let dynamicStream = "";

        // 2. Convertir el código aplicando tu idea: Número + Letra Aleatoria
        for (let i = 0; i < originalCode.length; i++) {
            let obfuscatedByte = originalCode.charCodeAt(i) + cryptoKey;
            
            // Inyectamos el número modificado y le pegamos una letra aleatoria al final (ej: "108a")
            dynamicStream += obfuscatedByte + getRandomJunkChar();
            
            // Separamos cada bloque con una coma para que Lua sepa dónde termina cada carácter
            if (i < originalCode.length - 1) {
                dynamicStream += ",";
            }
        }

        // Generación de variables totalmente aleatorias para el cargador de Lua
        const tableVar = generateRandomName(7);
        const envVar = generateRandomName(6);
        const streamVar = generateRandomName(8);
        const keyVar = generateRandomName(5);
        const cleanStrVar = generateRandomName(8);
        const blockVar = generateRandomName(5);
        const cleanNumVar = generateRandomName(6);
        const executeVar = generateRandomName(6);
        const errorVar = generateRandomName(6);

        // 3. Construcción del entorno seguro Matrix Engine v3
        let output = `-- ==========================================\n`;
        output += `--  PROTEGER CON ENCRYPT X (NEXUS ENGINE v3) \n`;
        output += `--  STATUS: JUNK-BYTE STREAM INJECTION       \n`;
        output += `-- ==========================================\n\n`;
        
        output += `local ${tableVar} = {\n`;
        output += `    [1] = loadstring,\n`;
        output += `    [2] = setfenv,\n`;
        output += `    [3] = error,\n`;
        output += `    [4] = getfenv,\n`;
        output += `    [5] = string.char,\n`;
        output += `    [6] = string.gmatch,\n`;
        output += `    [7] = string.match\n`; // Añadimos coincidencia de patrones avanzada
        output += `}\n\n`;
        
        output += `local ${envVar} = setmetatable({}, {\n`;
        output += `    __index = function(t, k)\n`;
        output += `        if ${tableVar}[k] then return ${tableVar}[k] end\n`;
        output += `        return _G[k] or ${tableVar}[4]()[k]\n`;
        output += `    end,\n`;
        output += `    __newindex = function(t, k, v)\n`;
        output += `        ${tableVar}[3]("Nexus Protection: Anti-Tamper Triggered")\n`;
        output += `    end,\n`;
        output += `    __metatable = "Protected by Nexus Matrix Engine v3"\n`;
        output += `})\n\n`;
        
        output += `-- [ CADENA DE BYTES TOTALMENTE MEZCLADA CON LETRAS ALEATORIAS ] --\n`;
        output += `local ${streamVar} = "${dynamicStream}"\n`;
        output += `local ${keyVar} = ${cryptoKey}\n`;
        output += `local ${cleanStrVar} = ""\n\n`;
        
        output += `-- Extractor ultra rápido: Remueve las letras basura y revierte la matemática\n`;
        output += `for ${blockVar} in ${tableVar}[6](${streamVar}, "([^,]+)") do\n`;
        output += `    -- Filtramos usando patrones de Lua para extraer ÚNICAMENTE los números, ignorando las letras pegadas\n`;
        output += `    local ${cleanNumVar} = tonumber(${tableVar}[7](${blockVar}, "%d+"))\n`;
        output += `    if ${cleanNumVar} then\n`;
        output += `        ${cleanStrVar} = ${cleanStrVar} .. ${tableVar}[5](${cleanNumVar} - ${keyVar})\n`;
        output += `    end\n`;
        output += `end\n\n`;
        
        output += `local ${executeVar}, ${errorVar} = ${envVar}[1](${cleanStrVar})\n`;
        output += `if ${executeVar} then\n`;
        output += `    ${envVar}[2](${executeVar}, ${envVar})\n`;
        output += `    ${executeVar}()\n`;
        output += `else\n`;
        output += `    ${envVar}[3]("Nexus Integrity Fault: " .. tostring(${errorVar}))\n`;
        output += `end\n`;
        
        return output;
    }

    obfuscateBtn.addEventListener("click", () => {
        const userCode = luaInput.value;
        const protectedCode = obfuscateEngine(userCode);
        luaOutput.value = protectedCode;
    });

    resetBtn.addEventListener("click", () => {
        luaInput.value = "";
        luaOutput.value = "";
    });
});
