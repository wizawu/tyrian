declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            abstract class TubelineAssemblerFactory {
                                public constructor()
                                public abstract doCreate(arg0: com.sun.xml.internal.ws.api.BindingID): com.sun.xml.internal.ws.api.pipe.TubelineAssembler
                                public static create(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.api.BindingID): com.sun.xml.internal.ws.api.pipe.TubelineAssembler
                                public static create(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.api.BindingID, arg2: com.sun.xml.internal.ws.api.server.Container): com.sun.xml.internal.ws.api.pipe.TubelineAssembler
                                public static class: java.lang.Class<any>
                            }
                            interface TubelineAssemblerFactory$$Lambda {
                                (arg0: com.sun.xml.internal.ws.api.BindingID): com.sun.xml.internal.ws.api.pipe.TubelineAssembler
                            }
                        }
                    }
                }
            }
        }
    }
}