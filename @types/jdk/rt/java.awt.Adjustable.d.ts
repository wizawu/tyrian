declare namespace java {
    namespace awt {
interface Adjustable {
    HORIZONTAL: int
    VERTICAL: int
    NO_ORIENTATION: int
    getOrientation(): int
    setMinimum(arg0: int): void
    getMinimum(): int
    setMaximum(arg0: int): void
    getMaximum(): int
    setUnitIncrement(arg0: int): void
    getUnitIncrement(): int
    setBlockIncrement(arg0: int): void
    getBlockIncrement(): int
    setVisibleAmount(arg0: int): void
    getVisibleAmount(): int
    setValue(arg0: int): void
    getValue(): int
    addAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
    removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
}

    }
}