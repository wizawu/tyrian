declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace concurrent {
class CondVar {
    protected debug_: boolean
    protected mutex_: com.sun.corba.se.impl.orbutil.concurrent.Sync
    protected remutex_: com.sun.corba.se.impl.orbutil.concurrent.ReentrantMutex
    public constructor(arg0: com.sun.corba.se.impl.orbutil.concurrent.Sync, arg1: boolean)
    public constructor(arg0: com.sun.corba.se.impl.orbutil.concurrent.Sync)
    public await(): void
    public timedwait(arg0: long): boolean
    public signal(): void
    public broadcast(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}