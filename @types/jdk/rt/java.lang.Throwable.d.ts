declare namespace java {
    namespace lang {
class Throwable implements java.io.Serializable {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
    public constructor(arg0: java.lang.Throwable)
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: boolean, arg3: boolean)
    public fillInStackTrace(): java.lang.Throwable
    public getMessage(): string
    public getLocalizedMessage(): string
    public getStackTrace(): java.lang.StackTraceElement[]
    public setStackTrace(arg0: java.lang.StackTraceElement[]): void
    public printStackTrace(): void
    public printStackTrace(arg0: java.io.PrintStream): void
    public printStackTrace(arg0: java.io.PrintWriter): void
    public toString(): string
    public initCause(arg0: java.lang.Throwable): java.lang.Throwable
    public getCause(): java.lang.Throwable
    public addSuppressed(arg0: java.lang.Throwable): void
    public getSuppressed(): java.lang.Throwable[]
    public static class: java.lang.Class<any>
}

    }
}