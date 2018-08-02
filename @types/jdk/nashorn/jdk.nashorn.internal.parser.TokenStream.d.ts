declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class TokenStream {
                    public constructor()
                    public isEmpty(): boolean
                    public isFull(): boolean
                    public count(): int
                    public first(): int
                    public last(): int
                    public removeLast(): void
                    public put(arg0: long): void
                    public get(arg0: int): long
                    public commit(arg0: int): void
                    public grow(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}