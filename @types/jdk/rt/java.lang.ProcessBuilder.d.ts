declare namespace java {
    namespace lang {
class ProcessBuilder {
    public constructor(arg0: java.util.List<java.lang.String>)
    public constructor(...arg0: java.lang.String[])
    public command(arg0: java.util.List<java.lang.String>): java.lang.ProcessBuilder
    public command(...arg0: java.lang.String[]): java.lang.ProcessBuilder
    public command(): java.util.List<java.lang.String>
    public environment(): java.util.Map<java.lang.String, java.lang.String>
    public directory(): java.io.File
    public directory(arg0: java.io.File): java.lang.ProcessBuilder
    public redirectInput(arg0: java.lang.ProcessBuilder$Redirect): java.lang.ProcessBuilder
    public redirectOutput(arg0: java.lang.ProcessBuilder$Redirect): java.lang.ProcessBuilder
    public redirectError(arg0: java.lang.ProcessBuilder$Redirect): java.lang.ProcessBuilder
    public redirectInput(arg0: java.io.File): java.lang.ProcessBuilder
    public redirectOutput(arg0: java.io.File): java.lang.ProcessBuilder
    public redirectError(arg0: java.io.File): java.lang.ProcessBuilder
    public redirectInput(): java.lang.ProcessBuilder$Redirect
    public redirectOutput(): java.lang.ProcessBuilder$Redirect
    public redirectError(): java.lang.ProcessBuilder$Redirect
    public inheritIO(): java.lang.ProcessBuilder
    public redirectErrorStream(): boolean
    public redirectErrorStream(arg0: boolean): java.lang.ProcessBuilder
    public start(): java.lang.Process
    public static class: java.lang.Class<any>
}

    }
}