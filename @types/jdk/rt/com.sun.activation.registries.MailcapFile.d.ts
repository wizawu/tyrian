declare namespace com {
    namespace sun {
        namespace activation {
            namespace registries {
                class MailcapFile {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.io.InputStream)
                    public constructor()
                    public getMailcapList(arg0: java.lang.String | string): java.util.Map
                    public getMailcapFallbackList(arg0: java.lang.String | string): java.util.Map
                    public getMimeTypes(): java.lang.String[]
                    public getNativeCommands(arg0: java.lang.String | string): java.lang.String[]
                    public appendToMailcap(arg0: java.lang.String | string): void
                    protected parseLine(arg0: java.lang.String | string): void
                    protected static reportParseError(arg0: int, arg1: int, arg2: java.lang.String | string): void
                    protected static reportParseError(arg0: int, arg1: int, arg2: int, arg3: java.lang.String | string): void
                    protected static reportParseError(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}