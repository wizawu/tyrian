declare namespace sun {
    namespace applet {
interface AppletViewerFactory {
    createAppletViewer(arg0: int, arg1: int, arg2: java.net.URL, arg3: java.util.Hashtable): sun.applet.AppletViewer
    getBaseMenuBar(): java.awt.MenuBar
    isStandalone(): boolean
}

    }
}