declare namespace sun {
    namespace management {
        namespace counter {
            interface Counter extends java.io.Serializable {
                getName(): string
                getUnits(): sun.management.counter.Units
                getVariability(): sun.management.counter.Variability
                isVector(): boolean
                getVectorLength(): int
                getValue(): java.lang.Object
                isInternal(): boolean
                getFlags(): int
            }
        }
    }
}