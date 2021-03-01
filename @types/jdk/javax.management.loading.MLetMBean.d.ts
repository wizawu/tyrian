declare namespace javax {
  namespace management {
    namespace loading {

      interface MLetMBean {

        getMBeansFromURL(arg0: java.lang.String): java.util.Set<java.lang.Object>
        getMBeansFromURL(arg0: java.net.URL): java.util.Set<java.lang.Object>
        addURL(arg0: java.net.URL): void
        addURL(arg0: java.lang.String): void
        getURLs(): java.net.URL[]
        getResource(arg0: java.lang.String): java.net.URL
        getResourceAsStream(arg0: java.lang.String): java.io.InputStream
        getResources(arg0: java.lang.String): java.util.Enumeration<java.net.URL>
        getLibraryDirectory(): java.lang.String
        setLibraryDirectory(arg0: java.lang.String): void
      }

    }
  }
}
