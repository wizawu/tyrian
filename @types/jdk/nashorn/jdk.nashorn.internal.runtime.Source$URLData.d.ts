declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class Source$URLData implements jdk.nashorn.internal.runtime.Source$Data {
                    protected readonly cs: java.nio.charset.Charset
                    protected array: char[]
                    protected length: int
                    protected lastModified: long
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public url(): java.net.URL
                    public length(): int
                    public lastModified(): long
                    public array(): char[]
                    public isEvalCode(): boolean
                    protected checkPermissionAndClose(): void
                    protected load(): void
                    protected loadMeta(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}