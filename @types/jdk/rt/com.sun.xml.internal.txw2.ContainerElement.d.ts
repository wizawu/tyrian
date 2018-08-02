declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    class ContainerElement implements java.lang.reflect.InvocationHandler , com.sun.xml.internal.txw2.TypedXmlWriter {
                        public constructor(arg0: com.sun.xml.internal.txw2.Document, arg1: com.sun.xml.internal.txw2.ContainerElement, arg2: java.lang.String | string, arg3: java.lang.String | string)
                        public getDocument(): com.sun.xml.internal.txw2.Document
                        public block(): void
                        public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                        public commit(): void
                        public commit(arg0: boolean): void
                        public _attribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public _attribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                        public _attribute(arg0: javax.xml.namespace.QName, arg1: java.lang.Object): void
                        public _namespace(arg0: java.lang.String | string): void
                        public _namespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public _namespace(arg0: java.lang.String | string, arg1: boolean): void
                        public _pcdata(arg0: java.lang.Object): void
                        public _cdata(arg0: java.lang.Object): void
                        public _comment(arg0: java.lang.Object): void
                        public _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
                        public _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>): T
                        public _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.Class<T>): T
                        public _cast<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.Class<T>): T
                        public _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Class<T>): T
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}