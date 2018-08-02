declare namespace com {
    namespace sun {
        namespace activation {
            namespace registries {
                class MailcapTokenizer {
                    public static UNKNOWN_TOKEN: int
                    public static START_TOKEN: int
                    public static STRING_TOKEN: int
                    public static EOI_TOKEN: int
                    public static SLASH_TOKEN: int
                    public static SEMICOLON_TOKEN: int
                    public static EQUALS_TOKEN: int
                    public constructor(arg0: java.lang.String | string)
                    public setIsAutoquoting(arg0: boolean): void
                    public getCurrentToken(): int
                    public static nameForToken(arg0: int): string
                    public getCurrentTokenValue(): string
                    public nextToken(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}