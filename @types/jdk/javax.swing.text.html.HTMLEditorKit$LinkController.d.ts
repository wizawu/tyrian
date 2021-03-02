declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class HTMLEditorKit$LinkController extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener, java.io.Serializable {
          public constructor()
          public mouseClicked(arg0: java.awt.event.MouseEvent): void
          public mouseDragged(arg0: java.awt.event.MouseEvent): void
          public mouseMoved(arg0: java.awt.event.MouseEvent): void
          protected activateLink(arg0: int, arg1: javax.swing.JEditorPane): void
          activateLink(arg0: int, arg1: javax.swing.JEditorPane, arg2: java.awt.event.MouseEvent): void
          createHyperlinkEvent(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.html.HTMLDocument, arg2: java.lang.String, arg3: javax.swing.text.AttributeSet, arg4: javax.swing.text.Element, arg5: java.awt.event.MouseEvent): javax.swing.event.HyperlinkEvent
          fireEvents(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.html.HTMLDocument, arg2: java.lang.String, arg3: javax.swing.text.Element, arg4: java.awt.event.MouseEvent): void
        }

      }
    }
  }
}
