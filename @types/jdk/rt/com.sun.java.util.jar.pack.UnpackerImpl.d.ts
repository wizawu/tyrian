declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class UnpackerImpl extends com.sun.java.util.jar.pack.TLGlobals implements java.util.jar.Pack200$Unpacker {
                            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
                            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
                            public constructor()
                            public properties(): java.util.SortedMap<java.lang.String, java.lang.String>
                            public toString(): string
                            public unpack(arg0: java.io.InputStream, arg1: java.util.jar.JarOutputStream): void
                            public unpack(arg0: java.io.File, arg1: java.util.jar.JarOutputStream): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}