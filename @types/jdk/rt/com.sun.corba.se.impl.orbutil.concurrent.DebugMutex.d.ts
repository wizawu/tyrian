declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace concurrent {
class DebugMutex implements com.sun.corba.se.impl.orbutil.concurrent.Sync {
    protected inuse_: boolean
    protected holder_: java.lang.Thread
    public constructor()
    public acquire(): void
    public release(): void
    public attempt(arg0: long): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}