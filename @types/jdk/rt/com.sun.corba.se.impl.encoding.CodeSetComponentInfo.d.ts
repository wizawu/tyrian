declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CodeSetComponentInfo {
                            public static readonly JAVASOFT_DEFAULT_CODESETS: com.sun.corba.se.impl.encoding.CodeSetComponentInfo
                            public static readonly LOCAL_CODE_SETS: com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetContext
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public toString(): string
                            public constructor()
                            public constructor(arg0: com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetComponent, arg1: com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetComponent)
                            public read(arg0: com.sun.corba.se.impl.encoding.MarshalInputStream): void
                            public write(arg0: com.sun.corba.se.impl.encoding.MarshalOutputStream): void
                            public getCharComponent(): com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetComponent
                            public getWCharComponent(): com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetComponent
                            public static createFromString(arg0: java.lang.String | string): com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetComponent
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}