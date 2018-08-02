declare namespace javax {
    namespace activation {
        class MailcapCommandMap extends javax.activation.CommandMap {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.io.InputStream)
            public getPreferredCommands(arg0: java.lang.String | string): javax.activation.CommandInfo[]
            public getAllCommands(arg0: java.lang.String | string): javax.activation.CommandInfo[]
            public getCommand(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.activation.CommandInfo
            public addMailcap(arg0: java.lang.String | string): void
            public createDataContentHandler(arg0: java.lang.String | string): javax.activation.DataContentHandler
            public getMimeTypes(): java.lang.String[]
            public getNativeCommands(arg0: java.lang.String | string): java.lang.String[]
            public static class: java.lang.Class<any>
        }
    }
}