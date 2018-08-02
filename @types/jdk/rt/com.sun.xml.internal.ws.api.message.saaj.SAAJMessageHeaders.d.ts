declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            namespace saaj {
                                class SAAJMessageHeaders implements com.sun.xml.internal.ws.api.message.MessageHeaders {
                                    public constructor(arg0: javax.xml.soap.SOAPMessage, arg1: com.sun.xml.internal.ws.api.SOAPVersion)
                                    public understood(arg0: com.sun.xml.internal.ws.api.message.Header): void
                                    public understood(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public understood(arg0: javax.xml.namespace.QName): void
                                    public isUnderstood(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
                                    public isUnderstood(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                    public isUnderstood(arg0: javax.xml.namespace.QName): boolean
                                    public isUnderstood(arg0: int): boolean
                                    public get(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): com.sun.xml.internal.ws.api.message.Header
                                    public get(arg0: javax.xml.namespace.QName, arg1: boolean): com.sun.xml.internal.ws.api.message.Header
                                    public getHeaders(arg0: javax.xml.namespace.QName, arg1: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                    public getHeaders(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                    public getHeaders(arg0: java.lang.String | string, arg1: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                    public add(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
                                    public remove(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Header
                                    public remove(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.message.Header
                                    public addOrReplace(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
                                    public replace(arg0: com.sun.xml.internal.ws.api.message.Header, arg1: com.sun.xml.internal.ws.api.message.Header): void
                                    public getUnderstoodHeaders(): java.util.Set<javax.xml.namespace.QName>
                                    public getNotUnderstoodHeaders(arg0: java.util.Set<java.lang.String>, arg1: java.util.Set<javax.xml.namespace.QName>, arg2: com.sun.xml.internal.ws.api.WSBinding): java.util.Set<javax.xml.namespace.QName>
                                    public getHeaders(): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                    public hasHeaders(): boolean
                                    public asList(): java.util.List<com.sun.xml.internal.ws.api.message.Header>
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}