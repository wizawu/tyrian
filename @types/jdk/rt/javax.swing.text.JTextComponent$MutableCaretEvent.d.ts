declare namespace javax {
    namespace swing {
        namespace text {
            class JTextComponent$MutableCaretEvent extends javax.swing.event.CaretEvent implements javax.swing.event.ChangeListener , java.awt.event.FocusListener , java.awt.event.MouseListener {
                public toString(): string
                public getDot(): int
                public getMark(): int
                public stateChanged(arg0: javax.swing.event.ChangeEvent): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public mouseReleased(arg0: java.awt.event.MouseEvent): void
                public mouseClicked(arg0: java.awt.event.MouseEvent): void
                public mouseEntered(arg0: java.awt.event.MouseEvent): void
                public mouseExited(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}