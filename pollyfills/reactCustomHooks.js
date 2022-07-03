function useCustomState(initialValue){
    var _val = initialValue;
    function state() {
        return _val
    }
    function setState(newVal) {
        _val = newVal;
    }
    return [state, setState];
}

// const [foo, setFoo] = useCustomState(0);
// const [value, setValue] = useCustomState('toshal');
// console.log(foo());
// console.log(value());
// setFoo(1);
// setValue('toshal lubana')
// console.log(foo());
// console.log(value());

// function Counter(){
//     const [count, setCount] = useCustomState(0);
//     return {
//         click: () => setCount(count() + 1),
//         render: () => console.log('render:', {count: count()})
//     }
// }
// const c = Counter();
// c.render();
// c.click();
// c.render();

// We can solve our useState conundrum by… moving our closure inside another closure! (Yo dawg I heard you like closures…)

const MyReact = (function() {
    let hooks = [];
    currentHook = 0;
    return {
        render (Component) {
            const Comp = Component();
            Comp.render();
            currentHook = 0;
            return Comp;
        },
        useEffectCustom(cb, depArray){
            const hasNoDeps = !depArray;
            const deps = hooks[currentHook];
            const hasChangedDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true;
            if(hasNoDeps || hasChangedDeps) {
                cb();
                hooks[currentHook] = depArray
            }
            currentHook++;
        },       
        useCustomState(initialValue) {
            hooks[currentHook] = hooks[currentHook] || initialValue;
            const setStateHookindex = currentHook;
            const setState = (newState) => (hooks[setStateHookindex] = newState);
            return [hooks[currentHook++], setState];
        }
    }
})();

function Counter() {
    const [count, setCount] = MyReact.useCustomState(0);
    const [text, setText] = MyReact.useCustomState('foo');
    MyReact.useEffectCustom(() => {
        console.log('effect', count);
    }, [count,text]);

    return {
        click: () =>  setCount(count + 1),
        type: (text) => setText(text),
        noop: () => setCount(count),
        render: () => console.log('render', { count, text})
    }
}

let App;
App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter);
App.type('bar');
App = MyReact.render(Counter);
App.noop();