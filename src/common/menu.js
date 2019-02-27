import {isUrl} from '../utils/utils';

const menuData = [
    {
        name:'主页',
        icon:'home',
        path:'home'
    },
    {
        name: '资源管理',
        icon: 'folder',
        path: 'resource'
    },
    {
        name: '资源跟进',
        icon: 'customer-service',
        path: 'follow',
        authority:['seller','supervisor'],
    },
    {
        name: '员工管理',
        icon: 'team',
        path: 'person',
        authority:['supervisor']
    },
];
function formatter(data,parentPath='/',parentAuthority){
    return data.map(item=>{
        let {path} = item;
        if (!isUrl) {
            path=parentPath + item.path;
        }

        const result = {
            ...item,
            path,
            authority:item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children,`${parentPath}${item.path}/`,item.authority);
        }
        return result
    });
}

export const getMenuData = ()=> formatter(menuData)