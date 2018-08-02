declare namespace java {
    namespace awt {
class ScrollPaneAdjustable implements java.awt.Adjustable , java.io.Serializable {
    public getOrientation(): int
    public setMinimum(arg0: int): void
    public getMinimum(): int
    public setMaximum(arg0: int): void
    public getMaximum(): int
    public setUnitIncrement(arg0: int): void
    public getUnitIncrement(): int
    public setBlockIncrement(arg0: int): void
    public getBlockIncrement(): int
    public setVisibleAmount(arg0: int): void
    public getVisibleAmount(): int
    public setValueIsAdjusting(arg0: boolean): void
    public getValueIsAdjusting(): boolean
    public setValue(arg0: int): void
    public getValue(): int
    public addAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
    public removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
    public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
    public toString(): string
    public paramString(): string
    public static class: java.lang.Class<any>
}

    }
}