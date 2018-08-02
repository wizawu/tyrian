declare namespace java {
    namespace util {
        namespace jar {
            interface Pack200$Unpacker {
                KEEP: string
                TRUE: string
                FALSE: string
                DEFLATE_HINT: string
                PROGRESS: string
                properties(): java.util.SortedMap<java.lang.String, java.lang.String>
                unpack(arg0: java.io.InputStream, arg1: java.util.jar.JarOutputStream): void
                unpack(arg0: java.io.File, arg1: java.util.jar.JarOutputStream): void
                addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            }
        }
    }
}