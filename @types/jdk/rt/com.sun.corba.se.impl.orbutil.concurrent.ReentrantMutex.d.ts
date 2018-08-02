declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace concurrent {
class ReentrantMutex implements com.sun.corba.se.impl.orbutil.concurrent.Sync {
    protected holder_: java.lang.Thread
    protected counter_: int
    protected debug: boolean
    public constructor()
    public constructor(arg0: boolean)
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