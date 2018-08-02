declare namespace javax {
    namespace swing {
        namespace text {
            class JTextComponent$DefaultKeymap implements javax.swing.text.Keymap {
                public getDefaultAction(): javax.swing.Action
                public setDefaultAction(arg0: javax.swing.Action): void
                public getName(): string
                public getAction(arg0: javax.swing.KeyStroke): javax.swing.Action
                public getBoundKeyStrokes(): javax.swing.KeyStroke[]
                public getBoundActions(): javax.swing.Action[]
                public getKeyStrokesForAction(arg0: javax.swing.Action): javax.swing.KeyStroke[]
                public isLocallyDefined(arg0: javax.swing.KeyStroke): boolean
                public addActionForKeyStroke(arg0: javax.swing.KeyStroke, arg1: javax.swing.Action): void
                public removeKeyStrokeBinding(arg0: javax.swing.KeyStroke): void
                public removeBindings(): void
                public getResolveParent(): javax.swing.text.Keymap
                public setResolveParent(arg0: javax.swing.text.Keymap): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}