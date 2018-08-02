declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        class ParameterImpl implements com.sun.xml.internal.ws.api.model.Parameter {
                            public constructor(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: com.sun.xml.internal.ws.spi.db.TypeInfo, arg2: javax.jws.WebParam$Mode, arg3: int)
                            public getOwner(): com.sun.xml.internal.ws.model.AbstractSEIModelImpl
                            public getParent(): com.sun.xml.internal.ws.api.model.JavaMethod
                            public getName(): javax.xml.namespace.QName
                            public getXMLBridge(): com.sun.xml.internal.ws.spi.db.XMLBridge
                            public getInlinedRepeatedElementBridge(): com.sun.xml.internal.ws.spi.db.XMLBridge
                            public getItemType(): com.sun.xml.internal.ws.spi.db.TypeInfo
                            public getBridge(): com.sun.xml.internal.bind.api.Bridge
                            protected getBridge(arg0: com.sun.xml.internal.bind.api.TypeReference): com.sun.xml.internal.bind.api.Bridge
                            public getTypeReference(): com.sun.xml.internal.bind.api.TypeReference
                            public getTypeInfo(): com.sun.xml.internal.ws.spi.db.TypeInfo
                            public getMode(): javax.jws.WebParam$Mode
                            public getIndex(): int
                            public isWrapperStyle(): boolean
                            public isReturnValue(): boolean
                            public getBinding(): com.sun.xml.internal.ws.api.model.ParameterBinding
                            public setBinding(arg0: com.sun.xml.internal.ws.api.model.ParameterBinding): void
                            public setInBinding(arg0: com.sun.xml.internal.ws.api.model.ParameterBinding): void
                            public setOutBinding(arg0: com.sun.xml.internal.ws.api.model.ParameterBinding): void
                            public getInBinding(): com.sun.xml.internal.ws.api.model.ParameterBinding
                            public getOutBinding(): com.sun.xml.internal.ws.api.model.ParameterBinding
                            public isIN(): boolean
                            public isOUT(): boolean
                            public isINOUT(): boolean
                            public isResponse(): boolean
                            public getHolderValue(arg0: java.lang.Object): java.lang.Object
                            public getPartName(): string
                            public setPartName(arg0: java.lang.String | string): void
                            public getOwner(): com.sun.xml.internal.ws.api.model.SEIModel
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}