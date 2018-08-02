declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        interface CodingMethod {
                            readArrayFrom(arg0: java.io.InputStream, arg1: int[], arg2: int, arg3: int): void
                            writeArrayTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int[], arg2: int, arg3: int): void
                            getMetaCoding(arg0: com.sun.java.util.jar.pack.Coding | com.sun.java.util.jar.pack.Coding$$Lambda): byte[]
                        }
                    }
                }
            }
        }
    }
}