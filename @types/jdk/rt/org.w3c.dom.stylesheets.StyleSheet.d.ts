declare namespace org {
    namespace w3c {
        namespace dom {
            namespace stylesheets {
                interface StyleSheet {
                    getType(): string
                    getDisabled(): boolean
                    setDisabled(arg0: boolean): void
                    getOwnerNode(): org.w3c.dom.Node
                    getParentStyleSheet(): org.w3c.dom.stylesheets.StyleSheet
                    getHref(): string
                    getTitle(): string
                    getMedia(): org.w3c.dom.stylesheets.MediaList
                }
            }
        }
    }
}