declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            class QName implements java.lang.Cloneable {
                                public prefix: string
                                public localpart: string
                                public rawname: string
                                public uri: string
                                public constructor()
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.xni.QName)
                                public setValues(arg0: com.sun.org.apache.xerces.internal.xni.QName): void
                                public setValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public clear(): void
                                public clone(): java.lang.Object
                                public hashCode(): int
                                public equals(arg0: java.lang.Object): boolean
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}