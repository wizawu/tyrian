declare namespace sun {
    namespace font {
class CreatedFontTracker {
    public static MAX_FILE_SIZE: int
    public static MAX_TOTAL_BYTES: int
    public static getTracker(): sun.font.CreatedFontTracker
    public getNumBytes(): int
    public addBytes(arg0: int): void
    public subBytes(arg0: int): void
    public acquirePermit(): boolean
    public releasePermit(): void
    public add(arg0: java.io.File): void
    public set(arg0: java.io.File, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public remove(arg0: java.io.File): void
    public static class: java.lang.Class<any>
}

    }
}