declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            abstract class TubeCloner {
                                public readonly master2copy: java.util.Map<java.lang.Object, java.lang.Object>
                                public static clone(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public abstract copy<T extends com.sun.xml.internal.ws.api.pipe.Tube>(arg0: T): T
                                public abstract add<T extends com.sun.xml.internal.ws.api.pipe.Tube>(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.pipe.Tube): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}