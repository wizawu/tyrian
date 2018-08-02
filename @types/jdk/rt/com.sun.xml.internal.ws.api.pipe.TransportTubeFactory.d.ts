declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
abstract class TransportTubeFactory {
    public constructor()
    public doCreate(arg0: com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext): com.sun.xml.internal.ws.api.pipe.Tube
    public static create(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext): com.sun.xml.internal.ws.api.pipe.Tube
    protected createDefault(arg0: com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext): com.sun.xml.internal.ws.api.pipe.Tube
    protected createHttpTransport(arg0: com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext): com.sun.xml.internal.ws.api.pipe.Tube
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}