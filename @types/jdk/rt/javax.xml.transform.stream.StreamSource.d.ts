declare namespace javax {
    namespace xml {
        namespace transform {
            namespace stream {
                class StreamSource implements javax.xml.transform.Source {
                    public static FEATURE: string
                    public constructor()
                    public constructor(arg0: java.io.InputStream)
                    public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string)
                    public constructor(arg0: java.io.Reader)
                    public constructor(arg0: java.io.Reader, arg1: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.io.File)
                    public setInputStream(arg0: java.io.InputStream): void
                    public getInputStream(): java.io.InputStream
                    public setReader(arg0: java.io.Reader): void
                    public getReader(): java.io.Reader
                    public setPublicId(arg0: java.lang.String | string): void
                    public getPublicId(): string
                    public setSystemId(arg0: java.lang.String | string): void
                    public getSystemId(): string
                    public setSystemId(arg0: java.io.File): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}