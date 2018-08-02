declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
interface MessageHeaders {
    understood(arg0: com.sun.xml.internal.ws.api.message.Header): void
    understood(arg0: javax.xml.namespace.QName): void
    understood(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    get(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): com.sun.xml.internal.ws.api.message.Header
    get(arg0: javax.xml.namespace.QName, arg1: boolean): com.sun.xml.internal.ws.api.message.Header
    getHeaders(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
    getHeaders(arg0: java.lang.String | string, arg1: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
    getHeaders(arg0: javax.xml.namespace.QName, arg1: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
    getHeaders(): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
    hasHeaders(): boolean
    add(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
    remove(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Header
    remove(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.message.Header
    replace(arg0: com.sun.xml.internal.ws.api.message.Header, arg1: com.sun.xml.internal.ws.api.message.Header): void
    addOrReplace(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
    getUnderstoodHeaders(): java.util.Set<javax.xml.namespace.QName>
    getNotUnderstoodHeaders(arg0: java.util.Set<java.lang.String>, arg1: java.util.Set<javax.xml.namespace.QName>, arg2: com.sun.xml.internal.ws.api.WSBinding): java.util.Set<javax.xml.namespace.QName>
    isUnderstood(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
    isUnderstood(arg0: javax.xml.namespace.QName): boolean
    isUnderstood(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    asList(): java.util.List<com.sun.xml.internal.ws.api.message.Header>
}

                        }
                    }
                }
            }
        }
    }
}