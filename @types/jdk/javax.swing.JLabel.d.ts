declare namespace javax {
  namespace swing {
    class JLabel extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
      protected labelFor: java.awt.Component
      static readonly LABELED_BY_PROPERTY: java.lang.String
      public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: javax.swing.Icon, arg1: number | java.lang.Integer)
      public constructor(arg0: javax.swing.Icon)
      public constructor()
      public getUI(): javax.swing.plaf.LabelUI
      public setUI(arg0: javax.swing.plaf.LabelUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getText(): java.lang.String
      public setText(arg0: java.lang.String | string): void
      public getIcon(): javax.swing.Icon
      public setIcon(arg0: javax.swing.Icon): void
      public getDisabledIcon(): javax.swing.Icon
      public setDisabledIcon(arg0: javax.swing.Icon): void
      public setDisplayedMnemonic(arg0: number | java.lang.Integer): void
      public setDisplayedMnemonic(arg0: string | java.lang.Character): void
      public getDisplayedMnemonic(): number
      public setDisplayedMnemonicIndex(arg0: number | java.lang.Integer): void
      public getDisplayedMnemonicIndex(): number
      protected checkHorizontalKey(arg0: number | java.lang.Integer, arg1: java.lang.String | string): number
      protected checkVerticalKey(arg0: number | java.lang.Integer, arg1: java.lang.String | string): number
      public getIconTextGap(): number
      public setIconTextGap(arg0: number | java.lang.Integer): void
      public getVerticalAlignment(): number
      public setVerticalAlignment(arg0: number | java.lang.Integer): void
      public getHorizontalAlignment(): number
      public setHorizontalAlignment(arg0: number | java.lang.Integer): void
      public getVerticalTextPosition(): number
      public setVerticalTextPosition(arg0: number | java.lang.Integer): void
      public getHorizontalTextPosition(): number
      public setHorizontalTextPosition(arg0: number | java.lang.Integer): void
      public imageUpdate(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): boolean
      protected paramString(): java.lang.String
      public getLabelFor(): java.awt.Component
      public setLabelFor(arg0: java.awt.Component): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
      static access$000(arg0: javax.swing.JLabel): javax.accessibility.AccessibleContext
    }
  }
}
