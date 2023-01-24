declare namespace javax {
  namespace swing {
    class JComboBox<E>
      extends javax.swing.JComponent
      implements
        java.awt.ItemSelectable,
        javax.swing.event.ListDataListener,
        java.awt.event.ActionListener,
        javax.accessibility.Accessible
    {
      protected dataModel: javax.swing.ComboBoxModel<E>
      protected renderer: javax.swing.ListCellRenderer<unknown>
      protected editor: javax.swing.ComboBoxEditor
      protected maximumRowCount: int
      protected isEditable: boolean
      protected keySelectionManager: javax.swing.JComboBox$KeySelectionManager
      protected actionCommand: java.lang.String
      protected lightWeightPopupEnabled: boolean
      protected selectedItemReminder: java.lang.Object
      public constructor(arg0: javax.swing.ComboBoxModel<E>)
      public constructor(arg0: E[])
      public constructor(arg0: java.util.Vector<E>)
      public constructor()
      protected installAncestorListener(): void
      public setUI(arg0: javax.swing.plaf.ComboBoxUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getUI(): javax.swing.plaf.ComboBoxUI
      public setModel(arg0: javax.swing.ComboBoxModel<E>): void
      public getModel(): javax.swing.ComboBoxModel<E>
      public setLightWeightPopupEnabled(arg0: boolean | java.lang.Boolean): void
      public isLightWeightPopupEnabled(): boolean
      public setEditable(arg0: boolean | java.lang.Boolean): void
      public isEditable(): boolean
      public setMaximumRowCount(arg0: number | java.lang.Integer): void
      public getMaximumRowCount(): number
      public setRenderer(
        arg0: javax.swing.ListCellRenderer<unknown> | javax.swing.ListCellRenderer$$lambda<unknown>
      ): void
      public getRenderer(): javax.swing.ListCellRenderer<unknown>
      public setEditor(arg0: javax.swing.ComboBoxEditor): void
      public getEditor(): javax.swing.ComboBoxEditor
      public setSelectedItem(arg0: java.lang.Object | any): void
      public getSelectedItem(): java.lang.Object
      public setSelectedIndex(arg0: number | java.lang.Integer): void
      public getSelectedIndex(): number
      public getPrototypeDisplayValue(): E
      public setPrototypeDisplayValue(arg0: E): void
      public addItem(arg0: E): void
      public insertItemAt(arg0: E, arg1: number | java.lang.Integer): void
      public removeItem(arg0: java.lang.Object | any): void
      public removeItemAt(arg0: number | java.lang.Integer): void
      public removeAllItems(): void
      checkMutableComboBoxModel(): void
      public showPopup(): void
      public hidePopup(): void
      public setPopupVisible(arg0: boolean | java.lang.Boolean): void
      public isPopupVisible(): boolean
      public addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public getItemListeners(): java.awt.event.ItemListener[]
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public addPopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
      public removePopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
      public getPopupMenuListeners(): javax.swing.event.PopupMenuListener[]
      public firePopupMenuWillBecomeVisible(): void
      public firePopupMenuWillBecomeInvisible(): void
      public firePopupMenuCanceled(): void
      public setActionCommand(arg0: java.lang.String | string): void
      public getActionCommand(): java.lang.String
      public setAction(arg0: javax.swing.Action): void
      public getAction(): javax.swing.Action
      protected configurePropertiesFromAction(arg0: javax.swing.Action): void
      protected createActionPropertyChangeListener(arg0: javax.swing.Action): java.beans.PropertyChangeListener
      protected actionPropertyChanged(arg0: javax.swing.Action, arg1: java.lang.String | string): void
      protected fireItemStateChanged(arg0: java.awt.event.ItemEvent): void
      protected fireActionEvent(): void
      protected selectedItemChanged(): void
      public getSelectedObjects(): java.lang.Object[]
      public actionPerformed(arg0: java.awt.event.ActionEvent): void
      public contentsChanged(arg0: javax.swing.event.ListDataEvent): void
      public intervalAdded(arg0: javax.swing.event.ListDataEvent): void
      public intervalRemoved(arg0: javax.swing.event.ListDataEvent): void
      public selectWithKeyChar(arg0: string | java.lang.Character): boolean
      public setEnabled(arg0: boolean | java.lang.Boolean): void
      public configureEditor(arg0: javax.swing.ComboBoxEditor, arg1: java.lang.Object | any): void
      public processKeyEvent(arg0: java.awt.event.KeyEvent): void
      protected processKeyBinding(
        arg0: javax.swing.KeyStroke,
        arg1: java.awt.event.KeyEvent,
        arg2: number | java.lang.Integer,
        arg3: boolean | java.lang.Boolean
      ): boolean
      public setKeySelectionManager(
        arg0: javax.swing.JComboBox$KeySelectionManager | javax.swing.JComboBox$KeySelectionManager$$lambda
      ): void
      public getKeySelectionManager(): javax.swing.JComboBox$KeySelectionManager
      public getItemCount(): number
      public getItemAt(arg0: number | java.lang.Integer): E
      protected createDefaultKeySelectionManager(): javax.swing.JComboBox$KeySelectionManager
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }
  }
}
