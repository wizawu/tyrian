declare namespace javax {
  namespace swing {

    class JSpinner$DefaultEditor extends javax.swing.JPanel implements javax.swing.event.ChangeListener, java.beans.PropertyChangeListener, java.awt.LayoutManager {
      public constructor(arg0: javax.swing.JSpinner)
      public dismiss(arg0: javax.swing.JSpinner): void
      public getSpinner(): javax.swing.JSpinner
      public getTextField(): javax.swing.JFormattedTextField
      public stateChanged(arg0: javax.swing.event.ChangeEvent): void
      public propertyChange(arg0: java.beans.PropertyChangeEvent): void
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public layoutContainer(arg0: java.awt.Container): void
      public commitEdit(): void
      public getBaseline(arg0: int, arg1: int): int
      public getBaselineResizeBehavior(): java.awt.Component$BaselineResizeBehavior
    }

  }
}
