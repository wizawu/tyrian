declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
interface Parameter {
    getOwner(): com.sun.xml.internal.ws.api.model.SEIModel
    getParent(): com.sun.xml.internal.ws.api.model.JavaMethod
    getName(): javax.xml.namespace.QName
    getBridge(): com.sun.xml.internal.bind.api.Bridge
    getMode(): javax.jws.WebParam$Mode
    getIndex(): int
    isWrapperStyle(): boolean
    isReturnValue(): boolean
    getBinding(): com.sun.xml.internal.ws.api.model.ParameterBinding
    getInBinding(): com.sun.xml.internal.ws.api.model.ParameterBinding
    getOutBinding(): com.sun.xml.internal.ws.api.model.ParameterBinding
    isIN(): boolean
    isOUT(): boolean
    isINOUT(): boolean
    isResponse(): boolean
    getHolderValue(arg0: java.lang.Object): java.lang.Object
    getPartName(): string
}

                        }
                    }
                }
            }
        }
    }
}