declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicPopupMenuUI extends javax.swing.plaf.PopupMenuUI {
          static readonly MOUSE_GRABBER_KEY: java.lang.StringBuilder
          static readonly MENU_KEYBOARD_HELPER_KEY: java.lang.StringBuilder
          protected popupMenu: javax.swing.JPopupMenu
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          public installUI(arg0: javax.swing.JComponent): void
          public installDefaults(): void
          protected installListeners(): void
          protected installKeyboardActions(): void
          static getInputMap(arg0: javax.swing.JPopupMenu, arg1: javax.swing.JComponent): javax.swing.InputMap
          static getActionMap(): javax.swing.ActionMap
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          protected uninstallKeyboardActions(): void
          static getFirstPopup(): javax.swing.MenuElement
          static getLastPopup(): javax.swing.JPopupMenu
          static getPopups(): java.util.List<javax.swing.JPopupMenu>
          public isPopupTrigger(arg0: java.awt.event.MouseEvent): boolean
          static findEnabledChild(
            arg0: javax.swing.MenuElement[],
            arg1: number | java.lang.Integer,
            arg2: boolean | java.lang.Boolean
          ): javax.swing.MenuElement
          static findEnabledChild(
            arg0: javax.swing.MenuElement[],
            arg1: javax.swing.MenuElement,
            arg2: boolean | java.lang.Boolean
          ): javax.swing.MenuElement
        }
      }
    }
  }
}
