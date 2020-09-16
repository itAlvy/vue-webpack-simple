// ES5语法
// module.exports = function hello() {
//     console.log('Hello World123');
// }

// ES6语法
// export default function hello() {
//     console.log('Hello World');
// }

export default function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timer Over');
        }, 1500);
    })
}