//строчный коментарий (Ctrl + /)
/* многострочный коментарий*/

// пояляющееся окошко при открытии сайта
// alert("Приветствуем на сайте команды");

// отключение правой кнопки мыши
function click() {
    event.cancelBubble = true;
    event.returnValue = false;
    }
    document.oncontextmenu = click;

    
    // function name () { } - функция
    function watchs (q) {
        return q 
    }
    console.log(watchs ())
