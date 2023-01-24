declare namespace javax {
  namespace swing {
    interface ComboBoxEditor {
      getEditorComponent(): java.awt.Component
      setItem(arg0: java.lang.Object | any): void
      getItem(): java.lang.Object
      selectAll(): void
      addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
    }
  }
}
