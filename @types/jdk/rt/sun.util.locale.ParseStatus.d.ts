declare namespace sun {
    namespace util {
        namespace locale {
            class ParseStatus {
                public constructor()
                public reset(): void
                public isError(): boolean
                public getErrorIndex(): int
                public getParseLength(): int
                public getErrorMessage(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}