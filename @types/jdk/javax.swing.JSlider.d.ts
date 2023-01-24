declare namespace javax {
  namespace swing {
    class JSlider extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
      protected sliderModel: javax.swing.BoundedRangeModel
      protected majorTickSpacing: int
      protected minorTickSpacing: int
      protected snapToTicks: boolean
      snapToValue: boolean
      protected orientation: int
      protected changeListener: javax.swing.event.ChangeListener
      protected changeEvent: javax.swing.event.ChangeEvent
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      public constructor(arg0: javax.swing.BoundedRangeModel)
      public getUI(): javax.swing.plaf.SliderUI
      public setUI(arg0: javax.swing.plaf.SliderUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected createChangeListener(): javax.swing.event.ChangeListener
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(
        arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
      ): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public getModel(): javax.swing.BoundedRangeModel
      public setModel(arg0: javax.swing.BoundedRangeModel): void
      public getValue(): number
      public setValue(arg0: number | java.lang.Integer): void
      public getMinimum(): number
      public setMinimum(arg0: number | java.lang.Integer): void
      public getMaximum(): number
      public setMaximum(arg0: number | java.lang.Integer): void
      public getValueIsAdjusting(): boolean
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public getExtent(): number
      public setExtent(arg0: number | java.lang.Integer): void
      public getOrientation(): number
      public setOrientation(arg0: number | java.lang.Integer): void
      public setFont(arg0: java.awt.Font): void
      public imageUpdate(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      public getLabelTable(): java.util.Dictionary
      public setLabelTable(arg0: java.util.Dictionary): void
      protected updateLabelUIs(): void
      public createStandardLabels(
        arg0: number | java.lang.Integer
      ): java.util.Hashtable<java.lang.Integer, javax.swing.JComponent>
      public createStandardLabels(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.util.Hashtable<java.lang.Integer, javax.swing.JComponent>
      public getInverted(): boolean
      public setInverted(arg0: boolean | java.lang.Boolean): void
      public getMajorTickSpacing(): number
      public setMajorTickSpacing(arg0: number | java.lang.Integer): void
      public getMinorTickSpacing(): number
      public setMinorTickSpacing(arg0: number | java.lang.Integer): void
      public getSnapToTicks(): boolean
      getSnapToValue(): boolean
      public setSnapToTicks(arg0: boolean | java.lang.Boolean): void
      setSnapToValue(arg0: boolean | java.lang.Boolean): void
      public getPaintTicks(): boolean
      public setPaintTicks(arg0: boolean | java.lang.Boolean): void
      public getPaintTrack(): boolean
      public setPaintTrack(arg0: boolean | java.lang.Boolean): void
      public getPaintLabels(): boolean
      public setPaintLabels(arg0: boolean | java.lang.Boolean): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }
  }
}
