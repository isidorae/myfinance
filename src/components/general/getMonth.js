import { months } from '../dashboard/months.json'

export let defaultMonthValue;

export function getMonth(arr){
    switch(arr) {
        case "01":
            defaultMonthValue = months[0]
            break;
        case "02":
            defaultMonthValue = months[1]
            break;
        case "03":
            defaultMonthValue = months[2]
            break;
        case "04":
            defaultMonthValue = months[3]
            break;
        case "05":
            defaultMonthValue = months[4]
            break;
        case "06":
            defaultMonthValue = months[5]
            break;
        case "07":
            defaultMonthValue = months[6]
            break;
        case "08":
            defaultMonthValue = months[7]
            break;
        case "09":
            defaultMonthValue = months[8]
            break;
        case "10":
            defaultMonthValue = months[9]
            break;
        case "11":
            defaultMonthValue = months[10]
            break;
        case "12":
            defaultMonthValue = months[11]
            break;
    }

}