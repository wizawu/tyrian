declare namespace javax {
    namespace xml {
        namespace soap {
            interface Text extends javax.xml.soap.Node , org.w3c.dom.Text {
                isComment(): boolean
            }
            interface Text$$Lambda extends javax.xml.soap.Node , org.w3c.dom.Text {
                (): boolean
            }
        }
    }
}