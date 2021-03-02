declare namespace javax {
  namespace swing {

    interface ComboBoxEditor {
      getEditorComponent(): java.awt.Component
      setItem(arg0: java.lang.Object): void
      getItem(): java.lang.Object
      selectAll(): void
      addActionListener(arg0: java.awt.event.ActionListener): void
      removeActionListener(arg0: java.awt.event.ActionListener): void
    }

  }
}
