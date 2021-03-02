declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        interface ComboPopup {
          show(): void
          hide(): void
          isVisible(): boolean
          getList(): javax.swing.JList<java.lang.Object>
          getMouseListener(): java.awt.event.MouseListener
          getMouseMotionListener(): java.awt.event.MouseMotionListener
          getKeyListener(): java.awt.event.KeyListener
          uninstallingUI(): void
        }

      }
    }
  }
}
