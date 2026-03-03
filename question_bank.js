/* === EXAM MANAGER === */

// 1. GLOBAL MATH TOOLS
window.rInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
window.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
window.shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
window.toSuper = (num) => String(num).split("").map(c => ({"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"})[c] || c).join("");

// 2. REGISTRY SYSTEM
window.SUBJECT_DB = {};

window.registerModule = function(name, qCount, generatorFunc, poolDesc) {
    const timeLimit = Math.ceil(qCount * 1.25); // CASA Rule: 75s per question
    
    window.SUBJECT_DB[name] = {
        qCount: qCount,
        time: timeLimit,
        generator: generatorFunc,
        poolSize: poolDesc || "Standard"
    };
    
    console.log(`Registered: ${name}`);
};