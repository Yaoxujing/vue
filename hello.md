# 设置一个格式吧

不用了，用来记录我每天的每日一题

然后周末回来，看一些学习视频吧



代码：

我直接一个暴力循环

```js
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    let res =[]
    for(let x = 1 ; x<=1000 ;x++){
        for(let y = 1 ; y<=1000; y++){
            let temp = customfunction.f(x,y)
            if(temp == z){
                res.push([x,y])
            }
        }
    }
    return res;
};
```

方法二：双指针

我们可以定义两个指针 x 和 y，初始时=1，y=1000。

如果f(x,y)=z，我们将(x,y) 加入答案中，然后 x←x+1，y←y−1；
如果f(x,y)<z，此时对任意的y1  <y，都有f(x,y1 )<f(x,y)<z，因此我们不能将 y 减小，只能将 x 增大，所以 x←x+1；
如果f(x,y)>z，此时对任意的 x' > x，都有 f(x', y) >f(x,y)>z，因此我们不能将 x 增大，只能将 y 减小，所以 y←y−1。





2.20 简单题

[2347. 最好的扑克手牌](https://leetcode.cn/problems/best-poker-hand/)

```js
var bestHand = function(ranks, suits) {
    const suitsSet = new Set();
    for (const suit of suits) {
        suitsSet.add(suit);
    }
    if (suitsSet.size === 1) {
        return "Flush";
    }
    const h = new Map();
    for (const rank of ranks) {
        h.set(rank, (h.get(rank) || 0) + 1);
    }
    if (h.size === 5) {
        return "High Card";
    }
    for (const value of h.values()) {
        if (value > 2) {
            return "Three of a Kind";
        }
    }
    return "Pair";
};
```



我自己写的：

```js
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const n = ranks.length;
    // 花色是否相同
    for(let i= 0 ; i<n ;i++){
        if(suits[i]!= suits[0]){
            break
        }
        if(i==n-1){
            return 'Flush'
        }
    }

    //是否有三个一样的大小
    let count = new Array(14).fill(0)
    for(let i = 0 ; i<n ; i++){
        count[ranks[i]]++
        if(count[ranks[i]] == 3){
            return 'Three of a Kind'
        }
    }
    //是否有两个一样的大小
    for(let i = 1 ; i<14 ; i++){
        if(count[i] == 2){
            return "Pair"
        }
    }

    return "High Card"
};
```

### 收获：

使用map可以记录它的大小，总共就5个值哈哈哈。



# [#](https://www.programmercarl.com/0037.解数独.html#_37-解数独)37. 解数独

[力扣题目链接](https://leetcode.cn/problems/sudoku-solver/)

![37.解数独](E:\研究生学习\研二\文档与阅读笔记\图片\2020111720451790.png)

我竟然在力扣上解题：

```js
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const n = board.length;
    let isValid=(row,col,num)=>{
        // 同一行不能出现重复的
        for(let i = 0 ; i<n ;i++){
            if(board[i][col] == num) return false
        }
        // 同一列不能出现重复的
        for(let i = 0 ; i<n ;i++){
            if(board[row][i] == num) return false
        }

        //同一个组合不能出现重复的
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3
        for(let i = startRow ; i< startRow+3 ;i++){
            for(let j = startCol; j <  startCol+3 ; j++){
                if(board[i][j] == num) return false
            }
        }
        return true
    }

    let backtracking=()=>{
        for(let i = 0 ; i<n ; i++){
            for(let j = 0 ; j<n ; j++){
                if(board[i][j] == "."){
                    for(let k = 1 ; k<=9 ;k++){
                        if(isValid(i,j, `${k}`)){
                            board[i][j]=  `${k}`
                            if(backtracking()) return true
                            board[i][j]= '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }

    backtracking()
    return board
};
```

