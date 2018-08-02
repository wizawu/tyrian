declare namespace javax {
    namespace swing {
        namespace text {
            interface Keymap {
                getName(): string
                getDefaultAction(): javax.swing.Action
                setDefaultAction(arg0: javax.swing.Action): void
                getAction(arg0: javax.swing.KeyStroke): javax.swing.Action
                getBoundKeyStrokes(): javax.swing.KeyStroke[]
                getBoundActions(): javax.swing.Action[]
                getKeyStrokesForAction(arg0: javax.swing.Action): javax.swing.KeyStroke[]
                isLocallyDefined(arg0: javax.swing.KeyStroke): boolean
                addActionForKeyStroke(arg0: javax.swing.KeyStroke, arg1: javax.swing.Action): void
                removeKeyStrokeBinding(arg0: javax.swing.KeyStroke): void
                removeBindings(): void
                getResolveParent(): javax.swing.text.Keymap
                setResolveParent(arg0: javax.swing.text.Keymap): void
            }
        }
    }
}