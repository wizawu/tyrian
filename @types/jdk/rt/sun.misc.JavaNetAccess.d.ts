declare namespace sun {
    namespace misc {
        interface JavaNetAccess {
            getURLClassPath(arg0: java.net.URLClassLoader): sun.misc.URLClassPath
            getOriginalHostName(arg0: java.net.InetAddress): string
        }
    }
}