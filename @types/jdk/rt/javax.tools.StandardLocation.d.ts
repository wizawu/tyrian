declare namespace javax {
    namespace tools {
class StandardLocation extends java.lang.Enum<javax.tools.StandardLocation> implements javax.tools.JavaFileManager$Location {
    public static CLASS_OUTPUT: javax.tools.StandardLocation
    public static SOURCE_OUTPUT: javax.tools.StandardLocation
    public static CLASS_PATH: javax.tools.StandardLocation
    public static SOURCE_PATH: javax.tools.StandardLocation
    public static ANNOTATION_PROCESSOR_PATH: javax.tools.StandardLocation
    public static PLATFORM_CLASS_PATH: javax.tools.StandardLocation
    public static NATIVE_HEADER_OUTPUT: javax.tools.StandardLocation
    public static values(): javax.tools.StandardLocation[]
    public static valueOf(arg0: java.lang.String | string): javax.tools.StandardLocation
    public static locationFor(arg0: java.lang.String | string): javax.tools.JavaFileManager$Location
    public getName(): string
    public isOutputLocation(): boolean
    public static class: java.lang.Class<any>
}

    }
}