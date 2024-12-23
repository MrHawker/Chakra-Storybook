/*! For license information please see 7072.778a913d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7072],{"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>Presence});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),useLayoutEffect2=Boolean(globalThis?.document)?react.useLayoutEffect:()=>{};var Presence=props=>{const{present,children}=props,presence=function usePresence(present){const[node,setNode]=react.useState(),stylesRef=react.useRef({}),prevPresentRef=react.useRef(present),prevAnimationNameRef=react.useRef("none"),initialState=present?"mounted":"unmounted",[state,send]=function useStateMachine(initialState,machine){return react.useReducer(((state,event)=>machine[state][event]??state),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return react.useEffect((()=>{const currentAnimationName=getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),useLayoutEffect2((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===styles?.display)send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),useLayoutEffect2((()=>{if(node){let timeoutId;const ownerWindow=node.ownerDocument.defaultView??window,handleAnimationEnd=event=>{const isCurrentAnimation=getAnimationName(stylesRef.current).includes(event.animationName);if(event.target===node&&isCurrentAnimation&&(send("ANIMATION_END"),!prevPresentRef.current)){const currentFillMode=node.style.animationFillMode;node.style.animationFillMode="forwards",timeoutId=ownerWindow.setTimeout((()=>{"forwards"===node.style.animationFillMode&&(node.style.animationFillMode=currentFillMode)}))}},handleAnimationStart=event=>{event.target===node&&(prevAnimationNameRef.current=getAnimationName(stylesRef.current))};return node.addEventListener("animationstart",handleAnimationStart),node.addEventListener("animationcancel",handleAnimationEnd),node.addEventListener("animationend",handleAnimationEnd),()=>{ownerWindow.clearTimeout(timeoutId),node.removeEventListener("animationstart",handleAnimationStart),node.removeEventListener("animationcancel",handleAnimationEnd),node.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:react.useCallback((node2=>{node2&&(stylesRef.current=getComputedStyle(node2)),setNode(node2)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react.Children.only(children),ref=(0,dist.s)(presence.ref,function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(child));return"function"==typeof children||presence.isPresent?react.cloneElement(child,{ref}):null};function getAnimationName(styles){return styles?.animationName||"none"}Presence.displayName="Presence"},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/@radix-ui/react-tabs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{UC:()=>Content,B8:()=>List,bL:()=>Root2,l9:()=>Trigger});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function composeEventHandlers(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(originalEventHandler?.(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return ourEventHandler?.(event)}}var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}function dist_composeEventHandlers(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(originalEventHandler?.(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return ourEventHandler?.(event)}}function dist_createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;defaultContexts=[...defaultContexts,defaultContext];const Provider=props=>{const{scope,children,...context}=props,Context=scope?.[scopeName]?.[index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName]?.[index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},dist_composeContextScopes(createScope,...createContextScopeDeps)]}function dist_composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_slot_dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");var useLayoutEffect2=Boolean(globalThis?.document)?react.useLayoutEffect:()=>{},useReactId=react_namespaceObject["useId".toString()]||(()=>{}),count=0;__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");var Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?react_slot_dist.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,jsx_runtime.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function useCallbackRef(callback){const callbackRef=react.useRef(callback);return react.useEffect((()=>{callbackRef.current=callback})),react.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}function useControllableState({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function useUncontrolledState({defaultProp,onChange}){const uncontrolledState=react.useState(defaultProp),[value]=uncontrolledState,prevValueRef=react.useRef(value),handleChange=useCallbackRef(onChange);return react.useEffect((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value=isControlled?prop:uncontrolledProp,handleChange=useCallbackRef(onChange);return[value,react.useCallback((nextValue=>{if(isControlled){const value2="function"==typeof nextValue?nextValue(prop):nextValue;value2!==prop&&handleChange(value2)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}var DirectionContext=react.createContext(void 0);var ENTRY_FOCUS="rovingFocusGroup.onEntryFocus",EVENT_OPTIONS={bubbles:!1,cancelable:!0},GROUP_NAME="RovingFocusGroup",[Collection,useCollection,createCollectionScope]=function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=dist_createContextScope(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react.useRef(null),itemMap=react.useRef(new Map).current;return(0,jsx_runtime.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,dist.s)(forwardedRef,context.collectionRef);return(0,jsx_runtime.jsx)(react_slot_dist.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react.useRef(null),composedRefs=(0,dist.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,jsx_runtime.jsx)(react_slot_dist.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}(GROUP_NAME),[createRovingFocusGroupContext,createRovingFocusGroupScope]=dist_createContextScope(GROUP_NAME,[createCollectionScope]),[RovingFocusProvider,useRovingFocusContext]=createRovingFocusGroupContext(GROUP_NAME),RovingFocusGroup=react.forwardRef(((props,forwardedRef)=>(0,jsx_runtime.jsx)(Collection.Provider,{scope:props.__scopeRovingFocusGroup,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:props.__scopeRovingFocusGroup,children:(0,jsx_runtime.jsx)(RovingFocusGroupImpl,{...props,ref:forwardedRef})})})));RovingFocusGroup.displayName=GROUP_NAME;var RovingFocusGroupImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,orientation,loop=!1,dir,currentTabStopId:currentTabStopIdProp,defaultCurrentTabStopId,onCurrentTabStopIdChange,onEntryFocus,preventScrollOnEntryFocus=!1,...groupProps}=props,ref=react.useRef(null),composedRefs=(0,dist.s)(forwardedRef,ref),direction=function useDirection(localDir){const globalDir=react.useContext(DirectionContext);return localDir||globalDir||"ltr"}(dir),[currentTabStopId=null,setCurrentTabStopId]=useControllableState({prop:currentTabStopIdProp,defaultProp:defaultCurrentTabStopId,onChange:onCurrentTabStopIdChange}),[isTabbingBackOut,setIsTabbingBackOut]=react.useState(!1),handleEntryFocus=useCallbackRef(onEntryFocus),getItems=useCollection(__scopeRovingFocusGroup),isClickFocusRef=react.useRef(!1),[focusableItemsCount,setFocusableItemsCount]=react.useState(0);return react.useEffect((()=>{const node=ref.current;if(node)return node.addEventListener(ENTRY_FOCUS,handleEntryFocus),()=>node.removeEventListener(ENTRY_FOCUS,handleEntryFocus)}),[handleEntryFocus]),(0,jsx_runtime.jsx)(RovingFocusProvider,{scope:__scopeRovingFocusGroup,orientation,dir:direction,loop,currentTabStopId,onItemFocus:react.useCallback((tabStopId=>setCurrentTabStopId(tabStopId)),[setCurrentTabStopId]),onItemShiftTab:react.useCallback((()=>setIsTabbingBackOut(!0)),[]),onFocusableItemAdd:react.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount+1))),[]),onFocusableItemRemove:react.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount-1))),[]),children:(0,jsx_runtime.jsx)(Primitive.div,{tabIndex:isTabbingBackOut||0===focusableItemsCount?-1:0,"data-orientation":orientation,...groupProps,ref:composedRefs,style:{outline:"none",...props.style},onMouseDown:dist_composeEventHandlers(props.onMouseDown,(()=>{isClickFocusRef.current=!0})),onFocus:dist_composeEventHandlers(props.onFocus,(event=>{const isKeyboardFocus=!isClickFocusRef.current;if(event.target===event.currentTarget&&isKeyboardFocus&&!isTabbingBackOut){const entryFocusEvent=new CustomEvent(ENTRY_FOCUS,EVENT_OPTIONS);if(event.currentTarget.dispatchEvent(entryFocusEvent),!entryFocusEvent.defaultPrevented){const items=getItems().filter((item=>item.focusable));focusFirst([items.find((item=>item.active)),items.find((item=>item.id===currentTabStopId)),...items].filter(Boolean).map((item=>item.ref.current)),preventScrollOnEntryFocus)}}isClickFocusRef.current=!1})),onBlur:dist_composeEventHandlers(props.onBlur,(()=>setIsTabbingBackOut(!1)))})})})),RovingFocusGroupItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,focusable=!0,active=!1,tabStopId,...itemProps}=props,autoId=function useId(deterministicId){const[id,setId]=react.useState(useReactId());return useLayoutEffect2((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}(),id=tabStopId||autoId,context=useRovingFocusContext("RovingFocusGroupItem",__scopeRovingFocusGroup),isCurrentTabStop=context.currentTabStopId===id,getItems=useCollection(__scopeRovingFocusGroup),{onFocusableItemAdd,onFocusableItemRemove}=context;return react.useEffect((()=>{if(focusable)return onFocusableItemAdd(),()=>onFocusableItemRemove()}),[focusable,onFocusableItemAdd,onFocusableItemRemove]),(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeRovingFocusGroup,id,focusable,active,children:(0,jsx_runtime.jsx)(Primitive.span,{tabIndex:isCurrentTabStop?0:-1,"data-orientation":context.orientation,...itemProps,ref:forwardedRef,onMouseDown:dist_composeEventHandlers(props.onMouseDown,(event=>{focusable?context.onItemFocus(id):event.preventDefault()})),onFocus:dist_composeEventHandlers(props.onFocus,(()=>context.onItemFocus(id))),onKeyDown:dist_composeEventHandlers(props.onKeyDown,(event=>{if("Tab"===event.key&&event.shiftKey)return void context.onItemShiftTab();if(event.target!==event.currentTarget)return;const focusIntent=function getFocusIntent(event,orientation,dir){const key=function getDirectionAwareKey(key,dir){return"rtl"!==dir?key:"ArrowLeft"===key?"ArrowRight":"ArrowRight"===key?"ArrowLeft":key}(event.key,dir);return"vertical"===orientation&&["ArrowLeft","ArrowRight"].includes(key)||"horizontal"===orientation&&["ArrowUp","ArrowDown"].includes(key)?void 0:MAP_KEY_TO_FOCUS_INTENT[key]}(event,context.orientation,context.dir);if(void 0!==focusIntent){if(event.metaKey||event.ctrlKey||event.altKey||event.shiftKey)return;event.preventDefault();let candidateNodes=getItems().filter((item=>item.focusable)).map((item=>item.ref.current));if("last"===focusIntent)candidateNodes.reverse();else if("prev"===focusIntent||"next"===focusIntent){"prev"===focusIntent&&candidateNodes.reverse();const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=context.loop?function wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateNodes,currentIndex+1):candidateNodes.slice(currentIndex+1)}setTimeout((()=>focusFirst(candidateNodes)))}}))})})}));RovingFocusGroupItem.displayName="RovingFocusGroupItem";var MAP_KEY_TO_FOCUS_INTENT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function focusFirst(candidates,preventScroll=!1){const PREVIOUSLY_FOCUSED_ELEMENT=document.activeElement;for(const candidate of candidates){if(candidate===PREVIOUSLY_FOCUSED_ELEMENT)return;if(candidate.focus({preventScroll}),document.activeElement!==PREVIOUSLY_FOCUSED_ELEMENT)return}}var dist_Root=RovingFocusGroup,Item=RovingFocusGroupItem,react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),dist_Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?react_slot_dist.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,jsx_runtime.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});var dist_DirectionContext=react.createContext(void 0);function dist_useCallbackRef(callback){const callbackRef=react.useRef(callback);return react.useEffect((()=>{callbackRef.current=callback})),react.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}function dist_useControllableState({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function dist_useUncontrolledState({defaultProp,onChange}){const uncontrolledState=react.useState(defaultProp),[value]=uncontrolledState,prevValueRef=react.useRef(value),handleChange=dist_useCallbackRef(onChange);return react.useEffect((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value=isControlled?prop:uncontrolledProp,handleChange=dist_useCallbackRef(onChange);return[value,react.useCallback((nextValue=>{if(isControlled){const value2="function"==typeof nextValue?nextValue(prop):nextValue;value2!==prop&&handleChange(value2)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}var dist_useLayoutEffect2=Boolean(globalThis?.document)?react.useLayoutEffect:()=>{},dist_useReactId=react_namespaceObject["useId".toString()]||(()=>{}),dist_count=0;function dist_useId(deterministicId){const[id,setId]=react.useState(dist_useReactId());return dist_useLayoutEffect2((()=>{deterministicId||setId((reactId=>reactId??String(dist_count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}var[createTabsContext,createTabsScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;defaultContexts=[...defaultContexts,defaultContext];const Provider=props=>{const{scope,children,...context}=props,Context=scope?.[scopeName]?.[index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName]?.[index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}("Tabs",[createRovingFocusGroupScope]),useRovingFocusGroupScope=createRovingFocusGroupScope(),[TabsProvider,useTabsContext]=createTabsContext("Tabs"),Tabs=react.forwardRef(((props,forwardedRef)=>{const{__scopeTabs,value:valueProp,onValueChange,defaultValue,orientation="horizontal",dir,activationMode="automatic",...tabsProps}=props,direction=function dist_useDirection(localDir){const globalDir=react.useContext(dist_DirectionContext);return localDir||globalDir||"ltr"}(dir),[value,setValue]=dist_useControllableState({prop:valueProp,onChange:onValueChange,defaultProp:defaultValue});return(0,jsx_runtime.jsx)(TabsProvider,{scope:__scopeTabs,baseId:dist_useId(),value,onValueChange:setValue,orientation,dir:direction,activationMode,children:(0,jsx_runtime.jsx)(dist_Primitive.div,{dir:direction,"data-orientation":orientation,...tabsProps,ref:forwardedRef})})}));Tabs.displayName="Tabs";var TabsList=react.forwardRef(((props,forwardedRef)=>{const{__scopeTabs,loop=!0,...listProps}=props,context=useTabsContext("TabsList",__scopeTabs),rovingFocusGroupScope=useRovingFocusGroupScope(__scopeTabs);return(0,jsx_runtime.jsx)(dist_Root,{asChild:!0,...rovingFocusGroupScope,orientation:context.orientation,dir:context.dir,loop,children:(0,jsx_runtime.jsx)(dist_Primitive.div,{role:"tablist","aria-orientation":context.orientation,...listProps,ref:forwardedRef})})}));TabsList.displayName="TabsList";var TabsTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeTabs,value,disabled=!1,...triggerProps}=props,context=useTabsContext("TabsTrigger",__scopeTabs),rovingFocusGroupScope=useRovingFocusGroupScope(__scopeTabs),triggerId=makeTriggerId(context.baseId,value),contentId=makeContentId(context.baseId,value),isSelected=value===context.value;return(0,jsx_runtime.jsx)(Item,{asChild:!0,...rovingFocusGroupScope,focusable:!disabled,active:isSelected,children:(0,jsx_runtime.jsx)(dist_Primitive.button,{type:"button",role:"tab","aria-selected":isSelected,"aria-controls":contentId,"data-state":isSelected?"active":"inactive","data-disabled":disabled?"":void 0,disabled,id:triggerId,...triggerProps,ref:forwardedRef,onMouseDown:composeEventHandlers(props.onMouseDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey?event.preventDefault():context.onValueChange(value)})),onKeyDown:composeEventHandlers(props.onKeyDown,(event=>{[" ","Enter"].includes(event.key)&&context.onValueChange(value)})),onFocus:composeEventHandlers(props.onFocus,(()=>{const isAutomaticActivation="manual"!==context.activationMode;isSelected||disabled||!isAutomaticActivation||context.onValueChange(value)}))})})}));TabsTrigger.displayName="TabsTrigger";var TabsContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeTabs,value,forceMount,children,...contentProps}=props,context=useTabsContext("TabsContent",__scopeTabs),triggerId=makeTriggerId(context.baseId,value),contentId=makeContentId(context.baseId,value),isSelected=value===context.value,isMountAnimationPreventedRef=react.useRef(isSelected);return react.useEffect((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,jsx_runtime.jsx)(react_presence_dist.C,{present:forceMount||isSelected,children:({present})=>(0,jsx_runtime.jsx)(dist_Primitive.div,{"data-state":isSelected?"active":"inactive","data-orientation":context.orientation,role:"tabpanel","aria-labelledby":triggerId,hidden:!present,id:contentId,tabIndex:0,...contentProps,ref:forwardedRef,style:{...props.style,animationDuration:isMountAnimationPreventedRef.current?"0s":void 0},children:present&&children})})}));function makeTriggerId(baseId,value){return`${baseId}-trigger-${value}`}function makeContentId(baseId,value){return`${baseId}-content-${value}`}TabsContent.displayName="TabsContent";var Root2=Tabs,List=TabsList,Trigger=TabsTrigger,Content=TabsContent},'./node_modules/next/font/google/target.css?{"path":"src\\\\app\\\\_components\\\\ui\\\\tabs.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}':module=>{if(!document.getElementById("id-76eca2")){const fontDeclarations="/* cyrillic-ext */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-76eca2"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .manrope-normal {\n      font-family: Manrope;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-76eca2"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"manrope-normal",style:{fontFamily:"Manrope",fontStyle:"normal"}}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/git-merge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>GitMerge});const GitMerge=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]])}}]);