declare namespace java {
    namespace lang {
        abstract class Process {
            public constructor()
            public abstract getOutputStream(): java.io.OutputStream
            public abstract getInputStream(): java.io.InputStream
            public abstract getErrorStream(): java.io.InputStream
            public abstract waitFor(): int
            public waitFor(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
            public abstract exitValue(): int
            public abstract destroy(): void
            public destroyForcibly(): java.lang.Process
            public isAlive(): boolean
            public static class: java.lang.Class<any>
        }
    }
}