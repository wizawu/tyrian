declare namespace sun {
    namespace print {
class CUPSPrinter {
    public nPageSizes: int
    public nTrays: int
    public getDefaultMediaIndex(): int
    public static getServer(): string
    public static getPort(): int
    public static isCupsRunning(): boolean
    public static class: java.lang.Class<any>
}

    }
}