declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class AttributeImpl extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.Attribute {
                            public constructor()
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: boolean)
                            public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean)
                            public toString(): string
                            public setName(arg0: javax.xml.namespace.QName): void
                            public getName(): javax.xml.namespace.QName
                            public setValue(arg0: java.lang.String | string): void
                            public getValue(): string
                            public setNonNormalizedValue(arg0: java.lang.String | string): void
                            public getNonNormalizedValue(): string
                            public setAttributeType(arg0: java.lang.String | string): void
                            public getDTDType(): string
                            public setSpecified(arg0: boolean): void
                            public isSpecified(): boolean
                            protected writeAsEncodedUnicodeEx(arg0: java.io.Writer): void
                            protected init(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}