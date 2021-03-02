declare namespace javax {
  namespace swing {

    class JScrollBar extends javax.swing.JComponent implements java.awt.Adjustable, javax.accessibility.Accessible {
      protected model: javax.swing.BoundedRangeModel
      protected orientation: int
      protected unitIncrement: int
      protected blockIncrement: int
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer)
      public constructor()
      public setUI(arg0: javax.swing.plaf.ScrollBarUI): void
      public getUI(): javax.swing.plaf.ScrollBarUI
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getOrientation(): number
      public setOrientation(arg0: number | java.lang.Integer): void
      public getModel(): javax.swing.BoundedRangeModel
      public setModel(arg0: javax.swing.BoundedRangeModel): void
      public getUnitIncrement(arg0: number | java.lang.Integer): number
      public setUnitIncrement(arg0: number | java.lang.Integer): void
      public getBlockIncrement(arg0: number | java.lang.Integer): number
      public setBlockIncrement(arg0: number | java.lang.Integer): void
      public getUnitIncrement(): number
      public getBlockIncrement(): number
      public getValue(): number
      public setValue(arg0: number | java.lang.Integer): void
      public getVisibleAmount(): number
      public setVisibleAmount(arg0: number | java.lang.Integer): void
      public getMinimum(): number
      public setMinimum(arg0: number | java.lang.Integer): void
      public getMaximum(): number
      public setMaximum(arg0: number | java.lang.Integer): void
      public getValueIsAdjusting(): boolean
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public setValues(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public addAdjustmentListener(arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda): void
      public removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda): void
      public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
      protected fireAdjustmentValueChanged(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public getMinimumSize(): java.awt.Dimension
      public getMaximumSize(): java.awt.Dimension
      public setEnabled(arg0: boolean | java.lang.Boolean): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
