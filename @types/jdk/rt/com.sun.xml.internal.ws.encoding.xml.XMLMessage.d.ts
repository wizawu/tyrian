declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace xml {
                            class XMLMessage {
                                public constructor()
                                public static create(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.message.Message
                                public static create(arg0: javax.xml.transform.Source): com.sun.xml.internal.ws.api.message.Message
                                public static create(arg0: javax.activation.DataSource, arg1: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.message.Message
                                public static create(arg0: java.lang.Exception): com.sun.xml.internal.ws.api.message.Message
                                public static isFastInfoset(arg0: java.lang.String | string): boolean
                                public static identifyContentType(arg0: com.sun.xml.internal.ws.encoding.ContentType): int
                                protected static isXMLType(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                protected static isXMLType(arg0: java.lang.String | string): boolean
                                protected static isFastInfosetType(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                protected static isFastInfosetType(arg0: java.lang.String | string): boolean
                                public static getDataSource(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: com.sun.xml.internal.ws.api.WSFeatureList): javax.activation.DataSource
                                public static createDataSource(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): javax.activation.DataSource
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}