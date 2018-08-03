declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
                        abstract class InputStreamHook extends java.io.ObjectInputStream {
                            protected readObjectState: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly DEFAULT_STATE: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly IN_READ_OBJECT_OPT_DATA: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly IN_READ_OBJECT_NO_MORE_OPT_DATA: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly IN_READ_OBJECT_DEFAULTS_SENT: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly NO_READ_OBJECT_DEFAULTS_SENT: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly IN_READ_OBJECT_REMOTE_NOT_CUSTOM_MARSHALED: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            protected static readonly IN_READ_OBJECT_PAST_DEFAULTS_REMOTE_NOT_CUSTOM: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState
                            public constructor()
                            public defaultReadObject(): void
                            public readFields(): java.io.ObjectInputStream$GetField
                            protected setState(arg0: com.sun.corba.se.impl.io.InputStreamHook$ReadObjectState): void
                            protected abstract getStreamFormatVersion(): byte
                            protected throwOptionalDataIncompatibleException(): void
                            public static class: java.lang.Class<any>
                        }
                        interface InputStreamHook$$Lambda extends java.io.ObjectInputStream {
                            (): byte
                        }
                    }
                }
            }
        }
    }
}