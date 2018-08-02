declare namespace javax {
    namespace xml {
        namespace bind {
class JAXB {
    public static unmarshal<T>(arg0: java.io.File, arg1: java.lang.Class<T>): T
    public static unmarshal<T>(arg0: java.net.URL, arg1: java.lang.Class<T>): T
    public static unmarshal<T>(arg0: java.net.URI, arg1: java.lang.Class<T>): T
    public static unmarshal<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
    public static unmarshal<T>(arg0: java.io.InputStream, arg1: java.lang.Class<T>): T
    public static unmarshal<T>(arg0: java.io.Reader, arg1: java.lang.Class<T>): T
    public static unmarshal<T>(arg0: javax.xml.transform.Source, arg1: java.lang.Class<T>): T
    public static marshal(arg0: java.lang.Object, arg1: java.io.File): void
    public static marshal(arg0: java.lang.Object, arg1: java.net.URL): void
    public static marshal(arg0: java.lang.Object, arg1: java.net.URI): void
    public static marshal(arg0: java.lang.Object, arg1: java.lang.String | string): void
    public static marshal(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public static marshal(arg0: java.lang.Object, arg1: java.io.Writer | java.io.Writer$$Lambda): void
    public static marshal(arg0: java.lang.Object, arg1: javax.xml.transform.Result): void
    public static class: java.lang.Class<any>
}

        }
    }
}