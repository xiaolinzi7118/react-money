import { useState } from "react";

const defaultTagList1 = [
    { id: '4', type: 'out', value: '餐费' },
    { id: '5', type: 'out', value: '早餐' },
    { id: '6', type: 'out', value: '午餐' },
    { id: '7', type: 'out', value: '晚费' },
    { id: '8', type: 'out', value: '零食' },
    { id: '9', type: 'out', value: '水果' },
    { id: '10', type: 'out', value: '买菜' },
    { id: '11', type: 'out', value: '烟酒' },
    { id: '12', type: 'out', value: '购物' },
    { id: '13', type: 'out', value: '其他' }
];
const defaultTagList2 = [
    { id: '14', type: 'in', value: '工资' },
    { id: '15', type: 'in', value: '收租' },
    { id: '16', type: 'in', value: '兼职' },
    { id: '17', type: 'in', value: '报销' },
    { id: '18', type: 'in', value: '奖金' },
    { id: '19', type: 'in', value: '红包' },
    { id: '20', type: 'in', value: '理财' },
    { id: '21', type: 'in', value: '投资' },
    { id: '22', type: 'in', value: '礼金' },
    { id: '13', type: 'in', value: '其他' }
];
const useTagList = () => {
    const [tagList1, setTagList1] = useState(defaultTagList1);
    const [tagList2, setTagList2] = useState(defaultTagList2);
    return { tagList1, tagList2 }
}
export { useTagList }