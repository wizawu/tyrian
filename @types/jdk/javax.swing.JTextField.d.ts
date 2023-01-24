declare namespace javax {
  namespace swing {
    class JTextField extends javax.swing.text.JTextComponent implements javax.swing.SwingConstants {
      public static readonly notifyAction: java.lang.String
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(
        arg0: javax.swing.text.Document,
        arg1: java.lang.String | string,
        arg2: number | java.lang.Integer
      )
      public getUIClassID(): java.lang.String
      public setDocument(arg0: javax.swing.text.Document): void
      public isValidateRoot(): boolean
      public getHorizontalAlignment(): number
      public setHorizontalAlignment(arg0: number | java.lang.Integer): void
      protected createDefaultModel(): javax.swing.text.Document
      public getColumns(): number
      public setColumns(arg0: number | java.lang.Integer): void
      protected getColumnWidth(): number
      public getPreferredSize(): java.awt.Dimension
      public setFont(arg0: java.awt.Font): void
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      protected fireActionPerformed(): void
      public setActionCommand(arg0: java.lang.String | string): void
      public setAction(arg0: javax.swing.Action): void
      public getAction(): javax.swing.Action
      protected configurePropertiesFromAction(arg0: javax.swing.Action): void
      protected actionPropertyChanged(arg0: javax.swing.Action, arg1: java.lang.String | string): void
      protected createActionPropertyChangeListener(arg0: javax.swing.Action): java.beans.PropertyChangeListener
      public getActions(): javax.swing.Action[]
      public postActionEvent(): void
      public getHorizontalVisibility(): javax.swing.BoundedRangeModel
      public getScrollOffset(): number
      public setScrollOffset(arg0: number | java.lang.Integer): void
      public scrollRectToVisible(arg0: java.awt.Rectangle): void
      hasActionListener(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
