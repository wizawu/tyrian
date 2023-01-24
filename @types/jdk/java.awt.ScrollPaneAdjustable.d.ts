declare namespace java {
  namespace awt {
    class ScrollPaneAdjustable implements java.awt.Adjustable, java.io.Serializable {
      constructor(
        arg0: java.awt.ScrollPane,
        arg1: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda,
        arg2: number | java.lang.Integer
      )
      setSpan(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public getOrientation(): number
      public setMinimum(arg0: number | java.lang.Integer): void
      public getMinimum(): number
      public setMaximum(arg0: number | java.lang.Integer): void
      public getMaximum(): number
      public setUnitIncrement(arg0: number | java.lang.Integer): void
      public getUnitIncrement(): number
      public setBlockIncrement(arg0: number | java.lang.Integer): void
      public getBlockIncrement(): number
      public setVisibleAmount(arg0: number | java.lang.Integer): void
      public getVisibleAmount(): number
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public getValueIsAdjusting(): boolean
      public setValue(arg0: number | java.lang.Integer): void
      public getValue(): number
      public addAdjustmentListener(
        arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda
      ): void
      public removeAdjustmentListener(
        arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda
      ): void
      public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
      public toString(): java.lang.String
      public paramString(): java.lang.String
    }
  }
}
