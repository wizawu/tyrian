declare namespace javax {
  namespace swing {
    namespace plaf {

      abstract class ComboBoxUI extends javax.swing.plaf.ComponentUI {
        public constructor()
        public abstract setPopupVisible(arg0: javax.swing.JComboBox<unknown>, arg1: boolean): void
        public abstract isPopupVisible(arg0: javax.swing.JComboBox<unknown>): boolean
        public abstract isFocusTraversable(arg0: javax.swing.JComboBox<unknown>): boolean
      }

    }
  }
}
