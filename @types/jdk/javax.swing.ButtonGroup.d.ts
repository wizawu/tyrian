declare namespace javax {
  namespace swing {

    class ButtonGroup implements java.io.Serializable {
      protected buttons: java.util.Vector<javax.swing.AbstractButton>
      selection: javax.swing.ButtonModel
      public constructor()
      public add(arg0: javax.swing.AbstractButton): void
      public remove(arg0: javax.swing.AbstractButton): void
      public clearSelection(): void
      public getElements(): java.util.Enumeration<javax.swing.AbstractButton>
      public getSelection(): javax.swing.ButtonModel
      public setSelected(arg0: javax.swing.ButtonModel, arg1: boolean | java.lang.Boolean): void
      public isSelected(arg0: javax.swing.ButtonModel): boolean
      public getButtonCount(): number
    }

  }
}
