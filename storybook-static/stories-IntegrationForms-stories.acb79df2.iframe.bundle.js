"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[228],{"./src/stories/IntegrationForms.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvailableList:()=>AvailableList,EnabledView:()=>EnabledView,ReadyToCreate:()=>ReadyToCreate,ReadyToTest:()=>ReadyToTest,Resting:()=>Resting,RetryAction:()=>RetryAction,RetryActionInfo:()=>RetryActionInfo,TestedSuccessfully:()=>TestedSuccessfully,WarningPrompt:()=>WarningPrompt,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IntegrationForms_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),zod=__webpack_require__("./node_modules/@hookform/resolvers/zod/dist/zod.mjs"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),ui_button=__webpack_require__("./src/app/_components/ui/button.tsx"),lib=__webpack_require__("./node_modules/zod/lib/index.mjs"),target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_=__webpack_require__('./node_modules/next/font/google/target.css?{"path":"src\\\\app\\\\_components\\\\ui\\\\IntegrationForm.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}'),target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default=__webpack_require__.n(target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts"),react_label_dist=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs");const labelVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(react_label_dist.b,{ref,className:(0,utils.cn)(labelVariants(),className),...props})));Label.displayName=react_label_dist.b.displayName,Label.__docgenInfo={description:"",methods:[]};const Form=index_esm.Op,FormFieldContext=react.createContext({}),FormField=({...props})=>(0,jsx_runtime.jsx)(FormFieldContext.Provider,{value:{name:props.name},children:(0,jsx_runtime.jsx)(index_esm.xI,{...props})}),useFormField=()=>{const fieldContext=react.useContext(FormFieldContext),itemContext=react.useContext(FormItemContext),{getFieldState,formState}=(0,index_esm.xW)(),fieldState=getFieldState(fieldContext.name,formState);if(!fieldContext)throw new Error("useFormField should be used within <FormField>");const{id}=itemContext;return{id,name:fieldContext.name,formItemId:`${id}-form-item`,formDescriptionId:`${id}-form-item-description`,formMessageId:`${id}-form-item-message`,...fieldState}},FormItemContext=react.createContext({}),FormItem=react.forwardRef((({className,...props},ref)=>{const id=react.useId();return(0,jsx_runtime.jsx)(FormItemContext.Provider,{value:{id},children:(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)("space-y-2",className),...props})})}));FormItem.displayName="FormItem";const FormLabel=react.forwardRef((({className,...props},ref)=>{const{error,formItemId}=useFormField();return(0,jsx_runtime.jsx)(Label,{ref,className:(0,utils.cn)(error&&"text-destructive",className),htmlFor:formItemId,...props})}));FormLabel.displayName="FormLabel";const FormControl=react.forwardRef((({...props},ref)=>{const{error,formItemId,formDescriptionId,formMessageId}=useFormField();return(0,jsx_runtime.jsx)(dist.DX,{ref,id:formItemId,"aria-describedby":error?`${formDescriptionId} ${formMessageId}`:`${formDescriptionId}`,"aria-invalid":!!error,...props})}));FormControl.displayName="FormControl";const FormDescription=react.forwardRef((({className,...props},ref)=>{const{formDescriptionId}=useFormField();return(0,jsx_runtime.jsx)("p",{ref,id:formDescriptionId,className:(0,utils.cn)("text-sm text-muted-foreground",className),...props})}));FormDescription.displayName="FormDescription";const FormMessage=react.forwardRef((({className,children,...props},ref)=>{const{error,formMessageId}=useFormField(),body=error?String(null==error?void 0:error.message):children;return body?(0,jsx_runtime.jsx)("p",{ref,id:formMessageId,className:(0,utils.cn)("text-sm font-medium text-destructive",className),...props,children:body}):null}));FormMessage.displayName="FormMessage",FormItem.__docgenInfo={description:"",methods:[],displayName:"FormItem"},FormLabel.__docgenInfo={description:"",methods:[],displayName:"FormLabel"},FormControl.__docgenInfo={description:"",methods:[],displayName:"FormControl"},FormDescription.__docgenInfo={description:"",methods:[],displayName:"FormDescription"},FormMessage.__docgenInfo={description:"",methods:[],displayName:"FormMessage"},FormField.__docgenInfo={description:"",methods:[],displayName:"FormField"};var input=__webpack_require__("./src/app/_components/ui/input.tsx"),dropdown=__webpack_require__("./src/app/_components/ui/dropdown.tsx"),s3=__webpack_require__("./src/stories/icons/s3.tsx"),databricks=__webpack_require__("./src/stories/icons/databricks.tsx"),snowflake=__webpack_require__("./src/stories/icons/snowflake.tsx"),text_cursor=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/text-cursor.js"),rocket=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/rocket.js"),refresh_ccw=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/refresh-ccw.js"),info=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/info.js"),user_round=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/user-round.js"),database=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/database.js"),optionalConfigurations=__webpack_require__("./src/app/_components/ui/optionalConfigurations.tsx"),spinner=__webpack_require__("./src/stories/icons/spinner.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");const formSchema=lib.z.object({integrationName:lib.z.string(),integrationType:lib.z.string(),userName:lib.z.string(),dbName:lib.z.string()});function IntegrationForm({formState,log,defaultValues,messages}){const form=(0,index_esm.mN)({resolver:(0,zod.u)(formSchema),defaultValues});const[fieldMessages,setFieldMessages]=(0,react.useState)(messages||{integrationName:{errorMsg:"",infoMsg:"",warningMsg:""},integrationType:{errorMsg:"",infoMsg:"",warningMsg:""},userName:{errorMsg:"",infoMsg:"",warningMsg:""},dbName:{errorMsg:"",infoMsg:"",warningMsg:""}});return(0,react.useEffect)((()=>{messages&&setFieldMessages(messages)}),[messages]),(0,jsx_runtime.jsxs)("div",{className:"space-y-3 rounded-lg",style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},children:[(0,jsx_runtime.jsxs)("div",{className:"space-y-3",children:[(0,jsx_runtime.jsx)("p",{className:"text-xl text-white",children:"Required Details"}),(0,jsx_runtime.jsx)("p",{className:"text-[#A1A1AA] text-muted-foreground",children:"We need these details to get your server setup and connected to your database."})]}),(0,jsx_runtime.jsx)(Form,{...form,children:(0,jsx_runtime.jsxs)("form",{onSubmit:form.handleSubmit((function onSubmit(values){console.log(values)})),className:"space-y-3",children:[(0,jsx_runtime.jsx)(FormField,{control:form.control,name:"integrationType",render:({field})=>(0,jsx_runtime.jsxs)(FormItem,{children:[(0,jsx_runtime.jsx)(FormControl,{children:(0,jsx_runtime.jsx)(dropdown.m,{label:"Integration Types",selected:{label:"Snowflake",icon:snowflake.D},required:!0,items:[{label:"S3",icon:s3.S3},{label:"Databricks",icon:databricks.H},{label:"Snowflake",icon:snowflake.D},{label:"MongoDB",icon:s3.S3}]})}),(0,jsx_runtime.jsx)(FormMessage,{})]})}),(0,jsx_runtime.jsx)(FormField,{control:form.control,name:"integrationName",render:({field})=>(0,jsx_runtime.jsxs)(FormItem,{children:[(0,jsx_runtime.jsx)(FormControl,{children:(0,jsx_runtime.jsx)(input.p,{errorMsg:fieldMessages.integrationName.errorMsg,infoMsg:fieldMessages.integrationName.infoMsg,warningMsg:fieldMessages.integrationName.warningMsg,state:"resting"!==formState?"valid":"resting",required:!0,label:"Name",labelIcon:(0,jsx_runtime.jsx)(text_cursor.A,{width:16,height:16}),placeholder:"Give your integration a name",description:"Give your integration a name",...field,defaultValue:field.value,onChange:e=>{console.log(e.target.value)}})}),(0,jsx_runtime.jsx)(FormMessage,{})]})}),(0,jsx_runtime.jsx)(FormField,{control:form.control,name:"userName",render:({field})=>(0,jsx_runtime.jsxs)(FormItem,{children:[(0,jsx_runtime.jsx)(FormControl,{children:(0,jsx_runtime.jsx)(input.p,{errorMsg:fieldMessages.userName.errorMsg,infoMsg:fieldMessages.userName.infoMsg,warningMsg:fieldMessages.userName.warningMsg,required:!0,label:"User",labelIcon:(0,jsx_runtime.jsx)(user_round.A,{width:16,height:16}),placeholder:"The username to access this instance",description:"Provide Access to specific users, if you have multiple users, seperate them by comma values.",...field,defaultValue:field.value})}),(0,jsx_runtime.jsx)(FormMessage,{})]})}),(0,jsx_runtime.jsx)(FormField,{control:form.control,name:"dbName",render:({field})=>(0,jsx_runtime.jsxs)(FormItem,{children:[(0,jsx_runtime.jsx)(FormControl,{children:(0,jsx_runtime.jsx)(input.p,{errorMsg:fieldMessages.dbName.errorMsg,infoMsg:fieldMessages.dbName.infoMsg,warningMsg:fieldMessages.dbName.warningMsg,state:"resting"!==formState?"valid":"resting",required:!0,label:"Database",labelIcon:(0,jsx_runtime.jsx)(database.A,{width:16,height:16}),placeholder:"give your database a unique name.",description:"The database will store all the integration specific infoormation. ",...field,defaultValue:field.value})}),(0,jsx_runtime.jsx)(FormMessage,{})]})}),(0,jsx_runtime.jsx)(optionalConfigurations.c,{open:!1}),"readyToCreate"===formState&&(0,jsx_runtime.jsx)(ui_button.$,{style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},className:"w-full rounded-none border border-[#064E3B] bg-[#10B981] text-lg font-semibold text-[#022C22] transition-colors duration-200 hover:bg-[#022C22] hover:text-[#10B981]",type:"submit",children:"Create Integration"}),"resting"===formState&&(0,jsx_runtime.jsx)(ui_button.$,{style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},className:"border-buttonOutline text-buttonOutline pointer-events-none w-full rounded-none border bg-transparent text-lg font-semibold",type:"submit",children:"Enter Details"}),"readyToTest"===formState&&(0,jsx_runtime.jsxs)(ui_button.$,{style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},className:"flex w-full items-center justify-center rounded-none bg-[#083344] text-lg font-semibold text-[#06B6D4] transition-colors duration-200 hover:bg-[#06B6D4] hover:text-[#083344]",type:"submit",children:[(0,jsx_runtime.jsx)(rocket.A,{}),"Test Integration"]}),"testedSuccessfully"===formState&&(0,jsx_runtime.jsxs)(ui_button.$,{style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},className:"pointer-events-none flex w-full items-center justify-center rounded-none border-[#06B6D4] bg-[#06B6D4] text-lg font-semibold text-[#083344] text-opacity-80",type:"submit",children:["Test Integration",(0,jsx_runtime.jsx)(spinner.A,{})]}),("retryActionInfo"===formState||"retryAction"===formState)&&(0,jsx_runtime.jsxs)(ui_button.$,{style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},className:"flex w-full items-center justify-center rounded-none border-[#06B6D4] bg-[#450A0A] text-lg font-semibold text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A]",type:"submit",children:["Retry",(0,jsx_runtime.jsx)(refresh_ccw.A,{})]}),"warningPrompt"===formState&&(0,jsx_runtime.jsxs)(ui_button.$,{style:{fontFamily:target_path_src_app_components_ui_IntegrationForm_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default().style.fontFamily},className:"pointer-events-none flex w-full items-center justify-center rounded-none border-[#431407] bg-[#431407] text-lg font-semibold text-[#F97316]",type:"submit",children:[(0,jsx_runtime.jsx)(info.A,{}),"Please fix the error to proceed"]})]})}),log&&(0,jsx_runtime.jsxs)("div",{className:"space-y-4 rounded border border-[#EF4444] bg-[#450A0A] p-6 pr-8 text-[#EF4444]",children:[(0,jsx_runtime.jsx)("h3",{className:"font-semibold",children:"Error Title"}),(0,jsx_runtime.jsx)("p",{className:"text-sm",children:log})]})]})}IntegrationForm.__docgenInfo={description:"",methods:[],displayName:"IntegrationForm",props:{formState:{required:!0,tsType:{name:"union",raw:'| "resting"\r\n| "readyToTest"\r\n| "testedSuccessfully"\r\n| "readyToCreate"\r\n| "enabledView"\r\n| "availableList"\r\n| "retryActionInfo"\r\n| "retryAction"\r\n| "warningPrompt"',elements:[{name:"literal",value:'"resting"'},{name:"literal",value:'"readyToTest"'},{name:"literal",value:'"testedSuccessfully"'},{name:"literal",value:'"readyToCreate"'},{name:"literal",value:'"enabledView"'},{name:"literal",value:'"availableList"'},{name:"literal",value:'"retryActionInfo"'},{name:"literal",value:'"retryAction"'},{name:"literal",value:'"warningPrompt"'}]},description:""},log:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultValues:{required:!1,tsType:{name:"z.infer",elements:[{name:"formSchema"}],raw:"z.infer<typeof formSchema>"},description:""},messages:{required:!1,tsType:{name:"InputMessages"},description:""}}};const IntegrationForms_stories={title:"Components/IntegrationForm",component:IntegrationForm,tags:["autodocs"],parameters:{docs:{description:{component:"A reusable Form component."}}}},defaultMessages={integrationName:{errorMsg:"",infoMsg:"",warningMsg:""},integrationType:{errorMsg:"",infoMsg:"",warningMsg:""},userName:{errorMsg:"",infoMsg:"",warningMsg:""},dbName:{errorMsg:"",infoMsg:"",warningMsg:""}},Resting={args:{formState:"resting",defaultValues:{integrationName:"",integrationType:"",userName:"",dbName:""}}},ReadyToTest={args:{...Resting.args,defaultValues:{integrationName:"Drink-Sink",integrationType:"",userName:"nirmal@chakra.ai",dbName:"TRANSACTIONS_DB"},formState:"readyToTest"}},TestedSuccessfully={args:{...ReadyToTest.args,formState:"testedSuccessfully"}},ReadyToCreate={args:{...ReadyToTest.args,formState:"readyToCreate"}},EnabledView={args:{...ReadyToTest.args,formState:"enabledView"}},AvailableList={args:{...ReadyToTest.args,formState:"availableList"}},RetryActionInfo={args:{...ReadyToTest.args,formState:"retryActionInfo",log:"SubDescription that could give more info or ask them to reach out."}},RetryAction={args:{...ReadyToTest.args,formState:"retryAction"}},WarningPrompt={args:{...ReadyToTest.args,formState:"warningPrompt",messages:{...defaultMessages,userName:{...defaultMessages.userName,warningMsg:"This looks like a personal email. Please use a Organization email."}}}},__namedExportsOrder=["Resting","ReadyToTest","TestedSuccessfully","ReadyToCreate","EnabledView","AvailableList","RetryActionInfo","RetryAction","WarningPrompt"];Resting.parameters={...Resting.parameters,docs:{...Resting.parameters?.docs,source:{originalSource:'{\n  args: {\n    formState: "resting",\n    defaultValues: {\n      integrationName: "",\n      integrationType: "",\n      userName: "",\n      dbName: ""\n    }\n  }\n}',...Resting.parameters?.docs?.source}}},ReadyToTest.parameters={...ReadyToTest.parameters,docs:{...ReadyToTest.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Resting.args,\n    defaultValues: {\n      integrationName: "Drink-Sink",\n      integrationType: "",\n      userName: "nirmal@chakra.ai",\n      dbName: "TRANSACTIONS_DB"\n    },\n    formState: "readyToTest"\n  }\n}',...ReadyToTest.parameters?.docs?.source}}},TestedSuccessfully.parameters={...TestedSuccessfully.parameters,docs:{...TestedSuccessfully.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "testedSuccessfully"\n  }\n}',...TestedSuccessfully.parameters?.docs?.source}}},ReadyToCreate.parameters={...ReadyToCreate.parameters,docs:{...ReadyToCreate.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "readyToCreate"\n  }\n}',...ReadyToCreate.parameters?.docs?.source}}},EnabledView.parameters={...EnabledView.parameters,docs:{...EnabledView.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "enabledView"\n  }\n}',...EnabledView.parameters?.docs?.source}}},AvailableList.parameters={...AvailableList.parameters,docs:{...AvailableList.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "availableList"\n  }\n}',...AvailableList.parameters?.docs?.source}}},RetryActionInfo.parameters={...RetryActionInfo.parameters,docs:{...RetryActionInfo.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "retryActionInfo",\n    log: "SubDescription that could give more info or ask them to reach out."\n  }\n}',...RetryActionInfo.parameters?.docs?.source}}},RetryAction.parameters={...RetryAction.parameters,docs:{...RetryAction.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "retryAction"\n  }\n}',...RetryAction.parameters?.docs?.source}}},WarningPrompt.parameters={...WarningPrompt.parameters,docs:{...WarningPrompt.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ReadyToTest.args,\n    formState: "warningPrompt",\n    messages: {\n      ...defaultMessages,\n      userName: {\n        ...defaultMessages.userName,\n        warningMsg: "This looks like a personal email. Please use a Organization email."\n      }\n    }\n  }\n}',...WarningPrompt.parameters?.docs?.source}}}},"./src/stories/icons/spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SpinningSVG=({className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`animate-spin ${className}`,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{clipPath:"url(#clip0_3114_30318)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723",stroke:"#083344",strokeWidth:"1.75",strokeLinecap:"round"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{clipPath:"url(#clip1_3114_30318)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723",stroke:"#083344",strokeWidth:"1.75",strokeLinecap:"round"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{clipPath:"url(#clip2_3114_30318)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723",stroke:"#083344",strokeWidth:"1.75",strokeLinecap:"round"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{clipPath:"url(#clip3_3114_30318)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723",stroke:"#083344",strokeWidth:"1.75",strokeLinecap:"round"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{clipPath:"url(#clip4_3114_30318)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723",stroke:"#083344",strokeWidth:"1.75",strokeLinecap:"round"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip0_3114_30318",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"18.6667",height:"18.6667",fill:"white",transform:"translate(4.66675 4.6665)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip1_3114_30318",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"18.6667",height:"18.6667",fill:"white",transform:"translate(4.66675 4.6665)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip2_3114_30318",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"18.6667",height:"18.6667",fill:"white",transform:"translate(4.66675 4.6665)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip3_3114_30318",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"18.6667",height:"18.6667",fill:"white",transform:"translate(4.66675 4.6665)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip4_3114_30318",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"18.6667",height:"18.6667",fill:"white",transform:"translate(4.66675 4.6665)"})})]})]}),__WEBPACK_DEFAULT_EXPORT__=SpinningSVG;SpinningSVG.__docgenInfo={description:"",methods:[],displayName:"SpinningSVG"}}}]);