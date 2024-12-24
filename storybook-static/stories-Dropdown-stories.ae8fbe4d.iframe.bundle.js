(self.webpackChunkapp=self.webpackChunkapp||[]).push([[544],{"./src/stories/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Selected:()=>Selected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/_components/ui/dropdown.tsx"),_icons_s3__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/icons/s3.tsx"),_icons_databricks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/icons/databricks.tsx"),_icons_snowflake__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/icons/snowflake.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CanvasElements/chakraInputsDropdowns/Dropdown",decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-[400px] max-h-[400px] min-w-[200px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],component:_app_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__.m,tags:["autodocs"],parameters:{docs:{description:{component:"A reusable Dropdown component."}}}},Default={args:{label:"Integration Types",required:!0,items:[{label:"S3",icon:_icons_s3__WEBPACK_IMPORTED_MODULE_2__.S3},{label:"Databricks",icon:_icons_databricks__WEBPACK_IMPORTED_MODULE_3__.H},{label:"Snowflake",icon:_icons_snowflake__WEBPACK_IMPORTED_MODULE_4__.D},{label:"MongoDB",icon:_icons_s3__WEBPACK_IMPORTED_MODULE_2__.S3}]}},Disabled={args:{...Default.args,disabled:!0}},Selected={args:{...Default.args,selected:{label:"S3",icon:_icons_s3__WEBPACK_IMPORTED_MODULE_2__.S3}}},__namedExportsOrder=["Default","Disabled","Selected"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Integration Types",\n    required: true,\n    items: [{\n      label: "S3",\n      icon: S3\n    }, {\n      label: "Databricks",\n      icon: Databricks\n    }, {\n      label: "Snowflake",\n      icon: Snowflake\n    }, {\n      label: "MongoDB",\n      icon: S3\n    }]\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    selected: {\n      label: "S3",\n      icon: S3\n    }\n  }\n}',...Selected.parameters?.docs?.source}}}},'./node_modules/next/font/google/target.css?{"path":"src\\\\app\\\\_components\\\\ui\\\\dropdown.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}':module=>{if(!document.getElementById("id-76eca2")){const fontDeclarations="/* cyrillic-ext */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 200 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-76eca2"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .manrope-normal {\n      font-family: Manrope;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-76eca2"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"manrope-normal",style:{fontFamily:"Manrope",fontStyle:"normal"}}}}]);