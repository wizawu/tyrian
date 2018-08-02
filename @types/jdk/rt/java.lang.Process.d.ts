declare namespace java {
    namespace lang {
abstract class Process {
    public constructor()
    public getOutputStream(): java.io.OutputStream
    public getInputStream(): java.io.InputStream
    public getErrorStream(): java.io.InputStream
    public waitFor(): int
    public waitFor(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
    public exitValue(): int
    public destroy(): void
    public destroyForcibly(): java.lang.Process
    public isAlive(): boolean
    public static class: java.lang.Class<any>
}

    }
}