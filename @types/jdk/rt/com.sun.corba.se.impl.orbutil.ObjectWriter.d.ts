declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        abstract class ObjectWriter {
                            protected result: java.lang.StringBuffer
                            public static make(arg0: boolean, arg1: int, arg2: int): com.sun.corba.se.impl.orbutil.ObjectWriter
                            public abstract startObject(arg0: java.lang.Object): void
                            public abstract startElement(): void
                            public abstract endElement(): void
                            public abstract endObject(arg0: java.lang.String | string): void
                            public abstract endObject(): void
                            public toString(): string
                            public append(arg0: boolean): void
                            public append(arg0: char): void
                            public append(arg0: short): void
                            public append(arg0: int): void
                            public append(arg0: long): void
                            public append(arg0: float): void
                            public append(arg0: double): void
                            public append(arg0: java.lang.String | string): void
                            protected constructor()
                            protected appendObjectHeader(arg0: java.lang.Object): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}