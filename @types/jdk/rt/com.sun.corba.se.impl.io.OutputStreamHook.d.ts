declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
                        abstract class OutputStreamHook extends java.io.ObjectOutputStream {
                            protected streamFormatVersion: byte
                            protected writeObjectState: com.sun.corba.se.impl.io.OutputStreamHook$WriteObjectState
                            protected static readonly NOT_IN_WRITE_OBJECT: com.sun.corba.se.impl.io.OutputStreamHook$WriteObjectState
                            protected static readonly IN_WRITE_OBJECT: com.sun.corba.se.impl.io.OutputStreamHook$WriteObjectState
                            protected static readonly WROTE_DEFAULT_DATA: com.sun.corba.se.impl.io.OutputStreamHook$WriteObjectState
                            protected static readonly WROTE_CUSTOM_DATA: com.sun.corba.se.impl.io.OutputStreamHook$WriteObjectState
                            public constructor()
                            public defaultWriteObject(): void
                            public abstract defaultWriteObjectDelegate(): void
                            public putFields(): java.io.ObjectOutputStream$PutField
                            public getStreamFormatVersion(): byte
                            public writeFields(): void
                            protected abstract beginOptionalCustomData(): void
                            protected setState(arg0: com.sun.corba.se.impl.io.OutputStreamHook$WriteObjectState): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}