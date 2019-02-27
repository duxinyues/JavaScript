import  React,{Component, createElement} from 'react';
import {Spin} from 'antd';
import pathToRegexp from 'path-to-regexp';
import Loadable from 'react-loadable';
import {getMenuData} from './menu';

let routerDataCache;

const modelNotExisted = (app,model)=>!app._models.some(({ namespace }) => {
        return namespace === model.substring(model.lastIndexOf('/') + 1);
    });

const dynamicWrapper = (app, models,component)=>{
        models.forEach(model => {
            if (modelNotExisted(app,model)) {
                app.model(require(`../models/${model}`).default);
            }
        });
        if (component.toString().indexOf('.then(')<0) {
            return props =>{
                if (!routerDataCache) {
                    routerDataCache = getRouterData(app);
                }
                return createElement(component().default,{
                    ...props,
                    routerData:routerDataCache
                });
            };
        }
        return Loadable({
            loader:()=>{
                if (!routerDataCache) {
                    routerDataCache = getRouterData(app);
                }
                return component().then(raw=>{
                    const Component = raw.default || raw;
                    return props => createElement(Component,{
                        ...props,
                        routerData:routerDataCache
                    });
                });
            },
            loading:()=>{
                return <Spin size="large" className="global-spin" />
            },
        });
    };
function getFlatMenuData(menus) {
    let keys = {};
    menus.forEach(item=>{
        if (item.children) {
            keys[item.path] = {...item};
            keys = {...keys,...getFlatMenuData(item.children)};
        }else{
            keys[item.path] = {...item};
        }
    });
    return keys;
}
export const getRouterData = app =>{
    const routerConfig = {
        '/':{
            component:dynamicWrapper(app,['user','login'],()=>import('../layouts/basicLayout')),
        },
        //用户主页
        '/home':{
            component:dynamicWrapper(app,['project','activities','chart','source','userIofo'],()=>import('../routes/Home/Workplace'))
        },
        '/resource/add':{
            component:dynamicWrapper(app,['source'],()=>import('../routes/Resource/NewSource')),
        },
        '/resource/detail/:id':{
            component:dynamicWrapper(app,['source'],()=>import('../routes/Resource/SourceDetail')),
        },

        //资源管理
        '/resource/':{
            component:dynamicWrapper(app,['source','rule','source'],()=>import('../routes/Resource/TableList')),
        },
        //资源跟进
        '/follow':{
            component:dynamicWrapper(app,['source'],()=>import('../routes/Follow/TabList')),
        },
        //员工管理
        '/person':{
            component:dynamicWrapper(app,['employee'],()=>import('../routes/Employee/TableList')),
        },
        '/result/success':{
            component:dynamicWrapper(app,[],()=>import('../routes/Result/Success')),
        },
        '/result/fail':{
            component:dynamicWrapper(app,[],()=>import('../routes/Result/Error')),
        },
        '/exception/403':{
            component:dynamicWrapper(app,[],()=>import('../routes/Exception/403'))
        },
        '/exception/404':{
            component:dynamicWrapper(app,[],()=>import('../routes/Exception/404'))
        },
        '/exception/500':{
            component:dynamicWrapper(app,[],()=>import('../routes/Exception/500'))
        },
        '/exception/trigger':{
            component:dynamicWrapper(app,[],()=>import('../routes/Exception/triggerException'))
        },
        '/user':{
            component:dynamicWrapper(app,[],()=>import('../layouts/UserLayout'))
        },
        '/user/login':{
            component:dynamicWrapper(app,['login'],()=>import('../routes/User/Login'))
        },
        '/user/register':{
            component:dynamicWrapper(app,['register'],()=>import('../routes/User/Register'))
        },
        '/user/registart-result':{
            component:dynamicWrapper(app,[],()=>import('../routes/User/RegisterResult'))
        },
    }
    const menuData = getFlatMenuData(getMenuData());
    Object.keys(routerConfig).forEach(path=>{
        const pathRegexp = pathToRegexp(path);
        const menuKey = Object.keys(menuData).find(key=>pathRegexp.test(`${key}`));
        let menuItem = {};
        if (menuKey) {
            menuItem = menuData[menuKey]
        }
        let router = routerConfig[path];
        router = {
            ...router,
            name:router.name || menuItem.name
        }
    })
}