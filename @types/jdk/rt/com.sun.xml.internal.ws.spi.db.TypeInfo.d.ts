declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            class TypeInfo {
                                public tagName: javax.xml.namespace.QName
                                public type: java.lang.reflect.Type
                                public annotations: java.lang.annotation.Annotation[]
                                public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, ...arg2: java.lang.annotation.Annotation[])
                                public get<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
                                public toItemType<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.ws.spi.db.TypeInfo
                                public properties<A extends java.lang.annotation.Annotation>(): java.util.Map<java.lang.String, java.lang.Object>
                                public isGlobalElement<A extends java.lang.annotation.Annotation>(): boolean
                                public setGlobalElement<A extends java.lang.annotation.Annotation>(arg0: boolean): void
                                public getParentCollectionType<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.ws.spi.db.TypeInfo
                                public setParentCollectionType<A extends java.lang.annotation.Annotation>(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): void
                                public isRepeatedElement<A extends java.lang.annotation.Annotation>(): boolean
                                public getGenericType<A extends java.lang.annotation.Annotation>(): java.lang.reflect.Type
                                public setGenericType<A extends java.lang.annotation.Annotation>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): void
                                public isNillable<A extends java.lang.annotation.Annotation>(): boolean
                                public setNillable<A extends java.lang.annotation.Annotation>(arg0: boolean): void
                                public toString<A extends java.lang.annotation.Annotation>(): string
                                public getItemType<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.ws.spi.db.TypeInfo
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}