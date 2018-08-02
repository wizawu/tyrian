declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            abstract class FilterTransducer<T> implements com.sun.xml.internal.bind.v2.runtime.Transducer<T> {
                                protected core: com.sun.xml.internal.bind.v2.runtime.Transducer<T>
                                protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.Transducer<T>)
                                public isDefault(): boolean
                                public useNamespace(): boolean
                                public declareNamespace(arg0: T, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public print(arg0: T): java.lang.CharSequence
                                public parse(arg0: java.lang.CharSequence): T
                                public writeText(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: T, arg2: java.lang.String | string): void
                                public writeLeafElement(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: T, arg3: java.lang.String | string): void
                                public getTypeName(arg0: T): javax.xml.namespace.QName
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}