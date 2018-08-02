declare namespace javax {
    namespace xml {
        namespace transform {
class TransformerException extends java.lang.Exception {
    public getLocator(): javax.xml.transform.SourceLocator
    public setLocator(arg0: javax.xml.transform.SourceLocator): void
    public getException(): java.lang.Throwable
    public getCause(): java.lang.Throwable
    public initCause(arg0: java.lang.Throwable): java.lang.Throwable
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: javax.xml.transform.SourceLocator)
    public constructor(arg0: java.lang.String | string, arg1: javax.xml.transform.SourceLocator, arg2: java.lang.Throwable)
    public getMessageAndLocation(): string
    public getLocationAsString(): string
    public printStackTrace(): void
    public printStackTrace(arg0: java.io.PrintStream): void
    public printStackTrace(arg0: java.io.PrintWriter): void
    public static class: java.lang.Class<any>
}

        }
    }
}