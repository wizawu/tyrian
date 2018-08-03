declare namespace java {
    namespace util {
        namespace jar {
            interface Pack200$Packer {
                SEGMENT_LIMIT: string
                KEEP_FILE_ORDER: string
                EFFORT: string
                DEFLATE_HINT: string
                MODIFICATION_TIME: string
                PASS_FILE_PFX: string
                UNKNOWN_ATTRIBUTE: string
                CLASS_ATTRIBUTE_PFX: string
                FIELD_ATTRIBUTE_PFX: string
                METHOD_ATTRIBUTE_PFX: string
                CODE_ATTRIBUTE_PFX: string
                PROGRESS: string
                KEEP: string
                PASS: string
                STRIP: string
                ERROR: string
                TRUE: string
                FALSE: string
                LATEST: string
                properties(): java.util.SortedMap<java.lang.String, java.lang.String>
                pack(arg0: java.util.jar.JarFile, arg1: java.io.OutputStream): void
                pack(arg0: java.util.jar.JarInputStream, arg1: java.io.OutputStream): void
                addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
                removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            }
        }
    }
}