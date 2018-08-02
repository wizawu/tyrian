declare namespace sun {
    namespace management {
        namespace counter {
            namespace perf {
                class Prologue {
                    public getMagic(): int
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getByteOrder(): java.nio.ByteOrder
                    public getEntryOffset(): int
                    public getUsed(): int
                    public getOverflow(): int
                    public getModificationTimeStamp(): long
                    public getNumEntries(): int
                    public isAccessible(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}