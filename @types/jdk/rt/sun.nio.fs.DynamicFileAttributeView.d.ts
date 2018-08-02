declare namespace sun {
    namespace nio {
        namespace fs {
            interface DynamicFileAttributeView {
                setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                readAttributes(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.lang.Object>
            }
        }
    }
}