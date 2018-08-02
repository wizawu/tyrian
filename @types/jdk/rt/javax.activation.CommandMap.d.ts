declare namespace javax {
    namespace activation {
abstract class CommandMap {
    public constructor()
    public static getDefaultCommandMap(): javax.activation.CommandMap
    public static setDefaultCommandMap(arg0: javax.activation.CommandMap): void
    public getPreferredCommands(arg0: java.lang.String | string): javax.activation.CommandInfo[]
    public getPreferredCommands(arg0: java.lang.String | string, arg1: javax.activation.DataSource): javax.activation.CommandInfo[]
    public getAllCommands(arg0: java.lang.String | string): javax.activation.CommandInfo[]
    public getAllCommands(arg0: java.lang.String | string, arg1: javax.activation.DataSource): javax.activation.CommandInfo[]
    public getCommand(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.activation.CommandInfo
    public getCommand(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.activation.DataSource): javax.activation.CommandInfo
    public createDataContentHandler(arg0: java.lang.String | string): javax.activation.DataContentHandler
    public createDataContentHandler(arg0: java.lang.String | string, arg1: javax.activation.DataSource): javax.activation.DataContentHandler
    public getMimeTypes(): java.lang.String[]
    public static class: java.lang.Class<any>
}

    }
}