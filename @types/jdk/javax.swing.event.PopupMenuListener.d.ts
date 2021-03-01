declare namespace javax {
  namespace swing {
    namespace event {

      interface PopupMenuListener extends java.util.EventListener {

        popupMenuWillBecomeVisible(arg0: javax.swing.event.PopupMenuEvent): void
        popupMenuWillBecomeInvisible(arg0: javax.swing.event.PopupMenuEvent): void
        popupMenuCanceled(arg0: javax.swing.event.PopupMenuEvent): void
      }

    }
  }
}
