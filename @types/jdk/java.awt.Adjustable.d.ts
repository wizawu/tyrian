declare namespace java {
  namespace awt {
    interface Adjustable {
      readonly HORIZONTAL: int
      readonly VERTICAL: int
      readonly NO_ORIENTATION: int
      getOrientation(): number
      setMinimum(arg0: number | java.lang.Integer): void
      getMinimum(): number
      setMaximum(arg0: number | java.lang.Integer): void
      getMaximum(): number
      setUnitIncrement(arg0: number | java.lang.Integer): void
      getUnitIncrement(): number
      setBlockIncrement(arg0: number | java.lang.Integer): void
      getBlockIncrement(): number
      setVisibleAmount(arg0: number | java.lang.Integer): void
      getVisibleAmount(): number
      setValue(arg0: number | java.lang.Integer): void
      getValue(): number
      addAdjustmentListener(arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda): void
      removeAdjustmentListener(
        arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda
      ): void
    }
  }
}
