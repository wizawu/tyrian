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
      public constructor(arg0: int)
      public constructor(arg0: int, arg1: int)
      public constructor(arg0: int, arg1: int, arg2: int)
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      public constructor(arg0: javax.swing.BoundedRangeModel)
      public getUI(): javax.swing.plaf.SliderUI
      public setUI(arg0: javax.swing.plaf.SliderUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected createChangeListener(): javax.swing.event.ChangeListener
      public addChangeListener(arg0: javax.swing.event.ChangeListener): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public getModel(): javax.swing.BoundedRangeModel
      public setModel(arg0: javax.swing.BoundedRangeModel): void
      public getValue(): int
      public setValue(arg0: int): void
      public getMinimum(): int
      public setMinimum(arg0: int): void
      public getMaximum(): int
      public setMaximum(arg0: int): void
      public getValueIsAdjusting(): boolean
      public setValueIsAdjusting(arg0: boolean): void
      public getExtent(): int
      public setExtent(arg0: int): void
      public getOrientation(): int
      public setOrientation(arg0: int): void
      public setFont(arg0: java.awt.Font): void
      public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
      public getLabelTable(): java.util.Dictionary
      public setLabelTable(arg0: java.util.Dictionary): void
      protected updateLabelUIs(): void
      public createStandardLabels(arg0: int): java.util.Hashtable<java.lang.Integer,javax.swing.JComponent>
      public createStandardLabels(arg0: int, arg1: int): java.util.Hashtable<java.lang.Integer,javax.swing.JComponent>
      public getInverted(): boolean
      public setInverted(arg0: boolean): void
      public getMajorTickSpacing(): int
      public setMajorTickSpacing(arg0: int): void
      public getMinorTickSpacing(): int
      public setMinorTickSpacing(arg0: int): void
      public getSnapToTicks(): boolean
      getSnapToValue(): boolean
      public setSnapToTicks(arg0: boolean): void
      setSnapToValue(arg0: boolean): void
      public getPaintTicks(): boolean
      public setPaintTicks(arg0: boolean): void
      public getPaintTrack(): boolean
      public setPaintTrack(arg0: boolean): void
      public getPaintLabels(): boolean
      public setPaintLabels(arg0: boolean): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
