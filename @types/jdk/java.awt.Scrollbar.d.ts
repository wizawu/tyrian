declare namespace java {
  namespace awt {
    class Scrollbar extends java.awt.Component implements java.awt.Adjustable, javax.accessibility.Accessible {
      public static readonly HORIZONTAL: int
      public static readonly VERTICAL: int
      value: int
      maximum: int
      minimum: int
      visibleAmount: int
      orientation: int
      lineIncrement: int
      pageIncrement: int
      isAdjusting: boolean
      adjustmentListener: java.awt.event.AdjustmentListener
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      )
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getOrientation(): number
      public setOrientation(arg0: number | java.lang.Integer): void
      public getValue(): number
      public setValue(arg0: number | java.lang.Integer): void
      public getMinimum(): number
      public setMinimum(arg0: number | java.lang.Integer): void
      public getMaximum(): number
      public setMaximum(arg0: number | java.lang.Integer): void
      public getVisibleAmount(): number
      public getVisible(): number
      public setVisibleAmount(arg0: number | java.lang.Integer): void
      public setUnitIncrement(arg0: number | java.lang.Integer): void
      public setLineIncrement(arg0: number | java.lang.Integer): void
      public getUnitIncrement(): number
      public getLineIncrement(): number
      public setBlockIncrement(arg0: number | java.lang.Integer): void
      public setPageIncrement(arg0: number | java.lang.Integer): void
      public getBlockIncrement(): number
      public getPageIncrement(): number
      public setValues(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public getValueIsAdjusting(): boolean
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public addAdjustmentListener(
        arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda
      ): void
      public removeAdjustmentListener(
        arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda
      ): void
      public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processAdjustmentEvent(arg0: java.awt.event.AdjustmentEvent): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
