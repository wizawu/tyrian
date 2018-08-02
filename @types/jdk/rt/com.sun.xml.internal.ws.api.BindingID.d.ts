declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
abstract class BindingID {
    public static X_SOAP12_HTTP: com.sun.xml.internal.ws.api.BindingID$SOAPHTTPImpl
    public static SOAP12_HTTP: com.sun.xml.internal.ws.api.BindingID$SOAPHTTPImpl
    public static SOAP11_HTTP: com.sun.xml.internal.ws.api.BindingID$SOAPHTTPImpl
    public static SOAP12_HTTP_MTOM: com.sun.xml.internal.ws.api.BindingID$SOAPHTTPImpl
    public static SOAP11_HTTP_MTOM: com.sun.xml.internal.ws.api.BindingID$SOAPHTTPImpl
    public static XML_HTTP: com.sun.xml.internal.ws.api.BindingID
    public constructor()
    public createBinding(): com.sun.xml.internal.ws.api.WSBinding
    public getTransport(): string
    public createBinding(...arg0: javax.xml.ws.WebServiceFeature[]): com.sun.xml.internal.ws.api.WSBinding
    public createBinding(arg0: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.WSBinding
    public getSOAPVersion(): com.sun.xml.internal.ws.api.SOAPVersion
    public createEncoder(arg0: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.pipe.Codec
    public toString(): string
    public createBuiltinFeatureList(): com.sun.xml.internal.ws.binding.WebServiceFeatureList
    public canGenerateWSDL(): boolean
    public getParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static parse(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.BindingID
    public static parse(arg0: java.lang.Class<any>): com.sun.xml.internal.ws.api.BindingID
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}