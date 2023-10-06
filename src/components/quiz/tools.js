export  function shuffleArray(array) {
    const shuffled = array.slice(); // 创建副本以避免更改原始数组
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 交换元素
    }
    return shuffled;
}
