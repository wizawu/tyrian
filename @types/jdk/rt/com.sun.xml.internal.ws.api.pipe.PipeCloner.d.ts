declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            abstract class PipeCloner extends com.sun.xml.internal.ws.api.pipe.TubeCloner {
                                public static clone(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
                                public abstract copy<T extends com.sun.xml.internal.ws.api.pipe.Pipe>(arg0: T): T
                                public abstract add<T extends com.sun.xml.internal.ws.api.pipe.Pipe>(arg0: com.sun.xml.internal.ws.api.pipe.Pipe, arg1: com.sun.xml.internal.ws.api.pipe.Pipe): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}