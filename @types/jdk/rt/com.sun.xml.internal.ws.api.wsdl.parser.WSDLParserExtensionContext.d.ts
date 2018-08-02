declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace wsdl {
                            namespace parser {
interface WSDLParserExtensionContext {
    isClientSide(): boolean
    getWSDLModel(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel
    getContainer(): com.sun.xml.internal.ws.api.server.Container
    getPolicyResolver(): com.sun.xml.internal.ws.api.policy.PolicyResolver
}

                            }
                        }
                    }
                }
            }
        }
    }
}