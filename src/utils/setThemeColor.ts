/*
 * @Author: lfan
 * @Date: 2023-03-21 21:56:30
 * @Description: file content
 */


export const setStyle = (color: Object) => {
    if (color && color.toString() !== '{}') {
        for (let key in color) {
            document.getElementsByClassName('app')[0].style.setProperty(key, color[key as keyof typeof color])
        }
    }
}