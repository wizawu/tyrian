declare namespace com {
    namespace ibm {
        namespace oti {
            namespace vm {
abstract class AbstractClassLoader extends java.lang.ClassLoader {
    public constructor()
    public constructor(arg0: java.lang.ClassLoader)
    public static setBootstrapClassLoader(arg0: java.lang.ClassLoader): void
    protected findResource(arg0: java.lang.String | string): java.net.URL
    protected findResources(arg0: java.lang.String | string): java.util.Enumeration
    public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
    public static class: java.lang.Class<any>
}

            }
        }
    }
}