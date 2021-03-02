declare namespace javax {
  namespace swing {

    class JProgressBar extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
      protected orientation: int
      protected paintBorder: boolean
      protected model: javax.swing.BoundedRangeModel
      protected progressString: java.lang.String
      protected paintString: boolean
      protected changeEvent: javax.swing.event.ChangeEvent
      protected changeListener: javax.swing.event.ChangeListener
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: javax.swing.BoundedRangeModel)
      public getOrientation(): number
      public setOrientation(arg0: number | java.lang.Integer): void
      public isStringPainted(): boolean
      public setStringPainted(arg0: boolean | java.lang.Boolean): void
      public getString(): java.lang.String
      public setString(arg0: java.lang.String | string): void
      public getPercentComplete(): number
      public isBorderPainted(): boolean
      public setBorderPainted(arg0: boolean | java.lang.Boolean): void
      protected paintBorder(arg0: java.awt.Graphics): void
      public getUI(): javax.swing.plaf.ProgressBarUI
      public setUI(arg0: javax.swing.plaf.ProgressBarUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected createChangeListener(): javax.swing.event.ChangeListener
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public getModel(): javax.swing.BoundedRangeModel
      public setModel(arg0: javax.swing.BoundedRangeModel): void
      public getValue(): number
      public getMinimum(): number
      public getMaximum(): number
      public setValue(arg0: number | java.lang.Integer): void
      public setMinimum(arg0: number | java.lang.Integer): void
      public setMaximum(arg0: number | java.lang.Integer): void
      public setIndeterminate(arg0: boolean | java.lang.Boolean): void
      public isIndeterminate(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
