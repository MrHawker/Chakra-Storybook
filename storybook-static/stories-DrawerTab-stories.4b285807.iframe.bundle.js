/*! For license information please see stories-DrawerTab-stories.4b285807.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9681],{"./src/stories/DrawerTab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Resting:()=>Resting,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_GitMerge_Plug_TimerReset_lucide_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/git-merge.js"),_barrel_optimize_names_GitMerge_Plug_TimerReset_lucide_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/plug.js"),_barrel_optimize_names_GitMerge_Plug_TimerReset_lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/timer-reset.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Workspaces/DrawerTab",component:__webpack_require__("./src/app/_components/ui/DrawerTab.tsx").J,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-[600px] max-h-[600px] min-w-[400px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],tags:["autodocs"],parameters:{docs:{description:{component:"A reusable DrawerTab component."}}}},Resting={args:{tabs:[{label:"Integrations",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_GitMerge_Plug_TimerReset_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,{className:"h-4 w-4"}),content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Integrations"})},{label:"API Docs",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_GitMerge_Plug_TimerReset_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,{className:"h-4 w-4"}),content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"API Docs"})},{label:"Jobs",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_GitMerge_Plug_TimerReset_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-4 w-4"}),content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Jobs"})}]}},__namedExportsOrder=["Resting"];Resting.parameters={...Resting.parameters,docs:{...Resting.parameters?.docs,source:{originalSource:'{\n  args: {\n    tabs: [{\n      label: "Integrations",\n      icon: <GitMerge className="h-4 w-4" />,\n      content: <div>Integrations</div>\n    }, {\n      label: "API Docs",\n      icon: <Plug className="h-4 w-4" />,\n      content: <div>API Docs</div>\n    }, {\n      label: "Jobs",\n      icon: <TimerReset className="h-4 w-4" />,\n      content: <div>Jobs</div>\n    }]\n  }\n}',...Resting.parameters?.docs?.source}}}},"./src/app/_components/ui/DrawerTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>DrawerTab});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_font_google_target_css_path_src_app_components_ui_DrawerTab_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__('./node_modules/next/font/google/target.css?{"path":"src\\\\app\\\\_components\\\\ui\\\\DrawerTab.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}'),_tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/_components/ui/tabs.tsx");function DrawerTab({title,tabs}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tabs__WEBPACK_IMPORTED_MODULE_2__.tU,{defaultValue:"Integrations",className:` ${next_font_google_target_css_path_src_app_components_ui_DrawerTab_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope___WEBPACK_IMPORTED_MODULE_1__.className}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tabs__WEBPACK_IMPORTED_MODULE_2__.j7,{className:"bg-[#18181B] gap-6 p-1 w-full",children:tabs.map((tab=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tabs__WEBPACK_IMPORTED_MODULE_2__.Xi,{value:tab.label,className:"flex items-center gap-2 rounded-sm px-4 py-[6px] w-full hover:bg-[#52525B] hover:text-white ",children:[tab.icon,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"",children:tab.label})]})})))}),tabs.map((tab=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tabs__WEBPACK_IMPORTED_MODULE_2__.av,{value:tab.label,children:tab.content})))]})}DrawerTab.__docgenInfo={description:"",methods:[],displayName:"DrawerTab",props:{title:{required:!0,tsType:{name:"string"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:""}}}},"./src/app/_components/ui/tabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xi:()=>TabsTrigger,av:()=>TabsContent,j7:()=>TabsList,tU:()=>Tabs});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-tabs/dist/index.mjs"),next_font_google_target_css_path_src_app_components_ui_tabs_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__('./node_modules/next/font/google/target.css?{"path":"src\\\\app\\\\_components\\\\ui\\\\tabs.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}'),next_font_google_target_css_path_src_app_components_ui_tabs_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope___WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_font_google_target_css_path_src_app_components_ui_tabs_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope___WEBPACK_IMPORTED_MODULE_2__),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts");const Tabs=_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.bL,TabsList=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.B8,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",className),...props})));TabsList.displayName=_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.B8.displayName;const TabsTrigger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.l9,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#52525B] text-[#52525B] data-[state=active]:text-white data-[state=active]:shadow-sm",next_font_google_target_css_path_src_app_components_ui_tabs_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope___WEBPACK_IMPORTED_MODULE_2___default().className,className),...props})));TabsTrigger.displayName=_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.l9.displayName;const TabsContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.UC,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",className),...props})));TabsContent.displayName=_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.UC.displayName,TabsList.__docgenInfo={description:"",methods:[]},TabsTrigger.__docgenInfo={description:"",methods:[]},TabsContent.__docgenInfo={description:"",methods:[]}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/lucide-react/dist/esm/icons/plug.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Plug});const Plug=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]])},"./node_modules/lucide-react/dist/esm/icons/timer-reset.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TimerReset});const TimerReset=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]])},'./node_modules/next/font/google/target.css?{"path":"src\\\\app\\\\_components\\\\ui\\\\DrawerTab.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}':module=>{module.exports="\n    \n    if (!document.getElementById('id-76eca2')) {\n      const fontDeclarations = `/* cyrillic-ext */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n`;\n      const style = document.createElement('style');\n      style.setAttribute('id', 'font-face-76eca2');\n      style.innerHTML = fontDeclarations;\n      document.head.appendChild(style);\n\n      const classNamesCSS = `\n    .manrope-normal {\n      font-family: Manrope;\n      font-style: normal;\n      \n    }\n\n    \n  `;\n      const classNamesStyle = document.createElement('style');\n      classNamesStyle.setAttribute('id', 'classnames-76eca2');\n      classNamesStyle.innerHTML = classNamesCSS;\n      document.head.appendChild(classNamesStyle);\n\n    }\n  \n\n    module.exports = {\n      className: \"manrope-normal\", \n      style: {\"fontFamily\":\"Manrope\",\"fontStyle\":\"normal\"}\n      \n    }\n    "}}]);