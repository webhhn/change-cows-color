import $ from 'jquery'

// 定义jq的入口函数
$(function() {
    // j基数行为红色
    $('li:odd').css('background-color', 'red')
        // j偶数行为红色
    $('li:even').css('background-color', 'pink')
})