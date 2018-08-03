declare namespace sun {
    namespace rmi {
        namespace server {
            class MarshalOutputStream extends java.io.ObjectOutputStream {
                public constructor(arg0: java.io.OutputStream)
                public constructor(arg0: java.io.OutputStream, arg1: int)
                protected replaceObject(arg0: java.lang.Object): java.lang.Object
                protected annotateClass(arg0: java.lang.Class<any>): void
                protected annotateProxyClass(arg0: java.lang.Class<any>): void
                protected writeLocation(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}