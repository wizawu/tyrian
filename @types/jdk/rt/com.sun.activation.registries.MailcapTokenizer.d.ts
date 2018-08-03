declare namespace com {
    namespace sun {
        namespace activation {
            namespace registries {
                class MailcapTokenizer {
                    public static readonly UNKNOWN_TOKEN: int
                    public static readonly START_TOKEN: int
                    public static readonly STRING_TOKEN: int
                    public static readonly EOI_TOKEN: int
                    public static readonly SLASH_TOKEN: int
                    public static readonly SEMICOLON_TOKEN: int
                    public static readonly EQUALS_TOKEN: int
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