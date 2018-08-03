declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                abstract class Invoker {
                    public constructor()
                    public abstract inject(arg0: javax.xml.ws.WebServiceContext): void
                    public abstract invoke(arg0: java.lang.reflect.Method, ...arg1: java.lang.Object[]): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}