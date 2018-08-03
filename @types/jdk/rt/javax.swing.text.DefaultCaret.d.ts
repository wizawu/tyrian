declare namespace javax {
    namespace swing {
        namespace text {
            class DefaultCaret extends java.awt.Rectangle implements javax.swing.text.Caret , java.awt.event.FocusListener , java.awt.event.MouseListener , java.awt.event.MouseMotionListener {
                public static readonly UPDATE_WHEN_ON_EDT: int
                public static readonly NEVER_UPDATE: int
                public static readonly ALWAYS_UPDATE: int
                protected listenerList: javax.swing.event.EventListenerList
                protected changeEvent: javax.swing.event.ChangeEvent
                public constructor()
                public setUpdatePolicy(arg0: int): void
                public getUpdatePolicy(): int
                protected getComponent(): javax.swing.text.JTextComponent
                protected repaint(): void
                protected damage(arg0: java.awt.Rectangle): void
                protected adjustVisibility(arg0: java.awt.Rectangle): void
                protected getSelectionPainter(): javax.swing.text.Highlighter$HighlightPainter
                protected positionCaret(arg0: java.awt.event.MouseEvent): void
                protected moveCaret(arg0: java.awt.event.MouseEvent): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public mouseClicked(arg0: java.awt.event.MouseEvent): void
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public mouseReleased(arg0: java.awt.event.MouseEvent): void
                public mouseEntered(arg0: java.awt.event.MouseEvent): void
                public mouseExited(arg0: java.awt.event.MouseEvent): void
                public mouseDragged(arg0: java.awt.event.MouseEvent): void
                public mouseMoved(arg0: java.awt.event.MouseEvent): void
                public paint(arg0: java.awt.Graphics): void
                public install(arg0: javax.swing.text.JTextComponent): void
                public deinstall(arg0: javax.swing.text.JTextComponent): void
                public addChangeListener(arg0: javax.swing.event.ChangeListener): void
                public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
                public getChangeListeners(): javax.swing.event.ChangeListener[]
                protected fireStateChanged(): void
                public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
                public setSelectionVisible<T extends java.util.EventListener>(arg0: boolean): void
                public isSelectionVisible<T extends java.util.EventListener>(): boolean
                public isActive<T extends java.util.EventListener>(): boolean
                public isVisible<T extends java.util.EventListener>(): boolean
                public setVisible<T extends java.util.EventListener>(arg0: boolean): void
                public setBlinkRate<T extends java.util.EventListener>(arg0: int): void
                public getBlinkRate<T extends java.util.EventListener>(): int
                public getDot<T extends java.util.EventListener>(): int
                public getMark<T extends java.util.EventListener>(): int
                public setDot<T extends java.util.EventListener>(arg0: int): void
                public moveDot<T extends java.util.EventListener>(arg0: int): void
                public moveDot<T extends java.util.EventListener>(arg0: int, arg1: javax.swing.text.Position$Bias): void
                public setDot<T extends java.util.EventListener>(arg0: int, arg1: javax.swing.text.Position$Bias): void
                public getDotBias<T extends java.util.EventListener>(): javax.swing.text.Position$Bias
                public getMarkBias<T extends java.util.EventListener>(): javax.swing.text.Position$Bias
                public setMagicCaretPosition<T extends java.util.EventListener>(arg0: java.awt.Point): void
                public getMagicCaretPosition<T extends java.util.EventListener>(): java.awt.Point
                public equals<T extends java.util.EventListener>(arg0: java.lang.Object): boolean
                public toString<T extends java.util.EventListener>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}