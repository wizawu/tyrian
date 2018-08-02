declare namespace sun {
    namespace misc {
        interface JavaIOAccess {
            console(): java.io.Console
            charset(): java.nio.charset.Charset
        }
    }
}