declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
class CheckedExceptionImpl implements com.sun.xml.internal.ws.api.model.CheckedException {
    public constructor(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: java.lang.Class, arg2: com.sun.xml.internal.ws.spi.db.TypeInfo, arg3: com.sun.xml.internal.ws.api.model.ExceptionType)
    public getOwner(): com.sun.xml.internal.ws.model.AbstractSEIModelImpl
    public getParent(): com.sun.xml.internal.ws.api.model.JavaMethod
    public getExceptionClass(): java.lang.Class
    public getDetailBean(): java.lang.Class
    public getBridge(): com.sun.xml.internal.bind.api.Bridge
    public getBond(): com.sun.xml.internal.ws.spi.db.XMLBridge
    public getDetailType(): com.sun.xml.internal.ws.spi.db.TypeInfo
    public getExceptionType(): com.sun.xml.internal.ws.api.model.ExceptionType
    public getMessageName(): string
    public setMessageName(arg0: java.lang.String | string): void
    public getFaultAction(): string
    public setFaultAction(arg0: java.lang.String | string): void
    public getDefaultFaultAction(): string
    public getOwner(): com.sun.xml.internal.ws.api.model.SEIModel
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}